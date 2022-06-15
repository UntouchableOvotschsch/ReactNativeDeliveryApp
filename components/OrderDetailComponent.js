import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
    Button
} from 'react-native';



const OrderDetailComponent = (props) => {
    return (
        <View style={styles.addNewProduct}>

            <View>
                <Text style={{ color: 'white' }}>{props.title}</Text>
            </View>

            <View style={styles.highlighted}>
                <Text style={{ color: 'blue' }}>{props.productPrice}</Text>
            </View>

            <View style={styles.count}>

                <View style={styles.count}>
                    <View style={styles.highlighted}>
                        <Text style={{ color: 'blue' }}>{props.quantity}</Text>
                    </View>
                </View>

                {/* <TouchableHighlight style={styles.count}>
                    <Text style={{ color: 'white' }}>X</Text>
                </TouchableHighlight> */}

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    addNewProduct: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,

    },
    count: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,

    },
    highlighted: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 50,
        width: 70,
        alignItems: 'center',
    }

})

export default OrderDetailComponent