"use client";

import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineAtSymbol,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TbBrandWhatsapp } from "react-icons/tb";
// import { TbBrandWhatsapp } from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <footer className="footer p-3 md:p-8 bg-gray-900 text-neutral-content">
        <div className="flex justify-between h-full items-center w-full lg:justify-center">
          <Image
            src="/logo-penayo-invertido.webp"
            alt="logo-penayo"
            height={100}
            width={160}
            className="lg:mr-4 lg:w-36"
          />
          <a
            className="lg:hidden"
            href="https://www.sioc.com.ar"
            target="_blank"
          >
            <Image
              src="/sioc-blanco.webp"
              alt="logo-sioc"
              width={140}
              height={100}
              className="lg:w-20"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="footer-title">Dirección</span>
          <a
            href="https://goo.gl/maps/kBWSa9VeUPjGkK6L6?coh=178572&entry=tt"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex justify-center items-center"
          >
            <HiOutlineMapPin className="inline-block mr-1" />
            Calle 4 N° 799 La Plata, Buenos Aires
          </a>
        </div>
        <div className="flex flex-col justify-start items-center w-full h-full">
          <span className="footer-title">Teléfonos</span>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center h-full">
              <a
                href="
            tel:+542214250969"
                className="link link-hover flex justify-center items-center"
              >
                <HiOutlinePhone className="inline-block mr-1" />
                0221 425-0969
              </a>
              <a
                href="
            tel:+542214250970"
                className="link link-hover flex justify-center items-center"
              >
                <HiOutlinePhone className="inline-block mr-1" />
                0221 425-0970
              </a>
              <a
                href="
            tel:+542214250971"
                className="link link-hover flex justify-center items-center"
              >
                {" "}
                <HiOutlinePhone className="inline-block mr-1" />
                0221 425-0971
              </a>
            </div>
            <div className="flex flex-col justify-start items-start h-full">
              <a
                href="
                whatsapp://send?text=Hola! Vengo de la página web&phone=+5492215461307"
                className="link link-hover flex justify-center items-center"
              >
                {" "}
                <TbBrandWhatsapp className="inline-block mr-1" />
                0221 5461307
              </a>
              <a
                href="
                whatsapp://send?text=Hola! Vengo de la página web&phone=+5492216431287"
                className="link link-hover flex justify-center items-center"
              >
                {" "}
                <TbBrandWhatsapp className="inline-block mr-1" />
                0221 6431287{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="footer-title">Email</span>
          <a
            href="mailto:info@penayopropiedades.com.ar"
            className="link link-hover flex justify-center items-center"
          >
            <HiOutlineAtSymbol className="inline-block mr-1" />
            info@penayopropiedades.com.ar
          </a>
          <a
            href="mailto:penayonegociosinmobiliarios@gmail.com"
            className="link link-hover flex justify-center items-center"
          >
            <HiOutlineAtSymbol className="inline-block mr-1" />
            penayonegociosinmobiliarios@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/penayonegociosinmobiliarios/"
              target="_blank"
            >
              <BsFacebook className="cursor-pointer text-2xl text-slate-300 font-medium hover:text-slate-500 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/inmobiliariapenayo/"
              target="_blank"
            >
              <BsInstagram className="cursor-pointer text-2xl text-slate-300 font-medium hover:text-slate-500 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="flex justify-between h-full items-center w-full lg:justify-center">
          <a
            className="hidden lg:block"
            href="https://www.sioc.com.ar"
            target="_blank"
          >
            <Image
              src="/sioc-blanco.webp"
              alt="logo-sioc"
              width={160}
              height={100}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
