import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weatherLabel: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  img: { height: 90, width: 90, backgroundColor: "white" },
  temperatureBox: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: { fontSize: 150 },
});

export { s };
