import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import KeyboardShortcutsModal from './components/KeyboardShortcutsModal';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard'); 
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'medium');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // ❌ Removed localStorage check for first-time user (Onboarding always appears)
  const [firstTimeUser, setFirstTimeUser] = useState(true); 

  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('colorTheme') || 'blue');

  // Save preferences when changed
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    console.log("Updated color theme:", colorTheme);
  }, [colorTheme]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('global-search')?.focus();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setShowKeyboardShortcuts(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        setDarkMode(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '1') {
        e.preventDefault();
        setActiveView('dashboard');
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '2') {
        e.preventDefault();
        setActiveView('chat');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const completeOnboarding = useCallback(() => {
    setFirstTimeUser(false); // Onboarding disappears after completion but returns on restart
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'} font-${fontSize} theme-${colorTheme}`}>
      {firstTimeUser && <Onboarding completeOnboarding={completeOnboarding} />}
      
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        toggleDarkMode={() => setDarkMode(prev => !prev)}
        darkMode={darkMode}
        changeFontSize={setFontSize}
        fontSize={fontSize}
        collapsed={sidebarCollapsed}
        toggleSidebar={() => setSidebarCollapsed(prev => !prev)}
        changeColorTheme={setColorTheme}
        colorTheme={colorTheme}
      />
      
      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {activeView === 'dashboard' ? <Dashboard /> : <ChatSection />}
      </main>

      {showKeyboardShortcuts && <KeyboardShortcutsModal onClose={() => setShowKeyboardShortcuts(false)} />}
    </div>
  );
}

export default App;
