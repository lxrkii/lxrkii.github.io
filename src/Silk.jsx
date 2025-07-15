import React from "react";

const Silk = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(120deg, #1a0610 0%, #2a0a18 100%)',
        opacity: 0.8
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
          animation: 'silk-animation 20s ease-in-out infinite alternate'
        }}
      />
      <style jsx>{`
        @keyframes silk-animation {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default Silk;