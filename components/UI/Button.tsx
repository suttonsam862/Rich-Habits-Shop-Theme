import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'solid', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "uppercase font-sans font-bold tracking-wider px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base clip-path-slant";
  
  const variants = {
    solid: "bg-brand-red text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(208,0,0,0.5)]",
    ghost: "bg-transparent text-white border border-white/20 hover:bg-white hover:text-brand-black hover:border-white",
    outline: "bg-transparent text-white border border-brand-red hover:bg-brand-red hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};