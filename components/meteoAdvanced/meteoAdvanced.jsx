import { View} from "react-native";
import {s} from "./meteoAdvanced.style";
import { Txt } from "../Txt/Txt";

export function MeteoAdvanced({}){
    return (
        <View style={s.container}>
            <View>
                <Txt>Todo</Txt>
                <Txt>Aube</Txt>
            </View>
            <View>
                <Txt>Todo</Txt>
                <Txt>Crepuscule</Txt>
            </View>
            <View>
                <Txt>Todo</Txt>
                <Txt>Vent</Txt>
            </View>
        </View>
    );
}