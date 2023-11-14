import { TextInput } from "react-native";
import {s} from "./searchBar.style";

export function SearchBar({onSubmit}){
    return (
        <TextInput onSubmitEditing={(e)=> onSubmit(e.nativeEvent.text)} 
        style={s.input} placeholder="Cherche une ville......Ex: Laval" />
    );
}