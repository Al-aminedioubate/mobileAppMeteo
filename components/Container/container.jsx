import {s} from "./container.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

import backgroundImg from "../../assets/backgroundIMG.png";

export function Container({children}){
    return <ImageBackground
    source={backgroundImg}
    style={s.Img_background}
    imageStyle={s.img}
  >
    <SafeAreaProvider>
    <SafeAreaView style={s.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
}