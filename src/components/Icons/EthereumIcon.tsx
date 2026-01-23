import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties; // Adicionado para flexibilidade extra
}

export const EthereumIcon = ({
  size = 18,
  color = '#FFFFFF', // MUDADO: Branco para aparecer no fundo azul
  className,
  style,
}: IconProps) => {
  // Calculamos um tamanho para o container (círculo) um pouco maior que o ícone
  const containerSize = size + 12;

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#627EEA', // Fundo Azul Ethereum
        borderRadius: '50%', // Círculo perfeito
        display: 'flex', // Centralizar o SVG
        alignItems: 'center',
        justifyContent: 'center',
        width: containerSize, // Tamanho fixo para garantir que é redondo
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
