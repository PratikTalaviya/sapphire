import { useEffect } from "react";

const PreloadImage = ({ src, onLoad }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = onLoad;
  }, [src, onLoad]);

  return null;
};

export default PreloadImage;
