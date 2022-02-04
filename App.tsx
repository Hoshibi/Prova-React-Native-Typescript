import { Auth } from './src/navigation/Auth';
import { Home } from './src/screens/Home';
import Game from './src/navigation/Game';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
} from '@expo-google-fonts/work-sans';

export default function App() {

  let [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Auth />
    );
  }
}