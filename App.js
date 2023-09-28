import * as Font from 'expo-font';
import * as React from 'react';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AppRouter from './src/components/AppRouter';
import ProductStore from './src/store/ProductStore';
import './style/reset.css';


const fonts = () => Font.loadAsync({
  'mt-bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  'mt-regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  'mt-medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
  'mt-sbold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
});

const productStore = new ProductStore();

export const Context = React.createContext({
  productStore,
})

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setIsLoading(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Context.Provider value={{productStore}}>
      <AppRouter/>
    </Context.Provider>
  );

}

