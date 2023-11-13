import { TextInput } from "react-native";
import {s} from "./searchBar.style";

export function SearchBar({onSubmit}){
    return <TextInput onSubmitEditing={onSubmit} style={s.input} placeholder="Cherche une ville......Ex: Laval"></TextInput>;
}