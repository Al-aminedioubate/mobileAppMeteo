import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  Img_background: { flex: 1, backgroundColor: "black" },
  img: { opacity: 0.75 },
});

export { s };

/*
https://api.open-meteo.com/v1/forecast?
latitude=52.52&longitude=13.41
&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max
&timezone=auto
&current_weather=true*/
