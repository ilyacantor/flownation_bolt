import { GraduationCap, Play } from 'lucide-react';
import { flowUniversityCourses } from '../../mock/flowhub_university';

export default function FlowUniversity() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="text-cyan-400" size={24} />
        <h2 className="text-white text-2xl font-bold">FlowUniversity</h2>
      </div>

      <div className="space-y-3">
        {flowUniversityCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors group"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                  {course.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{course.description}</p>
                  <div className="text-xs text-gray-500">{course.duration}</div>
                </div>
              </div>
              <a
                href={course.url}
                className="bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-lg transition-colors flex items-center justify-center flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={18} fill="currentColor" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
