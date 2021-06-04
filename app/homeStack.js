import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DishDetails from './screens/DishDetails'


const screens = {
    Home: {
        screen: HomeScreen,
        // navigationOption:{
        //     title:'Food'
        // }
    },
    DishDetails: {
        screen: DishDetails,
        // navigationOption:{
        //     title:'Dish Details'
        // }
    }
}


const HomeStack = createStackNavigator(screens);



export default createAppContainer(HomeStack)