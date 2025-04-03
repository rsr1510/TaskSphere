
import React, { useState } from 'react';
import './Sidebar.css';
import { 
  FaHome, FaComments, FaChartBar, FaCalendarAlt, FaBell, 
  FaCog, FaMoon, FaSun, FaFont, FaChevronLeft, FaChevronRight,
  FaSearch, FaTasks, FaUser, FaKeyboard
} from 'react-icons/fa';
import { CgColorPicker } from 'react-icons/cg';

function Sidebar({ 
  activeView, setActiveView, toggleDarkMode, darkMode, 
  changeFontSize, fontSize, collapsed, toggleSidebar, 
  changeColorTheme, colorTheme
}) {
  const [showThemePicker, setShowThemePicker] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: <FaChartBar />, view: 'dashboard', shortcut: '⌘1' },
    { name: 'Chat', icon: <FaComments />, view: 'chat', shortcut: '⌘2' },
    { name: 'Calendar', icon: <FaCalendarAlt />, view: 'calendar', shortcut: '' },
    { name: 'Tasks', icon: <FaTasks />, view: 'tasks', shortcut: '' },
    { name: 'Notifications', icon: <FaBell />, view: 'notifications', shortcut: '' },
    { name: 'Settings', icon: <FaCog />, view: 'settings', shortcut: '' },
  ];

  const colorThemes = [
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Purple', value: 'purple' },
    { name: 'Orange', value: 'orange' },
    { name: 'Red', value: 'red' }
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h1>{collapsed ? 'P' : 'TaskSphere'}</h1>
        <button onClick={toggleSidebar} className="collapse-btn" aria-label="Toggle sidebar">
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      
      <div className="global-search">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          id="global-search"
          placeholder={collapsed ? "" : "Search anything..."}
          className={collapsed ? "collapsed" : ""}
        />
        {!collapsed && <span className="search-shortcut">⌘K</span>}
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li 
              key={item.view} 
              className={activeView === item.view ? 'active' : ''}
              onClick={() => setActiveView(item.view)}
              title={collapsed ? item.name : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && (
                <>
                  <span className="nav-text">{item.name}</span>
                  {item.shortcut && <span className="nav-shortcut">{item.shortcut}</span>}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="accessibility-controls">
          <button 
            onClick={toggleDarkMode} 
            className="accessibility-btn tooltip" 
            aria-label="Toggle dark mode"
            data-tooltip={`${darkMode ? 'Light' : 'Dark'} mode (⌘D)`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {!collapsed && <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>}
          </button>
          
          {!collapsed && (
            <div className="font-size-controls">
              <FaFont />
              <button 
                onClick={() => changeFontSize('small')}
                className={`font-size-btn ${fontSize === 'small' ? 'active' : ''}`}
                aria-label="Small font size"
              >
                A
              </button>
              <button 
                onClick={() => changeFontSize('medium')}
                className={`font-size-btn ${fontSize === 'medium' ? 'active' : ''}`}
                aria-label="Medium font size"
              >
                A
              </button>
              <button 
                onClick={() => changeFontSize('large')}
                className={`font-size-btn ${fontSize === 'large' ? 'active' : ''}`}
                aria-label="Large font size"
              >
                A
              </button>
            </div>
          )}
          
          <button 
            className="accessibility-btn tooltip" 
            aria-label="Change theme color"
            // onClick={(e) => {
            //   e.stopPropagation(); 
            //   setShowThemePicker(prev => !prev);
            // }}

            onClick={() => changeColorTheme('green')}
            
            
            data-tooltip="Change theme"
          >
            <CgColorPicker />
            {!collapsed && <span>Theme</span>}
          </button>
          
          {showThemePicker && (
            <div className="theme-picker">
              {colorThemes.map(theme => (
                <button 
                  key={theme.value}
                  className={`theme-option theme-${theme.value} ${colorTheme === theme.value ? 'active' : ''}`}
                  onClick={() => {
                    changeColorTheme(theme.value);
                    setShowThemePicker(false);
                  }}
                  title={theme.name}
                />
              ))}
            </div>
          )}
          
          <button 
            className="accessibility-btn tooltip" 
            aria-label="Keyboard shortcuts"
            data-tooltip="Shortcuts (⌘/)"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', {
              key: '/',
              ctrlKey: true
            }))}
          >
            <FaKeyboard />
            {!collapsed && <span>Shortcuts</span>}
          </button>
        </div>
        
        {!collapsed && (
          <div className="user-profile">
            <div className="avatar-wrapper">
              <img src="user-avatar.jpg" alt="User avatar" />
              <span className="status-indicator online"></span>
            </div>
            <div className="user-info">
              <h3>RS Rohit</h3>
              <p>Project Manager</p>
            </div>
          </div>
        )}
        
        {collapsed && (
          <div className="collapsed-user-profile">
            <div className="avatar-wrapper">
              <img src="user-avatar.jpg" alt="User avatar" />
              <span className="status-indicator online"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;