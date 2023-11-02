import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

import { Home } from "./pages/Home/home";
import { s } from "./app.style";
import backgroundImg from "./assets/backgroundIMG.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

export default function App() {
  //par contre si on utilise notre fonts avant que sa ne charge l'application va crasser dont on va conditionner notre rendering.
  //pour qu'il l'affiche seulement quand le font est chargé
  const [isFondLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  console.log(isFondLoaded);
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.Img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFondLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
