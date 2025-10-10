import { useEffect, useState } from "react";

const flowbieImg = "/assets/u7393982445_A_small_cute_futuristic_robot_mascot_standing_on__f96e5bda-f9bb-4256-98bc-3cfa5ec07533_2.gif";

interface Message { sender: "bot" | "user"; text: string; }
interface UserPrefs { name?: string; sport?: string; distance?: string; }

export default function FlowbieBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prefs, setPrefs] = useState<UserPrefs>({});
  const [initialized, setInitialized] = useState(false);
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showOnboardingButtons, setShowOnboardingButtons] = useState(false);

  const options = [
    "Answer a question about the site",
    "Find buddies or rides",
    "Tell me a joke 🤪",
    "Update my preferences",
    "Reset conversation"
  ];

  useEffect(() => {
    const basic = localStorage.getItem("flowbieBasic");
    const savedPrefs = localStorage.getItem("flowbiePrefs");

    if (basic && !savedPrefs) {
      const { name } = JSON.parse(basic);
      setMessages([
        { sender: "bot", text: `Hey ${name || "there"}! 👋 Great to meet you. To make FlowNation super useful, I can ask a few quick questions — want to do that now?` }
      ]);
      setShowOnboardingButtons(true);
    } else if (savedPrefs) {
      setPrefs(JSON.parse(savedPrefs));
      setMessages([
        { sender: "bot", text: "Hey! 👋 I'm Flowbie — your FlowNation buddy." },
        { sender: "bot", text: "What can I do for you today?" }
      ]);
    } else {
      setMessages([
        { sender: "bot", text: "Hey! 👋 I'm Flowbie — your FlowNation buddy." },
        { sender: "bot", text: "What can I do for you today?" }
      ]);
    }

    fetch("/faqs.json").then(r => r.json()).then(setFaqs).catch(() => setFaqs([]));
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) localStorage.setItem("flowbiePrefs", JSON.stringify(prefs));
  }, [prefs, initialized]);

  const addMessage = (sender: "bot" | "user", text: string) =>
    setMessages(prev => [...prev, { sender, text }]);

  const handleOptionClick = (option: string) => {
    addMessage("user", option);

    if (option.includes("joke")) {
      setTimeout(() =>
        addMessage("bot", "🚴‍♀️ Why did the bike fall over? It was two-tired!"), 500);
      return;
    }

    if (option.includes("Reset")) {
      localStorage.removeItem("flowbiePrefs");
      localStorage.removeItem("flowbieBasic");
      setPrefs({});
      setMessages([
        { sender: "bot", text: "Reset complete! 👋 Let's start fresh." },
        { sender: "bot", text: "What can I do for you today?" }
      ]);
      setShowOnboardingButtons(false);
      return;
    }

    if (option.includes("Update")) { askPreferences(); return; }

    if (option.includes("buddies")) {
      addMessage("bot", "Awesome! Opening the buddy finder for you...");
      localStorage.setItem("showBuddyFinder", "true");
      setTimeout(() => window.location.href = "/community", 800);
      return;
    }

    if (option.includes("question")) {
      addMessage("bot", "Sure! Ask me a question — I'll check my FAQ memory.");
    }
  };

  const handleUserQuestion = (text: string) => {
    const match = faqs.find(f => f.q.toLowerCase().includes(text.toLowerCase()));
    if (match) addMessage("bot", match.a);
    else addMessage("bot", "Hmm… I don't know that yet, but I'll learn soon!");
  };

  const askPreferences = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const basic = localStorage.getItem("flowbieBasic");
    const basicData = basic ? JSON.parse(basic) : {};

    const name = formData.get("name") as string || basicData.name;
    const sport = formData.get("sport") as string;
    const distance = formData.get("distance") as string;
    const newPrefs = { name, sport, distance };
    setPrefs(newPrefs);
    addMessage(
      "bot",
      `Got it, ${name || "friend"}! I'll remember you like ${sport || "sport"} around ${distance || "?"} miles.`
    );
    setShowForm(false);
    setShowOnboardingButtons(false);
  };

  const handleManualInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const text = e.currentTarget.value.trim();
      if (!text) return;
      addMessage("user", text);
      handleUserQuestion(text);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="fixed bottom-24 right-6 bg-white/95 backdrop-blur-sm text-gray-900 p-4 rounded-2xl shadow-2xl w-80 border border-gray-200 animate-fadeIn flex flex-col z-50">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <img src={flowbieImg} alt="Flowbie" className="w-8 h-8" />
          <h3 className="font-semibold text-lg text-cyan-700">Flowbie</h3>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto mb-3 max-h-60 space-y-2 scrollbar-thin">
        {messages.map((msg, i) => (
          <div key={i}
            className={`p-2 rounded-lg text-sm ${
              msg.sender === "bot"
                ? "bg-cyan-50 text-gray-800 self-start"
                : "bg-orange-100 text-gray-800 self-end text-right"
            }`}>
            {msg.text}
          </div>
        ))}
        {showOnboardingButtons && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => {
                setShowForm(true);
                setShowOnboardingButtons(false);
              }}
              className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm flex-1"
            >
              Sure!
            </button>
            <button
              onClick={() => {
                addMessage("bot", "No problem — you can always update your info later.");
                setShowOnboardingButtons(false);
              }}
              className="border border-gray-300 px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-100 flex-1"
            >
              Maybe later
            </button>
          </div>
        )}
      </div>

      {showForm ? (
        <form onSubmit={handleFormSubmit} className="space-y-2">
          <input
            name="name"
            placeholder="Your name"
            defaultValue={prefs.name || (() => {
              const basic = localStorage.getItem("flowbieBasic");
              return basic ? JSON.parse(basic).name : "";
            })()}
            required
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <input
            name="sport"
            placeholder="Favorite sport (cycling, running, tri)"
            defaultValue={prefs.sport || ""}
            required
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <input
            name="distance"
            placeholder="Typical distance (miles)"
            defaultValue={prefs.distance || ""}
            required
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-orange-500 text-white rounded py-1 text-sm hover:bg-orange-600">
              Save
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-300 rounded py-1 text-sm hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <input
            placeholder="Ask Flowbie anything..."
            onKeyDown={handleManualInput}
            className="border border-gray-300 rounded-lg px-2 py-1 text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <ul className="space-y-2">
            {options.map((opt, i) => (
              <li key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="cursor-pointer text-sm text-blue-600 hover:text-orange-600 hover:underline transition-colors">
                {opt}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
