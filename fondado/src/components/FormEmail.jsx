"use client";
import { sendEmail } from "@/services/sendEmail";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormEmail() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [emailError, setEmailError] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = sendEmail(email, name, message, telefono)
      .then((res) => {
        setEnviado(true);
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail("");
    setName("");
    setTelefono("");
    setMessage("");
    router.refresh();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    checkEmail();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
    checkPhone();
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const checkEmail = (e) => {
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailError = document.getElementById("emailError");
    if (emailValue === "") {
      emailError.innerHTML = "El email no puede estar vacio";
      emailError.classList.add("text-red-500");
      emailError.classList.remove("text-green-500");
      email.classList.add("border-red-500");
      email.classList.remove("border-green-500");
      setEmailError(true);
    } else if (!emailValue.match(emailRegex)) {
      emailError.innerHTML = "El email no es valido";
      emailError.classList.add("text-red-500");
      emailError.classList.remove("text-green-500");
      email.classList.add("border-red-500");
      email.classList.remove("border-green-500");
      setEmailError(true);
    } else {
      emailError.innerHTML = "El email es valido";
      emailError.classList.add("text-green-500");
      emailError.classList.remove("text-red-500");
      email.classList.add("border-green-500");
      email.classList.remove("border-red-500");
      setEmailError(false);
    }
  };

  const checkPhone = (e) => {
    const phone = document.getElementById("telefono");
    const phoneValue = phone.value.trim();
    const phoneRegex = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    const phoneError = document.getElementById("phoneError");
    if (phoneValue === "") {
      phoneError.innerHTML = "El telefono no puede estar vacio";
      phoneError.classList.add("text-red-500");
      phoneError.classList.remove("text-green-500");
      phone.classList.add("border-red-500");
      phone.classList.remove("border-green-500");
      setPhoneError(false);
    } else if (!phoneValue.match(phoneRegex)) {
      phoneError.innerHTML = "El telefono no es valido";
      phoneError.classList.add("text-red-500");
      phoneError.classList.remove("text-green-500");
      phone.classList.add("border-red-500");
      phone.classList.remove("border-green-500");
      setPhoneError(true);
    } else {
      phoneError.innerHTML = "El telefono es valido";
      phoneError.classList.add("text-green-500");
      phoneError.classList.remove("text-red-500");
      phone.classList.add("border-green-500");
      phone.classList.remove("border-red-500");
      setPhoneError(false);
    }
  };

  return (
    <form method="post" name="myForm" id="myForm">
      <div class="mb-1">
        <label class="block mb-2 text-sm text-slate-900 font-medium">
          Nombre
        </label>

        <input
          type="text"
          name="name"
          id="name"
          disabled={enviado}
          placeholder="Ej: Juan Perez"
          onChange={(e) => handleName(e)}
          className={`block w-full p-3 rounded text-slate-900 bg-gray-100 border border-transparent focus:outline-none focus:border-gray-400 ${
            name === "" ? "" : "border-green-500"
          }`}
        />
      </div>
      <div class="mb-1">
        <label class="block mb-2 text-sm text-slate-900 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          disabled={enviado}
          id="email"
          placeholder="Ej: ejemplo@gmail.com"
          onChange={(e) => handleEmail(e)}
          className="block w-full p-3 rounded text-slate-900 bg-gray-100 border border-transparent focus:outline-none focus:border-gray-400"
        />
        <p id="emailError" className="text-sm"></p>
      </div>
      <div class="mb-1">
        <label class="block mb-2 text-sm text-slate-900 font-medium">
          Telefono
        </label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          disabled={enviado}
          placeholder="Ej: 2216689088"
          onChange={(e) => handleTelefono(e)}
          className={`block w-full p-3 rounded text-slate-900 bg-gray-100 border border-transparent focus:outline-none focus:border-gray-400 `}
        />
        <p id="phoneError" className="text-sm"></p>
      </div>
      <div class="mb-1">
        <label class="block mb-2 text-sm text-slate-900 font-medium">
          Tu consulta
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          disabled={enviado}
          placeholder="Ej: Hola, queria consultar por la propiedad de calle 68 N° 446"
          onChange={(e) => handleMessage(e)}
          className={`block w-full p-3 rounded text-slate-900 bg-gray-100 border border-transparent focus:outline-none focus:border-gray-400 
          resize-y ${message === "" ? "" : "border-green-500"} `}
        ></textarea>
        <div class="mt-4">
          <button
            type="submit"
            disabled={
              email === "" ||
              name === "" ||
              message === "" ||
              emailError ||
              phoneError ||
              enviado
            }
            onClick={handleSubmit}
            className={`btn w-full text-white ${
              enviado
                ? "disabled:btn-outline disabled:btn-secondary"
                : "btn-primary"
            }`}
          >
            {enviado ? "Enviado!" : "Enviar"}
          </button>
        </div>
      </div>
    </form>
  );
}
