import { View} from "react-native";
import {s, StyledLabel, StyledValue, StyledContainer} from "./meteoAdvanced.style";

export function MeteoAdvanced({}){
    return (
        <View style={s.container}>
            <StyledContainer>
                <StyledValue>Todo</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>Todo</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>Todo</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledContainer>
        </View>
    );
}