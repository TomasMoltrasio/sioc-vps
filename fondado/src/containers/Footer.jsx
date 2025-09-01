"use client";

import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineAtSymbol,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { BsFacebook, BsInstagram } from "react-icons/bs";
// import { TbBrandWhatsapp } from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <footer className="footer p-3 md:p-8 bg-gray-900 text-neutral-content">
        <div className="flex justify-between h-full items-center w-full lg:justify-center">
          <Image
            src="/logo-fondado.svg"
            alt="logo-fondado"
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
            Calle 68 N° 446 La Plata, Buenos Aires
          </a>
        </div>
        <div className="flex flex-col justify-start items-center w-full h-full">
          <span className="footer-title">Teléfonos</span>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center h-full">
              <a
                href="
            tel:+542216161258"
                className="link link-hover flex justify-center items-center"
              >
                <HiOutlinePhone className="inline-block mr-1" />
                0221 6161258
              </a>
              <a
                href="
            tel:+542215560489"
                className="link link-hover flex justify-center items-center"
              >
                <HiOutlinePhone className="inline-block mr-1" />
                0221 5560489
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="footer-title">Email</span>
          <a
            href="mailto:fondadoinmobiliaria@gmail.com"
            className="link link-hover flex justify-center items-center"
          >
            <HiOutlineAtSymbol className="inline-block mr-1" />
            fondadoinmobiliaria@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/fondadoinmobiliaria/"
              target="_blank"
            >
              <BsFacebook className="cursor-pointer text-2xl text-slate-300 font-medium hover:text-slate-500 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.instagram.com/fondadoinmobiliaria"
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
