import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./components/Pages/Forecast/Forecast";
import { Home } from "./pages/Home/home";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  //par contre si on utilise notre fonts avant que sa ne charge l'application va crasser dont on va conditionner notre rendering.
  //pour qu'il l'affiche seulement quand le font est chargé
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return isFontLoaded ? (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Forecast" component={Forecast} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}
