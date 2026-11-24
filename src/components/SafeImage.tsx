import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Massoterapia Recanto do Mar',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-coastal-canvas text-center px-6 py-8 border border-border ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ocean-sheen"
        />
        <Activity
          aria-hidden="true"
          className="relative h-7 w-7 text-primary stroke-[1.5] mb-3"
        />
        <p className="relative text-sm font-medium text-foreground-secondary max-w-xs">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
