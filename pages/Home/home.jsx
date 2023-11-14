import { s } from "./home.style";
import { Alert, Text, View } from "react-native";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";

import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-services";
import { MeteoAdvanced } from "../../components/meteoAdvanced/meteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/container";
import { SearchBar } from "../../components/SearchBar/searchBar";

export function Home(){
    //Lancement de app et pour recuperer les coordonnees de user
    useEffect(() =>{
        getUserCoords();
    },[]);

    //a chaque fois que les coordonnees changes il aura les valeurs(ces valeurs seront recuperer apres le 1er render).
    //Dans ce cas des que les coords changes dans l'app on relance fetch weather.
    useEffect(() =>{
        if(coords){
            fetchWeather(coords);
            fetchCity(coords);
        }
    },[coords]);

    //Recuperation de la position de l'utilisateur.
    const [coords, setCoords]= useState();

    //sauvegarde des nouveaux coordonnees pour qu'il puisse etre afficher
    const [weather, setWeather]= useState();
    const [city, setCity] = useState();
    
    const currentWeather = weather?.current_weather;    //temperature recuperer a partir de l'API.
    async function getUserCoords(){
        let {status} = await requestForegroundPermissionsAsync();
        if(status === "granted"){
            const location = await getCurrentPositionAsync()
            setCoords({
                lat: location.coords.latitude, 
                lng: location.coords.longitude,
            });

        }else{
            setCoords({lat: "45.5662", lng: "-73.7158"});
        }
    }

    //la fonction fecher permettant de recuperer la temperature a partir de L'API.
    async function fetchWeather(coordinates){
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse);
    }

    async function fetchCity(coordinates){
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        setCity(cityResponse);
    }

    const nav = useNavigation();
    function goToForecastPage(){
        nav.navigate("Forecast",{city, ...weather.daily});
    }

    //la fonction pour chercher une ville et afficher la meteo.
    async function fetchCoordsByCity(city){
        try{
            const coords = await MeteoAPI.fetchCoordsFromCity(city);
            setCoords(coords);
        }catch(e){
            
            Alert.alert("OUps !", e);
        }
    }

    return  (
        <Container>
            {currentWeather ? (
                <>
                    <View style={s.meteo_basic}>
                        <MeteoBasic temperature={Math.round(currentWeather?.temperature)}
                        city={city}
                        interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                        onPress={goToForecastPage}
                        />
                    </View>
                    <View style={s.searchbar}>
                        <SearchBar onSubmit={fetchCoordsByCity}/>
                    </View>
                    <View style={s.meteo_advanced}>
                        <MeteoAdvanced wind={currentWeather.windspeed}
                        dusk={weather.daily.sunrise[0].split("T")[1]}
                        dawn={weather.daily.sunset[0].split("T")[1]}
                        />
                    </View>
                </>
            ): null}
        </Container>
    );
}