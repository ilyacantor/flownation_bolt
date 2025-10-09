import { useState } from 'react';
import { Settings, Plus, X, Wrench } from 'lucide-react';
import { mockGear, GearItem } from '../../mock/flowhub_gear';

function EquipmentWizardModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="text-gray-400" size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <Wrench className="text-cyan-400" size={28} />
          <h2 className="text-white text-2xl font-bold">Equipment Wizard</h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            The Agentic Compatibility Wizard will soon let you ask complex gear questions like:
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 italic">
              "I have a 2016 Shiv TT bike. Will the new Shimano 105 Di2 groupset work with my frame,
              and what other components would I need to upgrade?"
            </p>
          </div>
          <p className="text-gray-300">
            Get instant compatibility checks, upgrade recommendations, and cost estimates tailored to
            your specific equipment.
          </p>
          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GearLocker() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Settings className="text-cyan-400" size={24} />
            <h2 className="text-white text-2xl font-bold">Gear Locker</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus size={16} />
              Add Bike
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus size={16} />
              Add Component
            </button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {mockGear.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mb-1">
                    {item.brand} {item.model}
                  </div>
                  <div className="text-sm text-gray-500">{item.distance}</div>
                  {item.notes && (
                    <div className="text-xs text-gray-600 mt-2 italic">{item.notes}</div>
                  )}
                </div>
                <div className={`text-xs px-3 py-1 rounded-full ${
                  item.status === 'active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-700 text-gray-500'
                }`}>
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setWizardOpen(true)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Wrench size={20} />
          Open Equipment Wizard
        </button>
      </div>

      <EquipmentWizardModal isOpen={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
}
