import { View, Text } from 'react-native';
import ListSection from './components/ListSection';

const ProductListScreen = () => {
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Заказы</Text>
            <ListSection/>
        </View>
    );
};

export default ProductListScreen;