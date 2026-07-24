import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost';

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  external?: boolean;
  onClick?: () => void;
}

interface ActionButtonProps extends CommonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost'
};

export function LinkButton({
  to,
  children,
  variant = 'primary',
  className = '',
  external,
  onClick
}: LinkButtonProps) {
  const classes = `${variantClass[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={classes}
    >
      {children}
    </Link>
  );
}

export function ActionButton({
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button'
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass[variant]} ${className}`}
    >
      {children}
    </button>
  );
}