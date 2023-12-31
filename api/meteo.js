import axios from "axios";

//la class qui recupere la temperature vue que c'est une promesse et que sa prends du temps alors on met await et data equivaut a response en JSON.
export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityFromCoords(coords) {
    const {
      address: { city, village },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;

    return city || village;
  }

  static async fetchCoordsFromCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr&format=json`
        )
      ).data.results[0];

      return { lat, lng };
    } catch (e) {
      throw "Pas de coordonnées trouvées pour la recherche: " + city;
    }
  }
}
