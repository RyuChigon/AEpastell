import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function CustomAlert(props){
    const [product] = React.useState(props.product);
    //const {price} = props.price;
    //const {food_img} = '../images/FOOD/Food_' + {product} + '.png';
    return (
        <View style={styles.overlay, {flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <Text>{product}</Text>
                </View>
                <View style={{flex: 3}}>
                    <Text>Give it to your character!</Text>
                    <Text>You can get intimacy + 1 !</Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    overlay:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: "flex-end"
    },
})