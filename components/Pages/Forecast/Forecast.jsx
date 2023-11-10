import { TouchableOpacity, View } from "react-native";
import { Container } from "../../Container/container";
import { Txt } from "../../Txt/Txt";
import { s } from "./forecast.style";
import {useNavigation, useRoute} from "@react-navigation/native";
import { ForecastListItems } from "../../ForecastListItems/forecastListItems";

export function Forecast({}){
    const {params} = useRoute();
    const nav = useNavigation();

    //On va utiliser le spliting pour rendre le code plus lisible
    const backButton = (
        <TouchableOpacity style={s.backBtn} onPress={()=> nav.goBack()}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
    )

    const header = (
        <View style={s.headr}>
            {backButton}
            <View style={s.header_text}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    )

    return (
        <Container>
            {header}
            <View style={{marginTop: 50,}}>
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
                <ForecastListItems image={require("../../../assets/clouds.png")} day= "LUN" date="03/11/2023" temperature={14} />
            </View>
        </Container>
    );
   
}