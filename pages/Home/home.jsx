import { s } from "./home.style";
import { Text, View } from "react-native";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";

import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";

export function Home(){
    //Lancement de app et pour recuperer les coordonnees de user
    useEffect(() =>{
        getUserCoords();
    }, []);

    //a chaque fois que les coordonnees changes il aura les valeurs(ces valeurs seront recuperer apres le 1er render).
    //Dans ce cas des que les coords changes dans l'app on relance fetch weather.
    useEffect(() =>{
        if(coords){
            fetchWeather(coords);
        }
    }, [coords]);

    //Recuperation de la position de l'utilisateur.
    const [coords, setCoords]= useState();

    //sauvegarde des nouveaux coordonnees pour qu'il puisse etre afficher
    const [weather, setWeather]= useState();
    
    const currentWeather = weather?.current_weather;

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

    console.log(weather);
    
    return currentWeather? (
        <>
            <View style={s.meteo_basic}>
                <MeteoBasic temperature={Math.round(currentWeather?.temperature)}
                city="Todo"/>
            </View>
            <View style={s.searchbar}></View>
            <View style={s.meteo_advanced}></View>
        </>
    ): null;
}