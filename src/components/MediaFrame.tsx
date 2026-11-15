import { useState } from 'react';
import { Layers } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  scrim?: 'none' | 'bottom' | 'vignette';
  fallbackTitle?: string;
}

export function MediaFrame({
  src,
  alt,
  className = '',
  imgClassName = '',
  scrim = 'none',
  fallbackTitle,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#131822] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#161E2E] via-[#1E293B] to-[#0F172A] p-6 text-center text-slate-300"
        >
          <Layers className="h-7 w-7 text-slate-400" strokeWidth={1.5} aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            {fallbackTitle || alt}
          </span>
        </div>
      )}

      {scrim === 'bottom' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
        />
      )}

      {scrim === 'vignette' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/45"
        />
      )}
    </div>
  );
}
