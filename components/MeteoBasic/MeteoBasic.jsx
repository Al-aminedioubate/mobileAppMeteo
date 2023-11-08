import { View, Image, TouchableOpacity } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import  {s} from "./MeteoBasic.style";
import { Clock } from "../Clock/Clock.jsx";

export function MeteoBasic({onPress, temperature, city, interpretation}) {
    return(
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weatherLabel}>{interpretation.label}</Txt>

            <View style={s.temperatureBox}>
                <TouchableOpacity onPress={onPress}><Txt style={s.temperature}>{temperature}°</Txt></TouchableOpacity>
                <Image style={s.img} source={interpretation.image}/>
            </View>
        </>
    );
};