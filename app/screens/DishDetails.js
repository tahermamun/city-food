import React from 'react';
import { Text, View, Platform, StyleSheet, Image } from 'react-native';

const DishDetails = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.DishDetailsContainer}>
            <Image style={styles.bannerPicture} source={{uri: navigation.getParam("strMealThumb")}} />
            <Text style={styles.dishTitle}>{navigation.getParam("strMeal")}</Text>
            <Text style={styles.subDishTitle}>{navigation.getParam("strCategory")} || {navigation.getParam("strArea")}</Text>
            <Text style={styles.subDishDetails}>{navigation.getParam("strInstructions")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    DishDetailsContainer: {
        margin: 50
    },
    bannerPicture: {
        width: '100%',
        height: 230,
    },
    dishTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subDishTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subDishDetails: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default DishDetails;

