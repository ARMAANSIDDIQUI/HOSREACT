import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Services from './pages/Service';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import AutismPage from './pages/AutismTherapy';
import PsychologicalCouncellingPage from './pages/PsychologicalCouncellingPage';
import OccupationalTherapyPage from "./pages/OccupationalTherapyPage";
import SpecialEducationPage from "./pages/SpecialEducationPage";
import DanceTherapyPage from "./pages/DanceTherapyPage";
import MusicTherapyPage from "./pages/MusicTherapyPage";
import YogaTherapyPage from "./pages/YogaTherapyPage";
import HydroTherapyPage from "./pages/HydroTherapyPage";
import GroupClassPage from "./pages/GroupClass";
import ADLTrainingPage from "./pages/ADLTrainingPage";
import ParentTrainingPage from "./pages/ParentTrainingPage";
import TeacherTrainingPage from "./pages/TeacherTrainingPage";
import SchoolTrainingPage from "./pages/SchoolTrainingPage";
import SocialTrainingPage from "./pages/SocialSkillsPage";

import SensoryIntegrationPage from "./pages/SensoryIntegrationPage";
import SpeechTherapyPage from './pages/SpeechTherapySection';
import PhysioTherapyPage from './pages/PhysioTherapyPage';
import DaycarePage from './pages/DayCarePage';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/archive" element={<Archive />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/careers" element={<Careers />} />

    {/* Therapy & Program Pages */}
    
    <Route path="/autism-therapy" element={<AutismPage />} />
    <Route path="/psychological-counselling" element={<PsychologicalCouncellingPage />} />
    <Route path="/occupational-therapy" element={<OccupationalTherapyPage />} />
    <Route path="/special-education" element={<SpecialEducationPage />} />
    <Route path="/dance-therapy" element={<DanceTherapyPage />} />
    <Route path="/music-therapy" element={<MusicTherapyPage />} />
    <Route path="/yoga-therapy" element={<YogaTherapyPage />} />
    <Route path="/hydro-therapy" element={<HydroTherapyPage />} />
    <Route path="/group-sessions" element={<GroupClassPage />} />
    <Route path="/adl-training" element={<ADLTrainingPage />} />
    <Route path="/parent-training" element={<ParentTrainingPage />} />
    <Route path="/teacher-training" element={<TeacherTrainingPage />} />
    <Route path="/school-training" element={<SchoolTrainingPage />} />
    <Route path="/social-skill-training" element={<SocialTrainingPage />} />
    <Route path="/sensory-integration" element={<SensoryIntegrationPage />} />
    <Route path="/speech-therapy" element={<SpeechTherapyPage />} />
    <Route path="/physio-therapy" element={<PhysioTherapyPage />} />
    <Route path="/daycare" element={<DaycarePage />} />
  </Routes>
  );
}

export default App;
