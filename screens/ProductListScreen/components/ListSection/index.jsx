import { useContext } from "react";
import { Context } from "../../../../App";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    list: {
        display: "flex"
    }
})

const ListSection = () => {
    const { productStore } = useContext(Context);

    return (
        <section>
            <ul style={style.list}>
                {productStore.product.map(item => (
                    <li>{item.name} {item.price}</li>
                ))}
            </ul>
        </section>
    );
};

export default ListSection;