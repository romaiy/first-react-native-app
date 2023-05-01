import * as Font from 'expo-font';
import * as React from 'react';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AppRouter from './components/AppRouter';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'mt-sbold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
});

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
        <AppRouter/>
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setIsLoading(true)}
        onError={console.warn}
      />
    );
  };

}

