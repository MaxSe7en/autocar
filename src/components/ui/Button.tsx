import type { JSX } from 'preact';

interface ButtonProps {
  children: JSX.Element | string;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  onClick?: (e: Event) => void; // Made optional
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = "primary", 
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 active:scale-95",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300",
    outline: "bg-transparent text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50",
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
}