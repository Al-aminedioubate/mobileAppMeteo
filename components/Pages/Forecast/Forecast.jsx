import { TouchableOpacity } from "react-native";
import { Container } from "../../Container/container";
import { Txt } from "../../Txt/Txt";
import { s } from "./forecast.style";
import {useNavigation, useRoute} from "@react-navigation/native";


export function Forecast({}){
    const {params} = useRoute();
    const nav = useNavigation();

    //On va utiliser le spliting pour rendre le code plus lisible
    const backButton = (
        <TouchableOpacity onPress={()=> nav.goBack()}>
            <Txt>{"< Back"}</Txt>
        </TouchableOpacity>
    )

    return (
        <Container>
            {backButton}
        </Container>
    );
   
}