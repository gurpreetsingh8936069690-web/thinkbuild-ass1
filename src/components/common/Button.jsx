import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-brand-700 hover:bg-brand-800 text-white shadow-sm hover:shadow focus:ring-brand-500",
    secondary: "bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow focus:ring-teal-400",
    accent: "bg-brand-100 hover:bg-brand-200 text-brand-900 focus:ring-brand-400",
    outline: "border-2 border-slate-200 hover:border-brand-600 hover:bg-brand-50 text-slate-700 hover:text-brand-700 focus:ring-brand-400",
    ghost: "text-slate-600 hover:text-brand-700 hover:bg-slate-100 focus:ring-brand-400",
    white: "bg-white text-brand-800 hover:bg-slate-100 shadow-sm focus:ring-white"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {content}
    </button>
  );
}
