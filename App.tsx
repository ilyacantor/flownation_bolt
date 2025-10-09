import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoadiePage from './pages/RoadiePage';
import MTBearPage from './pages/MTBearPage';
import GravelerPage from './pages/GravelerPage';
import RunnerPage from './pages/RunnerPage';
import TriathletePage from './pages/TriathletePage';
import PaddockPage from './pages/PaddockPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import EventDiscoveryPage from './pages/EventDiscoveryPage';
import BuddyMatchPage from './pages/BuddyMatchPage';
import BikeShopPage from './pages/BikeShopPage';
import FlowHubPage from './pages/FlowHubPage';
import SolutionsPage from './pages/SolutionsPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import FlowbieIcon from './components/FlowbieIcon';

function AppRoutes() {
  const { isRegistered } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/roadie" element={<RoadiePage />} />
      <Route path="/mtbear" element={<MTBearPage />} />
      <Route path="/persona/mtbear" element={<MTBearPage />} />
      <Route path="/graveler" element={<GravelerPage />} />
      <Route path="/persona/graveler" element={<GravelerPage />} />
      <Route path="/runner" element={<RunnerPage />} />
      <Route path="/triathlete" element={<TriathletePage />} />
      <Route
        path="/paddock"
        element={isRegistered ? <PaddockPage /> : <Navigate to="/landing" />}
      />
      <Route
        path="/profile"
        element={isRegistered ? <ProfileSettingsPage /> : <Navigate to="/landing" />}
      />
      <Route
        path="/discover"
        element={isRegistered ? <EventDiscoveryPage /> : <Navigate to="/landing" />}
      />
      <Route
        path="/flowhub"
        element={isRegistered ? <FlowHubPage /> : <Navigate to="/landing" />}
      />
      <Route path="/buddymatch" element={<BuddyMatchPage />} />
      <Route path="/bikeshop" element={<BikeShopPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <FlowbieIcon />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
