import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderPage from '../pages/OrderPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';

const Tab = createBottomTabNavigator();

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: '#FF5252',
                    tabBarInactiveTintColor: '#858585',
                    headerShown: false
                })}
            >
                <Tab.Screen name="Заказы" component={OrderPage} />
                <Tab.Screen name="Главная" component={HomePage} />
                <Tab.Screen name="Личный кабинет" component={UserPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;