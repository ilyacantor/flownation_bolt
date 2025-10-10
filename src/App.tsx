import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import TeamFlowPage from './pages/TeamFlowPage';
import CoachesCornerPage from './pages/CoachesCornerPage';
import TeamDirectorPage from './pages/TeamDirectorPage';
import CoachLandingPage from './pages/CoachLandingPage';
import TeamLandingPage from './pages/TeamLandingPage';
import LBSLandingPage from './pages/LBSLandingPage';
import ToolsPage from './pages/ToolsPage';
import { AuthProvider } from './context/AuthContext';
import FlowbieIcon from './components/FlowbieIcon';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/paddock" element={<PaddockPage />} />
          <Route path="/profile" element={<ProfileSettingsPage />} />
          <Route path="/discover" element={<EventDiscoveryPage />} />
          <Route path="/flowhub" element={<FlowHubPage />} />
          <Route path="/buddymatch" element={<BuddyMatchPage />} />
          <Route path="/bikeshop" element={<BikeShopPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/teamflow" element={<TeamFlowPage />} />
          <Route path="/coaches-corner" element={<CoachesCornerPage />} />
          <Route path="/team-director" element={<TeamDirectorPage />} />
          <Route path="/coach-landing" element={<CoachLandingPage />} />
          <Route path="/team-landing" element={<TeamLandingPage />} />
          <Route path="/lbs-landing" element={<LBSLandingPage />} />
          <Route path="/about/tools" element={<ToolsPage />} />
        </Routes>
        <FlowbieIcon />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
