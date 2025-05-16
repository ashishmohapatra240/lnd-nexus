"use client";

import * as React from "react";


interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackContent?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  fallbackContent
}: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className={fallbackClassName}>
        {fallbackContent}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
} 