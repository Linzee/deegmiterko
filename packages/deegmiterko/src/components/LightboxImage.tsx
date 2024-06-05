import { GatsbyImage } from "gatsby-plugin-image";
import React, { FunctionComponent } from "react";
import useApp from "../hooks/useApp";

const LightboxImage: FunctionComponent = () => {
  const { lightboxImage, lightboxOpen, setLightboxImage } = useApp();
  
  return (
    <>
      {lightboxImage && (
        <button className={lightboxOpen ? "lightbox open" : "lightbox"} onClick={() => setLightboxImage(undefined)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <GatsbyImage image={lightboxImage} alt="" objectFit="contain" backgroundColor="transparent" />
          </div>
        </button>
      )}
    </>
  )
}

export default LightboxImage;