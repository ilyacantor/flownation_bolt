import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateCalendarEvents, CalendarEvent } from '../../mock/flowhub_calendar';

const colorMap = {
  training: 'bg-blue-500',
  race: 'bg-red-500',
  group: 'bg-green-500',
  buddy: 'bg-orange-500',
  off: 'bg-gray-600',
};

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const events = generateCalendarEvents(currentDate);

  const weeks: CalendarEvent[][] = [];
  for (let i = 0; i < events.length; i += 7) {
    weeks.push(events.slice(i, i + 7));
  }

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 28);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 28);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <CalendarIcon className="text-cyan-400" size={20} />
          <h2 className="text-white text-xl md:text-2xl font-bold">My Calendar</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ChevronLeft className="text-gray-400" size={20} />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ChevronRight className="text-gray-400" size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-2 md:space-y-4">
        <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-xs text-gray-400 font-semibold mb-2">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>

        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 gap-1 md:gap-2">
            {week.map((event) => {
              const dayNum = event.date.getDate();
              return (
                <div
                  key={event.id}
                  className="bg-gray-800/50 rounded-lg p-2 md:p-3 min-h-[80px] md:min-h-[100px] hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-white text-sm font-semibold">{dayNum}</span>
                    <div className={`w-2 h-2 rounded-full ${colorMap[event.type]}`} />
                  </div>
                  <div className="text-xs text-gray-300 font-medium mb-1">{event.title}</div>
                  {event.duration && (
                    <div className="text-xs text-gray-500">{event.duration}</div>
                  )}
                  {event.distance && (
                    <div className="text-xs text-gray-500">{event.distance}</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-3 md:gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-gray-400">Training</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-gray-400">Race</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-400">Group</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-gray-400">Buddy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <span className="text-gray-400">Off</span>
        </div>
      </div>
    </div>
  );
}
