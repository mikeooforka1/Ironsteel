import React from 'react';
import useReveal from '../hooks/useReveal';

/**
 * Reveal — wraps children in a div that fades/slides into place
 * when scrolled into the viewport. Accepts an optional delay (ms)
 * for staggering siblings, and an optional `as` tag and className.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const [ref, isVisible] = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
