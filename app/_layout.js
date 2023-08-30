import { Stack } from 'expo-router/stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Bold.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Bold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView}/>;
}