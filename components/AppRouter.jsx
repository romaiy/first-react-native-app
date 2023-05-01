import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: '#FF5252',
                    tabBarInactiveTintColor: '#858585',
                })}
            >
                <Tab.Screen name="Поиск" component={HomeScreen} />
                <Tab.Screen name="Главная" component={SettingsScreen} />
                <Tab.Screen name="Заказы" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;