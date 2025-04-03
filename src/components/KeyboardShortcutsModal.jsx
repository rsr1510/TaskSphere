import React from 'react';
import './KeyboardShortcutsModal.css';
import { FaTimes } from 'react-icons/fa';

function KeyboardShortcutsModal({ onClose }) {
  const shortcuts = [
    { key: '⌘K', description: 'Global search' },
    { key: '⌘/', description: 'Show keyboard shortcuts' },
    { key: '⌘D', description: 'Toggle dark mode' },
    { key: '⌘1', description: 'Go to Dashboard' },
    { key: '⌘2', description: 'Go to Chat' },
    { key: '⌘↑', description: 'Previous conversation' },
    { key: '⌘↓', description: 'Next conversation' },
    { key: '⌘N', description: 'New conversation' },
    { key: '⌘F', description: 'Search in current view' },
    { key: 'Esc', description: 'Close modal / Cancel action' },
  ];

  return (
    <div className="keyboard-shortcuts-overlay" onClick={onClose}>
      <div className="keyboard-shortcuts-modal" onClick={e => e.stopPropagation()}>
        <div className="keyboard-shortcuts-header">
          <h2>Keyboard Shortcuts</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="keyboard-shortcuts-content">
          <div className="shortcuts-grid">
            {shortcuts.map((shortcut, index) => (
              <div className="shortcut-item" key={index}>
                <span className="shortcut-key">{shortcut.key}</span>
                <span className="shortcut-description">{shortcut.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyboardShortcutsModal;