export default function Button({ as: Component = 'button', variant = 'primary', className = '', children, disabled = false, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ph-bg disabled:cursor-not-allowed disabled:opacity-60';
  const variants = {
    primary: 'bg-gradient-to-br from-ph-accent to-ph-accent-2 text-black hover:opacity-90 focus-visible:ring-ph-accent',
    secondary: 'text-ph-muted hover:text-white border border-ph-border/80 bg-ph-surface/70 hover:bg-ph-surface focus-visible:ring-ph-accent',
    ghost: 'text-ph-muted hover:text-white'
  };

  const finalProps = {
    className: `${base} ${variants[variant]} ${className}`.trim(),
    disabled,
    ...props
  };

  if (Component === 'button' && finalProps.type === undefined) {
    finalProps.type = 'button';
  }

  return (
    <Component {...finalProps}>
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} disabled={disabled} {...props}>
      {children}
    </Component>
  );
}
