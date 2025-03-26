import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  );
};