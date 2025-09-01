import DwellingContainer from "@/containers/DwellingContainer";
import { fetchDwelling } from "@/services/fetchData";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetchDwelling(id);

  // return metadata
  return {
    title: product?.dwelling?.address.streetNumber
      ? `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName} N°${product?.dwelling?.address.streetNumber}, ${product?.dwelling?.address.city}`
      : `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName}, ${product?.dwelling?.address.city}`,
    description: product?.dwelling?.generalDescription.replace(
      /(<([^>]+)>)/gi,
      ""
    ),
    images: [product?.dwelling?.images[0]?.secure_url],
    // ...other metadata
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://penayo.com.ar/dwelling/${id}`,
      title: product?.dwelling?.address.streetNumber
        ? `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName} N°${product?.dwelling?.address.streetNumber}, ${product?.dwelling?.address.city}`
        : `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName}, ${product?.dwelling?.address.city}`,
      description: product?.dwelling?.generalDescription.replace(
        /(<([^>]+)>)/gi,
        ""
      ),
      images: [
        {
          url: product?.dwelling?.images[0]?.secure_url,
          width: 800,
          height: 600,
          alt: product?.dwelling?.address.streetNumber
            ? `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName} N°${product?.dwelling?.address.streetNumber}, ${product?.dwelling?.address.city}`
            : `${product?.dwelling?.subtype} en ${product?.dwelling?.address.streetName}, ${product?.dwelling?.address.city}`,
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
}

export default async function Dwelling({ params: { id } }) {
  const data = await fetchDwelling(id);

  return <DwellingContainer data={data} />;
}
