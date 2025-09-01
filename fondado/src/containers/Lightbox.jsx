"use client";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "@/components/NextJsImage";

export default function LightboxContainer({ image }) {
  const slides = image.map((img) => ({
    src: img.secure_url,
  }));

  const slidesPhoto = image.map((img) => ({
    src: img.secure_url,
    width: 800,
    height: 600,
  }));

  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="w-full overflow-hidden lg:max-h-52">
        <PhotoAlbum
          photos={slidesPhoto.slice(0, 5)}
          layout="rows"
          onClick={({ index }) => setIndex(index)}
          spacing={5}
          padding={0}
          targetRowHeight={200}
          renderPhoto={NextJsImage}
        />
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
