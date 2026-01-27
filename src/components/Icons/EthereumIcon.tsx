import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const EthereumIcon = ({
  size = 18,
  color = '#FFFFFF',
  className,
  style,
}: IconProps) => {
  const containerSize = size + 6;

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#627EEA',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 256 417"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill={color}
          d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
        />
        <path
          fill={color}
          fillOpacity="0.6"
          d="M127.962 0L0 212.32l127.962 75.639V154.158z"
        />
        <path
          fill={color}
          d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.601 128.038-180.32z"
        />
        <path
          fill={color}
          fillOpacity="0.6"
          d="M127.962 416.905v-104.72L0 236.585z"
        />
      </svg>
    </div>
  );
};
