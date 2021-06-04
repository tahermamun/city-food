import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DishDetails from '../screens/DishDetails'


const  NavBar = {
    CityyFood: {
        screen: HomeScreen,
    },
    DishDetails: {
        screen: DishDetails,
    }
}

const Stack = createStackNavigator(NavBar);
export default createAppContainer(Stack)
