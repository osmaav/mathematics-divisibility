//@/components/ui/Card.tsx
import type { CardProps } from '@/types';

const Card = ({
  children,
  className = '',
  onClick,
  ...props
}: CardProps) => {
  const isClickable = onClick !== undefined;

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
        ${isClickable ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}
        ${className}
      `.trim()}
      {...(isClickable ? { role: 'button', tabIndex: 0 } : {})}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
