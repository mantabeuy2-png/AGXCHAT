import React from 'react';

interface AgxChatLogoProps {
  className?: string;
  size?: number | string;
}

export const AgxChatLogo: React.FC<AgxChatLogoProps> = ({
  className = 'w-6 h-6',
  size,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="AgxChat Logo"
    >
      {/* Top Bar */}
      <rect x="3" y="6" width="94" height="13" fill="#0B568C" />
      
      {/* Main Speech Bubble Outline & Pointer */}
      <path
        d="M3 25 H16 V62 H84 V25 H97 V75 L41 96 V75 H3 Z"
        fill="#0B568C"
      />
      
      {/* Red/Magenta Middle Dash */}
      <rect x="28" y="37" width="44" height="13" fill="#E6004C" />
    </svg>
  );
};
