class Provider {
  // Gets the weather for a given city
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }

  // Gets the weather for a given city
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }

  // Given Longitude and latitude, this function returns a city
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

export async function city() {
  try {
    const result = await Provider.findCity(0.1278, 51.5074);

    return result;
  } catch (error) {
    console.log("error:", error);
  }
}

export async function weather() {
  try {
    const result = await Provider.getWeather(await city());

    return result;
  } catch (error) {
    console.log("error:", error);
  }
}

export async function localCurrency() {
  try {
    const result = await Provider.getLocalCurrency(await city());

    return result;
  } catch (error) {
    console.log("error:", error);
  }
}

export default Provider;
