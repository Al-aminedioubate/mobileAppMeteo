import { s } from "./home.style";
import { Text, View } from "react-native";

export function Home(){
    return (
    <>
        <View style={s.meteo_basic}>
            <Text style={{fontSize: 60, color: "white"}}>Hello</Text>
        </View>
        <View style={s.searchbar}></View>
        <View style={s.meteo_advanced}></View>
    </>);
   
}