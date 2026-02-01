import { useEffect, useRef, useState } from "react"

import "./Image.css"

interface ImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: number
  objectFit?: "cover" | "contain"
  skeletonClassName?: string
  imgClassName?: string
  fullWidth?: number
  fullHeight?: number
}

export default function Image({
  src,
  alt,
  className = "",
  aspectRatio,
  objectFit = "cover",
  skeletonClassName = "",
  imgClassName = "",
  fullWidth,
  fullHeight,
}: ImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [naturalRatio, setNaturalRatio] = useState<number | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && !loaded) {
      handleLoad()
    }
  }, [loaded])

  const handleLoad = () => {
    if (!imgRef.current) return
    const { naturalWidth, naturalHeight } = imgRef.current
    if (naturalWidth && naturalHeight) {
      setNaturalRatio(naturalWidth / naturalHeight)
    }
    setLoaded(true)
  }

  const ratio = aspectRatio || naturalRatio

  return (
    <div
      className={`image-container ${className}`}
      style={
        ratio
          ? { aspectRatio: `${ratio}` }
          : fullWidth && fullHeight
            ? { width: `${fullWidth}px`, height: `${fullHeight}px` }
            : { minHeight: "1rem" }
      }
    >
      {!loaded && (
        <div
          className={`skeleton ${skeletonClassName}`}
          style={{
            width: fullWidth ? `${fullWidth}px` : "100%",
            height: fullHeight ? `${fullHeight}px` : "100%",
            objectFit: objectFit,
          }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{
          opacity: loaded ? 1 : 0,
          objectFit: objectFit,
        }}
        className={`image ${imgClassName}`}
        loading="lazy"
      />
    </div>
  )
}
