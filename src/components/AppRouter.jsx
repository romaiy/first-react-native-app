import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from '../../screens/ProductListScreen';
import HomeScreen from '../../screens/HomeScreen';
import UserScreen from '../../screens/UserScreen';

const Tab = createBottomTabNavigator();

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: '#FF5252',
                    tabBarInactiveTintColor: '#858585',
                    headerShown: false,
                    tabBarStyle: {display: 'flex',  justifyContent: 'space-between'}
                })}
            >
                <Tab.Screen name="Products" component={ProductListScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="User" component={UserScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;