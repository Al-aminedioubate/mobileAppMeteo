import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

import { Home } from "./pages/Home/home";
import { s } from "./app.style";
import backgroundImg from "./assets/backgroundIMG.png";

export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={s.Img_background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
