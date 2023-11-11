import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  img: { height: 50, width: 50 },
  day: { fontSize: 20 },
  date: { fontSize: 20 },
  forecastList: { marginTop: 50 },
  temperature: { width: 60, textAlign: "center" },
});

export { s };
