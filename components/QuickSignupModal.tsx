import React, { useState } from "react";

export default function QuickSignupModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("flowbieBasic", JSON.stringify({ name, email }));
    localStorage.removeItem("flowbiePrefs");
    localStorage.setItem("showFlowbie", "true");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-80">
        <h3 className="text-lg font-semibold text-cyan-700 mb-2">Welcome to FlowNation!</h3>
        <p className="text-sm text-gray-600 mb-4">
          Let's get started with your name and email:
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="border rounded px-2 py-1"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="border rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white rounded py-1 mt-2 hover:bg-orange-600"
          >
            Let's Go 🚴‍♂️
          </button>
        </form>
      </div>
    </div>
  );
}
