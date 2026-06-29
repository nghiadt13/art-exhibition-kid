"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  noWrapper?: boolean;
  wrapperClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  noWrapper = false,
  wrapperClassName = "",
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true);
    if (props.onLoad) {
      props.onLoad(e);
    }
  };

  const imgElement = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-all duration-500 ease-out ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-98"
      } ${className}`}
      onLoad={handleLoad}
      loading={props.loading || "lazy"}
      {...props}
    />
  );

  if (noWrapper) {
    return imgElement;
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Shimmer skeleton background */}
      {!loaded && (
        <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center">
          <div className="w-full h-full animate-shimmer" />
        </div>
      )}
      {imgElement}
    </div>
  );
}
