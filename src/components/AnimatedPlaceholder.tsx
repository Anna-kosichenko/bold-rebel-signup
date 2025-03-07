
import { useEffect, useState } from 'react';

interface AnimatedPlaceholderProps {
  isTyping: boolean;
}

const AnimatedPlaceholder = ({ isTyping }: AnimatedPlaceholderProps) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!isTyping) {
      const interval = setInterval(() => {
        setPosition(prev => (prev === 0 ? 4 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center px-3 text-white/50">
      {isTyping ? (
        <span>Enter email 🤘</span>
      ) : (
        <span className="flex items-center">
          Enter email
          <span 
            className="ml-1 transition-transform duration-500" 
            style={{ transform: `translateX(${position}px)` }}
          >
            👈
          </span>
        </span>
      )}
    </div>
  );
};

export default AnimatedPlaceholder;
