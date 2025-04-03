import React, { useState } from 'react';
import './ChatSection.css';
import { FaPlus, FaSearch, FaVideo, FaCalendarAlt, FaPaperclip, FaSmile, FaStar, FaFlag, FaUserFriends } from 'react-icons/fa';

function ChatSection() {
  const [activeChat, setActiveChat] = useState('team-alpha');
  const [message, setMessage] = useState('');
  const [showRoomModal, setShowRoomModal] = useState(false);

  const chats = [
    {
      id: 'team-alpha',
      name: 'G-Team',
      type: 'group',
      unread: 3,
      lastMessage: 'Tristan: The new design looks great!',
      lastTime: '10:42 AM',
      members: ['Tristan', 'Rahulji', 'Shajan', 'You'],
      messages: [
        { id: 1, sender: 'Tristan', content: "Hey team, how's the progress on the UI redesign?", time: '9:30 AM' },
        { id: 2, sender: 'Rahulji', content: "I've completed about 70% of the dashboard components.", time: '9:32 AM' },
        { id: 3, sender: 'Shajan', content: '@RS can you review my pull request when you get a chance?', time: '9:45 AM', mention: true },
        { id: 4, sender: 'You', content: "Sure @Shajan, I'll take a look after the standup meeting.", time: '9:47 AM' },
        { id: 5, sender: 'Tristan', content: "Great! The new design is coming together nicely.", time: '10:42 AM' },
      ]
    },
    {
      id: 'alice',
      name: 'Gopi',
      type: 'private',
      unread: 0,
      lastMessage: 'Thanks for your help yesterday!',
      lastTime: 'Yesterday',
      messages: [
        { id: 1, sender: 'Gopi', content: 'Hi RS, do you have a minute to discuss the project timeline?', time: 'Yesterday, 2:30 PM' },
        { id: 2, sender: 'You', content: "Sure, what's on your mind?", time: 'Yesterday, 2:32 PM' },
        { id: 3, sender: 'Gopi', content: "I'm concerned about the deadline for the analytics dashboard. It seems tight.", time: 'Yesterday, 2:35 PM' },
        { id: 4, sender: 'You', content: 'I agree. Let me see if we can adjust some of the milestones.', time: 'Yesterday, 2:40 PM' },
        { id: 5, sender: 'Gopi', content: 'Thanks for your help yesterday!', time: 'Yesterday, 5:15 PM' },
      ]
    },
    {
      id: 'bob',
      name: 'Rahulji',
      type: 'private',
      unread: 2,
      lastMessage: 'Can we schedule a meeting for tomorrow?',
      lastTime: '2 days ago',
      messages: [
        { id: 1, sender: 'Rahulji', content: 'RS, have you had a chance to look at the bug report I sent?', time: '2 days ago, 11:20 AM' },
        { id: 2, sender: 'You', content: "Not yet, but it's on my list for today.", time: '2 days ago, 11:25 AM' },
        { id: 3, sender: 'Rahulji', content: "No problem. It's not critical but would be good to address this week.", time: '2 days ago, 11:30 AM' },
        { id: 4, sender: 'Rahulji', content: 'Can we schedule a meeting for tomorrow to discuss the implementation?', time: '2 days ago, 4:15 PM' },
      ]
    },
    {
      id: 'project-x',
      name: 'Project Q2 ',
      type: 'group',
      unread: 0,
      lastMessage: 'Shajan: Let\'s finalize the specs this week',
      lastTime: '1 week ago',
      members: ['Gopi', 'Rahulji', 'Shajan', 'Shreya', 'You'],
      messages: [
        { id: 1, sender: 'Shajan', content: 'The client approved our proposal for Project Q2. We can start planning.', time: '1 week ago, 3:00 PM' },
        { id: 2, sender: 'Shreya', content: 'Great news! When do they want to launch?', time: '1 week ago, 3:05 PM' },
        { id: 3, sender: 'Shajan', content: "They're aiming for Q3, so we have about 4 months.", time: '1 week ago, 3:07 PM' },
        { id: 4, sender: 'Gopi', content: "That's a reasonable timeline. Let's set up a kickoff meeting next week.", time: '1 week ago, 3:10 PM' },
        { id: 5, sender: 'Shajan', content: 'Let\'s finalize the specs this week', time: '1 week ago, 3:15 PM' },
      ]
    }
  ];

  const currentChat = chats.find(chat => chat.id === activeChat);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // In a real app, you would send the message to the backend
    // For now, we'll just clear the input
    setMessage('');
  };

  return (
    <div className="chat-section">
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h2>Conversations</h2>
          <button className="new-chat-btn" onClick={() => setShowRoomModal(true)}>
            <FaPlus />
          </button>
        </div>
        <div className="search-chat">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search conversations..." />
        </div>
        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="chat-item-avatar">
                {chat.type === 'group' ? <FaUserFriends /> : chat.name.charAt(0)}
              </div>
              <div className="chat-item-info">
                <div className="chat-item-name-time">
                  <h3>{chat.name}</h3>
                  <span>{chat.lastTime}</span>
                </div>
                <div className="chat-item-message-unread">
                  <p>{chat.lastMessage}</p>
                  {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chat-main">
        {currentChat && (
          <>
            <div className="chat-header">
              <div className="chat-header-info">
                <h2>{currentChat.name}</h2>
                {currentChat.type === 'group' && (
                  <p>{currentChat.members.join(', ')}</p>
                )}
              </div>
              <div className="chat-header-actions">
                <button className="chat-action-btn" title="Video call">
                  <FaVideo />
                </button>
                <button className="chat-action-btn" title="Schedule meeting">
                  <FaCalendarAlt />
                </button>
                <button className="chat-action-btn" title="Mark as important">
                  <FaStar />
                </button>
                <button className="chat-action-btn" title="Flag">
                  <FaFlag />
                </button>
              </div>
            </div>
            
            <div className="chat-messages">
              {currentChat.messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`message ${msg.sender === 'You' ? 'sent' : 'received'} ${msg.mention ? 'mention' : ''}`}
                >
                  {msg.sender !== 'You' && <div className="message-sender">{msg.sender}</div>}
                  <div className="message-content">{msg.content}</div>
                  <div className="message-time">{msg.time}</div>
                </div>
              ))}
            </div>
            
            <form className="message-input" onSubmit={sendMessage}>
              <button type="button" className="message-attachment-btn">
                <FaPaperclip />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="button" className="message-emoji-btn">
                <FaSmile />
              </button>
              <button type="submit" className="message-send-btn">
                Send
              </button>
            </form>
          </>
        )}
      </div>
      
      {showRoomModal && (
        <div className="modal-overlay">
          <div className="room-modal">
            <h2>Create New Conversation</h2>
            <div className="modal-tabs">
              <button className="modal-tab active">Direct Message</button>
              <button className="modal-tab">Group Chat</button>
              <button className="modal-tab">Schedule Meeting</button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label>Select User(s)</label>
                <input type="text" placeholder="Search users..." />
                <div className="user-list">
                  <div className="user-item">
                    <div className="user-avatar">A</div>
                    <div className="user-name">Alice Smith</div>
                  </div>
                  <div className="user-item">
                    <div className="user-avatar">B</div>
                    <div className="user-name">Bob Johnson</div>
                  </div>
                  <div className="user-item">
                    <div className="user-avatar">C</div>
                    <div className="user-name">Charlie Williams</div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button className="cancel-btn" onClick={() => setShowRoomModal(false)}>Cancel</button>
                <button className="create-btn">Create</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatSection;