import { TouchableOpacity, View } from "react-native";
import { Container } from "../../Container/container";
import { Txt } from "../../Txt/Txt";
import { s } from "./forecast.style";
import {useNavigation, useRoute} from "@react-navigation/native";
import { ForecastListItems } from "../../ForecastListItems/forecastListItems";
import { getWeatherInterpretation } from "../../../services/meteo-services";
import { DAYS } from "../../../services/Date-service";
import {dateToDDMM} from "../../../services/Date-service";


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

    const forecasList = (
        <View style={s.forecasList}>
            {params.time.map((time, index) =>{
                const code = params.weathercode[index];
                const image = getWeatherInterpretation(code).image;
                const date = new Date(time);
                const day = DAYS[date.getDay()];

                const d = `${date.getUTCDate().toString().padStart(2, "0")}/${date.getMonth() + 1}`;

                const temperature = params.temperature_2m_max[index];

                return (<ForecastListItems image={image} day={day} key={time} date={d} temperature={temperature.toFixed(0)}/>);
            })}
        </View>
    );

    return (
        <Container>
            {header}
            {forecasList}
        </Container>
    );
   
}