export const fetchData = async (searchParams) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const AGENCY_ID = process.env.NEXT_PUBLIC_AGENCY_ID;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const API = "searchAll";

  const body = {
    searchParams: {
      ...searchParams,
      agencyId: AGENCY_ID,
      agencyDwellings: "true",
      orderKeyByDate: "newest",
    },
  };

  try {
    const response = await fetch(`${API_URL}${API}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        ...body,
        occupationStatus: "Disponible",
        deleted: false,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDwelling = async (id) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const API = `/${id}`;

  try {
    const response = await fetch(`${API_URL}${API}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
