import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Calendar, TrendingUp, Mountain } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  distance: string;
  elevation: string;
  location: { lat: number; lng: number };
}

interface InteractiveMapProps {
  events: Event[];
}

const customIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function InteractiveMap({ events }: InteractiveMapProps) {
  return (
    <MapContainer
      center={[34.55, -120.2]}
      zoom={9}
      style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker
          key={event.id}
          position={[event.location.lat, event.location.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="p-2">
              <div className="font-bold text-base mb-2 text-cyan-600">{event.name}</div>
              <div className="text-sm mb-1 flex items-center gap-2 text-gray-700">
                <Calendar size={12} />
                {event.date}
              </div>
              <div className="text-sm mb-1 flex items-center gap-2 text-gray-700">
                <TrendingUp size={12} />
                {event.distance}
              </div>
              <div className="text-sm mb-2 flex items-center gap-2 text-gray-700">
                <Mountain size={12} />
                {event.elevation}
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-1.5 rounded-lg font-semibold">
                View Details
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
