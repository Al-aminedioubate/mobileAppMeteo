import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
    justifyContent: "space-evenly",
    borderColor: "white", //pourqu'il soit visible il faut mettre un border width.
    borderWidth: 2,
    backgroundColor: "#00000044",
  },
});

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

export { s };
