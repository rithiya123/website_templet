// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

// Pages - Make sure these are all default exports
import HomePage from './pages/HomePage.jsx';
import NewsPage from './pages/AllNewsPage.jsx';
import ManagementPage from './pages/FullManagementStructurePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LegalPage from './pages/LegalPage.jsx';

import LeadershipPage from './pages/LeadershipPagge.jsx';
import VisionMissionPage from './pages/VisionMissionPage.jsx';
import RolesResponsibilitiesPage from './pages/RolesResponsibilitiesPage.jsx';
import DirectorMessagePage from './pages/DirectorMessagePage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/roles" element={<RolesResponsibilitiesPage />} />
          <Route path="/about/director-message" element={<DirectorMessagePage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/legal" element={<LegalPage />} />

          
          {/* Legal sub-routes */}
          <Route path="/legal/royal-decree" element={<div>Royal Decree</div>} />
          <Route path="/legal/sub-decree" element={<div>Sub-Decree</div>} />
          <Route path="/legal/prakas" element={<div>Prakas</div>} />
          <Route path="/legal/directives" element={<div>Directives</div>} />
          
          {/* 404 route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;