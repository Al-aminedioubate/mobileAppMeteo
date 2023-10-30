import { s } from "./home.style";
import { Text, View } from "react-native";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import { useEffect, useState } from "react";

export function Home(){

    //Lancement de app et pour recuperer les coordonnees de user.
    useEffect(() =>{
        getUserCoords();
    }, []);

    //Recuperation de la position de l'utilisateur.
    const [coords, setCoords]= useState();

    async function getUserCoords(){
        let {status} = await requestForegroundPermissionsAsync();
        if(status === "granted"){
            const location = await getCurrentPositionAsync()
            setCoords({
                lat: location.coords.latitude, 
                lng: location.coords.longitude,
            });

        }else{
            setCoords({lat: "52.52", lng: "13.41"});
        }
    }

    console.log(coords);
    return (
        <>
            <View style={s.meteo_basic}>
            </View>
            <View style={s.searchbar}></View>
            <View style={s.meteo_advanced}></View>
        </>
    );
   
}