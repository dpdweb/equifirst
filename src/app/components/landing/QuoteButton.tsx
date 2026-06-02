'use client';

interface QuoteButtonProps {
  label?: string;
  className?: string;
}

/**
 * Fires a custom event that LandingLayout listens to.
 * This lets Server Component pages trigger the quote modal
 * without prop-drilling through the tree.
 */
export default function QuoteButton({
  label = 'Get a Quote',
  className = 'lp-btn lp-btn-cyan',
}: QuoteButtonProps) {
  const handleClick = () =>
    document.dispatchEvent(new CustomEvent('lp:openQuote'));

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
