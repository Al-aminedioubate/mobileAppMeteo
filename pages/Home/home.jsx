import { s } from "./home.style";
import { Text, View } from "react-native";

export function Home(){
    return (
    <>
        <View style={s.meteo_basic}></View>
        <View style={s.searchbar}></View>
        <View style={s.meteo_advanced}></View>
    </>);
   
}