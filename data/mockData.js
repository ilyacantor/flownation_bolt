export const mockMetrics = [
  {
    icon: "Activity",
    label: "Today's Distance",
    value: "25",
    unit: "mi",
    sublabel: "12% above avg",
    accentColor: "#06b6d4",
  },
  {
    icon: "Clock",
    label: "Activity Hours",
    value: "2.5",
    unit: "h",
    sublabel: "This week",
    accentColor: "#8b5cf6",
  },
  {
    icon: "Battery",
    label: "Recovery Score",
    value: "1800",
    unit: "",
    sublabel: "Good",
    accentColor: "#10b981",
  },
  {
    icon: "Activity",
    label: "Training Load",
    value: "Moderate",
    unit: "",
    sublabel: "Status",
    accentColor: "#f59e0b",
  },
];

export const mockContent = [
  {
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Science",
    title: "The Science of Recovery for Endurance Athletes",
    description: "Unlocking peak performance requires more than just training hard. Learn the science behind recovery.",
    buttonText: "Read",
  },
  {
    image: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Training",
    title: "Trail Running: Mastering Technical Descents",
    description: "Technical descents can be daunting but with the right technique you'll fly down.",
    buttonText: "Watch",
  },
  {
    image: "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Nutrition",
    title: "Nutrition Training Beyond Gels",
    description: "Exploring fuel sources beyond traditional gels that fuel high performance.",
    buttonText: "Learn",
  },
  {
    image: "https://images.pexels.com/photos/3621177/pexels-photo-3621177.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Guide",
    title: "The Ultimate Guide to Winter Training",
    description: "Don't let cold weather slow you down. Plan your winter training strategy.",
    buttonText: "Get Started",
  },
];

export const mockEvents = [
  {
    image: "https://images.pexels.com/photos/2524739/pexels-photo-2524739.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Running",
    title: "FlowNation Half Marathon",
    date: "November 15, 2025",
    location: "Denver, CO",
  },
  {
    image: "https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Cycling",
    title: "Morning Gravel Grind",
    date: "November 20, 2025",
    location: "Boulder, CO",
  },
  {
    image: "https://images.pexels.com/photos/2524738/pexels-photo-2524738.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Community",
    title: "Wednesday Night Worlds",
    date: "Weekly",
    location: "Local Trails",
  },
  {
    image: "https://images.pexels.com/photos/2524734/pexels-photo-2524734.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Triathlon",
    title: "Colorado Epic Triathlon",
    date: "December 3, 2025",
    location: "Lake Pueblo State Park",
  },
];

export const mockBuddies = [
  { name: "Sarah Chen", location: "Denver, CO", interests: "Trail running, ultra marathons", matchScore: 94 },
  { name: "David Kim", location: "Boulder, CO", interests: "Road cycling, gravel riding", matchScore: 89 },
  { name: "Jessica Lee", location: "Colorado Springs, CO", interests: "Mountain biking, trail running", matchScore: 87 },
  { name: "Mike Torres", location: "Fort Collins, CO", interests: "Triathlon, road cycling", matchScore: 82 },
  { name: "Emily Park", location: "Denver, CO", interests: "Ultra running, hiking", matchScore: 78 },
];

export const mockPerformance = {
  trainingLoad: [
    { label: "Week 1", value: 45, color: "#06b6d4" },
    { label: "Week 2", value: 72, color: "#06b6d4" },
    { label: "Week 3", value: 58, color: "#06b6d4" },
    { label: "Week 4", value: 85, color: "#06b6d4" },
    { label: "Week 5", value: 68, color: "#f97316" },
  ],
  weeklyMileage: [
    { label: "Oct 1", value: 45, color: "#8b5cf6" },
    { label: "Oct 8", value: 52, color: "#8b5cf6" },
    { label: "Oct 15", value: 48, color: "#8b5cf6" },
    { label: "Oct 22", value: 65, color: "#8b5cf6" },
    { label: "Oct 29", value: 58, color: "#10b981" },
  ],
};

export const mockGear = [
  {
    image: "https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Aero Road Helmet",
    description: "Lightweight and aerodynamic helmet designed for long distance rides.",
    rating: 4.5,
    reviewCount: 128,
  },
  {
    image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Trail Running Shoes",
    description: "Grippy outsole and responsive cushioning for technical trails.",
    rating: 4.8,
    reviewCount: 245,
  },
  {
    image: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "GPS Cycling Computer",
    description: "Advanced navigation and performance tracking for serious cyclists.",
    rating: 4.6,
    reviewCount: 89,
  },
  {
    image: "https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Compression Socks",
    description: "Improve recovery and reduce muscle fatigue during training.",
    rating: 4.3,
    reviewCount: 167,
  },
];

export const mockIntegrations = [
  {
    name: "Strava",
    logo: "https://cdn.worldvectorlogo.com/logos/strava-1.svg",
    status: "connected",
  },
  {
    name: "Garmin Connect",
    logo: "https://www.svgrepo.com/show/303265/garmin-logo.svg",
    status: "connected",
  },
  {
    name: "Zwift",
    logo: "https://cdn.worldvectorlogo.com/logos/zwift.svg",
    status: "connected",
  },
  {
    name: "TrainingPeaks",
    logo: "https://www.svgrepo.com/show/331608/trainingpeaks.svg",
    status: "connected",
  },
];

export const mockNews = [
  {
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "New UCI World Tour Team Announces 2026 Roster with Major Signings",
    time: "2 hours ago",
  },
  {
    image: "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=800",
    headline: "Gravel Racing Sees Record Growth as 2025 Season Wraps Up",
    time: "5 hours ago",
  },
  {
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "Pro Cyclist Reveals Training Secrets Behind Championship Win",
    time: "8 hours ago",
  },
  {
    image: "https://images.pexels.com/photos/1571930/pexels-photo-1571930.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "Revolutionary Bike Technology: Lighter Frames, Better Performance",
    time: "12 hours ago",
  },
  {
    image: "https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "Mountain Biking Trail Network Expansion Plans Unveiled",
    time: "1 day ago",
  },
  {
    image: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "E-Bike Regulations Update: What Riders Need to Know",
    time: "1 day ago",
  },
];
