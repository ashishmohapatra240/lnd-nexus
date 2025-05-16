"use client";

import * as React from "react";
import Image from "next/image";

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
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className={className}
      onError={() => setError(true)}
    />
  );
} 