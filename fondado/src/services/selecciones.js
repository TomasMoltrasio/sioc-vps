export const selecciones = [
  {
    name: "Tipo de propiedad",
    options: [
      "Departamento",
      "Cochera",
      "Depósito",
      "Edificio",
      "Duplex",
      "Casa Quinta",
      "PH",
      "Casa",
      "Local",
      "Terreno",
      "Oficina",
      "Galpón",
    ].sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" })),
  },
  {
    name: "Dormitorios",
    options: ["0", "1", "2", "3", "4", "5", "6"],
  },

  {
    name: "Localidades",
    options: [
      "Tolosa",
      "Abasto",
      "Lobos",
      "Gonnet",
      "Berisso",
      "Ensenada",
      "Los Hornos",
      "La Plata",
      "Villa Elisa",
      "San Carlos",
      "Melchor Romero",
      "Lisandro Olmos",
      "City Bell",
      "Magdalena",
      "Arturo Seguí",
      "Altos de San Lorenzo",
      "Villa Parque Sicardi",
      "Villa Elvira",
      "Ringuelet",
    ].sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" })),
  },
];

export const option = [
  "Menor precio",
  "Mayor precio",
  "Mas recientes",
  "Mas antiguos",
];
