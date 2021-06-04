import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TextInput, Button, SafeAreaView, Platform, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodData } from '../Redux'
import Hero from '../components/Hero'
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
    const foodData = useSelector(state => state.foodData.foods)
    const dispatch = useDispatch()
    const [number, setChangeNumber] = useState('rice');
    console.log(foodData)
    useEffect(() => {
        dispatch(fetchFoodData(number))
    }, [number])

    const onPressLearnMore = (e) => {
        dispatch(fetchFoodData(number))
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DishDetails', item)}>
            <View style={styles.cardContainer}>
                <Image style={styles.logo} source={item.strMealThumb} />
                <View style={styles.cardContentBox}>
                    <View style={styles.cardContent}>
                        <Text style={styles.textTitle}>{item.strMeal}</Text>
                        <Text>{item.strCategory}</Text>
                    </View>
                   
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Hero></Hero>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search Food"
                    onChangeText={text => setChangeNumber(text)}
                />
                <Button
                    onPress={() => onPressLearnMore()}
                    title="Search"
                    color="#841584"
                />
            </View>
            <FlatList
                data={foodData}
                renderItem={renderItem}
                keyExtractor={item => item.idMeal}
            />
            <View >
                <Footer></Footer>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 40,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    container: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        // marginTop: 50,
        backgroundColor: 'pink',

    },
    cardContainer: {
        height: 300,
        width: 400,
        margin: 50,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardContentBox: {
        color: '#000',
        paddingTop: 15,
        paddingBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    logo: {
        width: '100%',
        height: 230,
        borderRadius: 15,
    },
    input: {
        width: '80%',
        backgroundColor: "#e8e9e9",
        lineHeight: 20,
        padding: 10,
        marginTop: 50,
        color: "#000000",
        fontSize: 15,
        borderRadius: 5,
        letterSpacing: 0.7
    }

});
export default HomeScreen;



