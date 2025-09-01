import Image from "next/image";
import { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
        className="object-cover w-full h-full rounded-md shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1"
      />
    </div>
  );
}
