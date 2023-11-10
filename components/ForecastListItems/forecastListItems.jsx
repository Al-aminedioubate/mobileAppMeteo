import { View } from "react-native";
import {s} from "./forecastListItems.style";
import { Txt } from "../Txt/Txt";
import { Image } from "react-native";

export function ForecastListItems({image, day, date, temperature}){
    return <View style={s.container}>
        <Image style={s.img} source={image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt>{temperature}°</Txt>
    </View>;
}