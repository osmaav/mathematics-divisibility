//@/components/ui/Button.tsx

import type { ButtonProps, ButtonVariant, ButtonSize } from '@/types';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  size = 'md'
}: ButtonProps) => {
  const base = 'font-bold rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5',
    secondary: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5',
    success: 'bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:-translate-y-0.5',
    danger: 'bg-gradient-to-r from-rose-400 to-red-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-violet-400 text-violet-600 hover:bg-violet-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
