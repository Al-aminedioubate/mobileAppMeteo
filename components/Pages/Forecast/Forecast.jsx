import { Container } from "../../Container/container";
import { Txt } from "../../Txt/Txt";
import { s } from "./forecast.style";
import {useRoute} from "@react-navigation/native";


export function Forecast({}){
    const {params} = useRoute();
    console.log("*** params!", params);
    return (
        <Container>
            <Txt>Forecast</Txt>
        </Container>
    );
   
}