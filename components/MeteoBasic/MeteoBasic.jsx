import { View, Image } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import  {s} from "./MeteoBasic.style";

export function MeteoBasic({temperature, city}) {
    return(
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weatherLabel}>Label</Txt>

            <View style={s.temperatureBox}>
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.img}/>
            </View>
        </>
    );
};