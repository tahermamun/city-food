import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Dimensions, SafeAreaView, ScrollView,Image } from 'react-native';

const images = [
    'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_960_720.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const Hero = () => {
    const [imgActive,setImgActive] = useState(0)

    onchange = (nativeEvent) => {
    if(nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width); 
        if(slide != imgActive) {
            setImgActive(slide)
        } 
    }
 
}
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
            <ScrollView onScroll={({nativeEvent})=>onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
                {
                    images.map((e, index)=>
                    <Image  
                    key={e}
                    resizeMode='stretch'
                    style={styles.wrap}
                    source={{uri: e}}
                    />
                    )
                }
            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e,index)=>
                    <Text key={e}
                    style={imgActive == index ? styles.dotActive : styles.dot}                    
                    >
                        ●
                    </Text>
                    )
                }
            </View>
          </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    wrapDot: {
        position:'absolute',
        bottom: 0,
        flexDirection:'row',
        alignSelf:'center',
    },
    dotActive: {
        margin: 3,
        color:'black',
    },
    dot: {
        margin: 3,
        color: 'white'
    }
}) 

export default Hero;