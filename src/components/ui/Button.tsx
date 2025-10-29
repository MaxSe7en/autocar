// src/components/ui/Button.jsx
export default function Button({ 
  children, 
  variant = "primary", 
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false 
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 active:scale-95",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300",
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