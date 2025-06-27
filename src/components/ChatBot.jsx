import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, RotateCcw } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm InfoYieldX AI Assistant. I can help you with our services and collect your details for personalized assistance. What's your name?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    company: ''
  });
  const [currentStep, setCurrentStep] = useState('name');

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const quickReplies = [
    "Tell me about your services",
    "What is your pricing?",
    "How can I contact you?",
    "I want to discuss a project"
  ];

  const services = [
    "Web Development",
    "App Development",
    "Accounting",
    "E-Commerce",
    "AI Solutions",
    "Oracle EPS",
    "Database Management"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const botResponse = processUserInput(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const processUserInput = (message) => {
    const lowerMessage = message.toLowerCase();

    if (currentStep === 'name' && !userDetails.name) {
      setUserDetails(prev => ({ ...prev, name: message }));
      setCurrentStep('email');
      return `Nice to meet you, ${message}! Could you please share your email address so we can send you detailed information?`;
    }

    if (currentStep === 'email' && !userDetails.email) {
      setUserDetails(prev => ({ ...prev, email: message }));
      setCurrentStep('service');
      return `Thank you! Now, which of our services are you interested in?\n\n${services.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;
    }

    if (currentStep === 'service' && !userDetails.service) {
      const serviceIndex = parseInt(message) - 1;
      const selectedService = services[serviceIndex] || message;
      setUserDetails(prev => ({ ...prev, service: selectedService }));
      setCurrentStep('phone');
      return `Great choice! ${selectedService} is one of our specialties. Could you share your phone number for better communication?`;
    }

    if (currentStep === 'phone' && !userDetails.phone) {
      setUserDetails(prev => ({ ...prev, phone: message }));
      setCurrentStep('company');
      return `Perfect! What's your company name? (Optional - you can type 'skip' if you prefer not to share)`;
    }

    if (currentStep === 'company' && !userDetails.company) {
      const company = message.toLowerCase() === 'skip' ? 'Not provided' : message;
      setUserDetails(prev => ({ ...prev, company }));
      setCurrentStep('complete');
      sendDetailsToEmail();

      return `Thank you for providing your details! I've sent your information to our team. Here's a summary:\n\n📧 Name: ${userDetails.name}\n📧 Email: ${userDetails.email}\n🔧 Service: ${userDetails.service}\n📞 Phone: ${userDetails.phone}\n🏢 Company: ${company}\n\nOur team will contact you within 24 hours. Is there anything else I can help you with?`;
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return `We offer comprehensive technology solutions:\n\n${services.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nWhich service interests you most?`;
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing varies based on your specific requirements. For detailed pricing information, please contact our team at info@infoyieldx.com or call +1 (555) 123-4567.";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return "You can reach us at:\n📧 Email: info@infoyieldx.com\n📞 Phone: +1 (555) 123-4567\n🏢 Office: 123 Business District, Tech City\n⏰ Hours: Monday-Friday 9AM-6PM";
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('discuss')) {
      if (!userDetails.name) {
        setCurrentStep('name');
        return "I'd love to help you with your project! Let me collect some details first. What's your name?";
      } else {
        return "Great! Since I already have your details, our team will contact you soon to discuss your project requirements in detail.";
      }
    }

    return "Thank you for your message! For detailed information about our services and solutions, please contact our team at info@infoyieldx.com or call +1 (555) 123-4567.";
  };

  const sendDetailsToEmail = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/chatbot/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      console.log("✅ User details sent to backend!");
    } else {
      console.error("❌ Failed to send user details.");
    }
  } catch (error) {
    console.error("🔥 Error sending user details:", error);
  }
};


  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  const clearChat = () => {
    setMessages([{
      id: 1,
      text: "Hello! I'm InfoYieldX AI Assistant. I can help you with our services and collect your details for personalized assistance. What's your name?",
      sender: 'bot',
      timestamp: new Date()
    }]);
    setUserDetails({
      name: '',
      email: '',
      service: '',
      phone: '',
      company: ''
    });
    setCurrentStep('name');
  };

  return (
    <>
    {/* Greeting above chatbot icon */}
    {!isOpen && (
      <div 
        style={{
          position: 'fixed',
          bottom: 100,
          right: 10,
          backgroundColor: '#00bcd4',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 2px 8px rgba(0, 188, 212, 0.4)',
          zIndex: 9999,
          animation: 'fadeIn 0.8s ease-in-out'
        }}
      >
        👋 Hi, I'm Sri
      </div>
    )}
      <div 
        className={`chatbot-button ${isOpen ? 'd-none' : ''}`}
        onClick={() => setIsOpen(true)}
        style={{
          background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))',
          boxShadow: '0 4px 20px rgba(52, 152, 219, 0.4)'
        }}
      >
        <MessageCircle size={24} className="text-white" />
      </div>

      {isOpen && (
        <div className="chatbot-window" style={{ border: `2px solid var(--secondary-color)` }}>
          <div className="chatbot-header" style={{ 
            background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))'
          }}>
            <div className="d-flex align-items-center">
              <Bot size={20} className="text-white me-2" />
              <span className="fw-bold text-white">InfoYieldX AI Assistant</span>
            </div>
            <div>
              <button 
                className="btn btn-sm text-white me-2"
                onClick={clearChat}
                title="Clear Chat"
                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '5px' }}
              >
                <RotateCcw size={16} />
              </button>
              <button 
                className="btn btn-sm text-white"
                onClick={() => setIsOpen(false)}
                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '5px' }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  <div className="d-flex align-items-start">
                    {message.sender === 'bot' && (
                      <Bot size={16} style={{ color: 'var(--primary-color)' }} className="me-2 mt-1 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <User size={16} className="text-white me-2 mt-1 flex-shrink-0" />
                    )}
                    <div className="message-text" style={{ whiteSpace: 'pre-line' }}>
                      {message.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* 🔥 Scroll-to-bottom anchor */}
            <div ref={messagesEndRef} />
          </div>

          {currentStep === 'service' && (
            <div className="chatbot-quick-replies">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="btn btn-sm me-1 mb-2"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px'
                  }}
                  onClick={() => {
                    setInputMessage(service);
                    handleSendMessage();
                  }}
                >
                  {service}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{ borderColor: 'var(--secondary-color)' }}
              />
              <button 
                className="btn"
                onClick={handleSendMessage}
                style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  borderColor: 'var(--primary-color)'
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
