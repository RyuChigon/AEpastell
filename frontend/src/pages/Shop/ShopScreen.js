import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Gift from '../../../images/ICON/Icon_gift.svg';
import images from '../../components/Img_index';

export default function Shop({navigation}){
    
    const [product, setProduct] = useState('None');
    
    function handlePurchase(food_name){
        setProduct(food_name);
    };

    function goBackPurchase() {
        setProduct('None');
    }
    
    const purchaseAlert = () => Alert.alert(
        "Purchase",
        "Are you sure you want to buy this item?",
        [
            {
              text: "Cancel", onPress: () => console.log("Cancel Pressed")
            },
            { text: "OK", onPress: () => {Alert.alert("Purchase Complete")}},
        ]
    );

    const CustomAlert = (props) => {
        //const {price} = props.price;
        //const {food_img} = '../images/FOOD/Food_' + {product} + '.png';
        const choice = props.goods
        const price = props.price
        return (
            <View style={{flexDirection: 'row', backgroundColor: 'white', width: '80%', height: '30%', borderRadius: 10}}>
                <View style={{flex: 2, alignItems: 'center'}}>
                    {choice == 'Water' && <Image style={{width: '80%', height: '80%'}} source={images.food.Water} resizeMode='contain'/>}
                    {choice == 'Carrot' && <Image style={{width: '80%', height: '80%'}} source={images.food.Carrot} resizeMode='contain'/>}
                    {choice == 'Apple' && <Image style={{width: '80%', height: '80%'}} source={images.food.Apple} resizeMode='contain'/>}
                    {choice == 'Meat' && <Image style={{width: '80%', height: '80%'}} source={images.food.Meat} resizeMode='contain'/>}
                    {choice == 'Starter' && <Gift style={{width: '100%', height:'70%'}}/>}
                    {choice == 'Starter' &&
                    <View style={{position: 'absolute', top: '40%', width: '100%', height: '40%', flexDirection: 'row', justifyContent:'space-between'}}>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Water.png')} resizeMode='contain'/>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Carrot.png')} resizeMode='contain'/>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Apple.png')} resizeMode='contain'/>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Meat.png')} resizeMode='contain'/>
                    </View>}
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{choice}</Text>
                </View>
                <View style={{flex: 3, justifyContent: 'space-evenly'}}>
                    {choice == 'Starter' && 
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Water.png')} resizeMode='contain'/>
                        <Text>x3</Text>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Carrot.png')} resizeMode='contain'/>
                        <Text>x3</Text>
                    </View>}
                    {choice == 'Starter' &&
                        <View style={{flexDirection: 'row'}}>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Apple.png')} resizeMode='contain'/>
                        <Text>x3</Text>
                        <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Meat.png')} resizeMode='contain'/>
                        <Text>x3</Text>
                        </View>
                    }
                    <Text style={{paddingTop: 10, paddingBottom: 5, fontSize: 15, alignSelf: 'center'}}>Give it to your character!</Text>
                    <Text style={{paddingBottom: 5, fontSize: 15, alignSelf: 'center'}}>You can get intimacy + 1 !</Text>
                    <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>{price}</Text>
                    <View style={{flexDirection: 'row', paddingTop: 15, justifyContent: 'space-evenly'}}>
                        <TouchableOpacity 
                        style={{borderRadius: 3, borderWidth: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 2, paddingRight: 2, backgroundColor: `#6495ed`}}
                        onPress={purchaseAlert}>
                            <Text style={{fontSize: 15}}>Purchase</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{borderRadius: 3, borderWidth: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 2, paddingRight: 2, backgroundColor: `#ff7f50`}}
                        onPress={()=>handlePurchase('None')}>
                            <Text style={{fontSize: 15}}>Go back</Text> 
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex:1, backgroundColor: 'pink'}}>
            <Text style={{marginTop: '10%', alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>Foods</Text>
            <TouchableOpacity 
            style={styles.Water}
            onPress={()=>handlePurchase('Water')}>
                <Image style={{flex:1}} source={require('../../../images/FOOD/Food_Water.png')} resizeMode='contain'/>
                <Text style={styles.letter}>Water</Text>
                <Text style={styles.letter}>¢10</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.Carrot}
            onPress={()=>handlePurchase('Carrot')}>
                <Image style={{flex:1}} source={require('../../../images/FOOD/Food_Carrot.png')} resizeMode='contain'/>
                <Text style={styles.letter}>Carrot</Text>
                <Text style={styles.letter}>¢20</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.Apple}
             onPress={()=>handlePurchase('Apple')}>
                <Image style={{flex:1}} source={require('../../../images/FOOD/Food_Apple.png')} resizeMode='contain'/>
                <Text style={styles.letter}>Apple</Text>
                <Text style={styles.letter}>¢30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Meat}
             onPress={()=>handlePurchase('Meat')}>
                <Image style={{flex:1}} source={require('../../../images/FOOD/Food_Meat.png')} resizeMode='contain'/>
                <Text style={styles.letter}>Meat</Text>
                <Text style={styles.letter}>¢50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.starter}
             onPress={()=>handlePurchase('Starter')}>
                <Gift style={{width: '100%', height:'70%'}}/>
                <View style={{position: 'absolute', top: '40%', width: '100%', height: '40%', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Water.png')} resizeMode='contain'/>
                    <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Carrot.png')} resizeMode='contain'/>
                    <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Apple.png')} resizeMode='contain'/>
                    <Image style={{width: '25%', height: '100%',}} source={require('../../../images/FOOD/Food_Meat.png')} resizeMode='contain'/>
                </View>
                <Text style={styles.sletter}>Starter Package</Text>
                <Text style={styles.sletter}>$2</Text>
            </TouchableOpacity>
            {product == 'Water' && (<View style={styles.overlay}>
                <CustomAlert goods={product} price='¢10'/>
            </View>)}
            {product == 'Carrot' && (<View style={styles.overlay}>
                <CustomAlert goods={product} price='¢20'/>
            </View>)}
            {product == 'Apple' && (<View style={styles.overlay}>
                <CustomAlert goods={product} price='¢30'/>
            </View>)}
            {product == 'Meat' && (<View style={styles.overlay}>
                <CustomAlert goods={product} price='¢50'/>
            </View>)}
            {product == 'Starter' && (<View style={styles.overlay}>
                <CustomAlert goods={product} price='$2'/>
            </View>)}
            {product == 'Purchase' && purchaseAlert
            }            
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
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: "center",
        justifyContent: "center"
    },
    Water:{
        position: "absolute",
        top: '15%',
        left: '12%',
        width: 130,
        height: 150, 
        borderWidth: 3, 
        borderRadius: 10, 
        borderColor: 'black',
        alignItems: 'center'
    },
    Carrot:{
        position: "absolute",
        top: '15%',
        right: '12%',
        width: 130,
        height: 150, 
        borderWidth: 3, 
        borderRadius: 10, 
        borderColor: 'black',
        alignItems: 'center'

    },
    Meat:{
        position: "absolute",
        top: '40%',
        right: '12%',
        width: 130,
        height: 150, 
        borderWidth: 3, 
        borderRadius: 10, 
        borderColor: 'black',
        alignItems: 'center'
    },
    Apple:{
        position: "absolute",
        top: '40%',
        left: '12%',
        width: 130,
        height: 150, 
        borderWidth: 3, 
        borderRadius: 10, 
        borderColor: 'black',
        alignItems: 'center'
    },
    letter:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    sletter:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    starter:{
        position:"absolute",
        width: 130, 
        height: 150, 
        borderWidth: 3, 
        borderRadius: 10, 
        borderColor:"black",
        alignSelf: 'center',
        alignItems: 'center',
        top: '70%',
    }
})