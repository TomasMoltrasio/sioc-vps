"use client";

import { send } from "@emailjs/browser";

const templateId = "template_ecrnz6m";
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const emailto = "fondadoinmobiliaria@gmail.com";

export const sendEmail = async (email, name, message, telefono = "") => {
  send(
    privateKey,
    templateId,
    {
      emailto: emailto,
      name: name,
      message: message,
      email: email,
      telefono: telefono,
    },
    publicKey
  )
    .then((response) => {
      // console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      // console.log("FAILED...", err);
    });
};
