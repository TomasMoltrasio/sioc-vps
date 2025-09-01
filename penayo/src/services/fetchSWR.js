"use client";

export const fetchSWR = async (searchParams) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const AGENCY_ID = process.env.NEXT_PUBLIC_AGENCY_ID;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const API = "searchAll";
  const body = {
    searchParams: {
      orderKeyByDate: "newest",
      ...searchParams,
      agencyId: AGENCY_ID,
      agencyDwellings: "true",
    },
  };
  const url = `${API_URL}${API}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
};
