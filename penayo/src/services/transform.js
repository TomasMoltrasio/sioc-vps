export const transformName = (name) => {
  switch (name) {
    case "Tipo de operación":
      return "publicationType";
    case "Tipo de propiedad":
      return "subtype";
    case "Localidades":
      return "address";
    case "Dormitorios":
      return "spaces";
  }
};

export const transformOptions = (name, option) => {
  switch (name) {
    case "Tipo de operación":
      return { publicationType: option };
    case "Tipo de propiedad":
      return { subtype: [option] };
    case "Localidades":
      return { address: [{ city: option }] };
    case "Dormitorios":
      return {
        spaces: {
          bedrooms: [option],
        },
      };
  }
};

export const addOptions = (name, option, cookie) => {
  if (cookie === undefined) {
    return transformOptions(name, option);
  }

  switch (name) {
    case "Tipo de propiedad":
      return cookie[transformName(name)]
        ? cookie[transformName(name)].push(option)
        : (cookie[transformName(name)] = [option]);
    case "Localidades":
      return cookie[transformName(name)]
        ? cookie[transformName(name)].push({ city: option })
        : (cookie[transformName(name)] = [{ city: option }]);
    case "Dormitorios":
      return cookie[transformName(name)]?.bedrooms[0]
        ? cookie[transformName(name)].bedrooms.push(option)
        : (cookie[transformName(name)] = { bedrooms: [option] });
  }
};

export const substractOptions = (name, option, cookie) => {
  switch (name) {
    case "Tipo de propiedad":
      return cookie[transformName(name)]
        ? cookie[transformName(name)].splice(
            cookie[transformName(name)].indexOf(option),
            1
          )
        : (cookie[transformName(name)] = [option]);
    case "Localidades":
      return cookie[transformName(name)]
        ? cookie[transformName(name)].splice(
            cookie[transformName(name)].indexOf({ city: option }),
            1
          )
        : (cookie[transformName(name)] = [{ city: option }]);
    case "Dormitorios":
      return cookie[transformName(name)].bedrooms[0]
        ? cookie[transformName(name)].bedrooms.splice(
            cookie[transformName(name)].bedrooms.indexOf(option),
            1
          )
        : (cookie[transformName(name)] = [{ bedrooms: [option] }]);
  }
};

export const defaultValue = (cookie, name) => {
  switch (name) {
    case "Tipo de propiedad":
      return cookie.subtype[0] !== undefined
        ? cookie.subtype[0].toString()
        : "";
    case "Localidades":
      return cookie.address[0].city !== undefined
        ? cookie.address[0].city.toString()
        : "";
    case "Dormitorios":
      return cookie.spaces.bedrooms[0] !== undefined
        ? cookie.spaces.bedrooms[0].toString()
        : "";
  }
};

export const checkValue = (cookie, name, option) => {
  switch (name) {
    case "Tipo de propiedad":
      return cookie.subtype.includes(option);
    case "Localidades":
      return cookie.address.some((address) => address.city === option);
    case "Dormitorios":
      return cookie.spaces.bedrooms.includes(option);
  }
};
