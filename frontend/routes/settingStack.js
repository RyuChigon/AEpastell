import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Setting from '../screens/settingScreen';
import Profile from '../screens/profileScreen';

const screens = {
    Setting: {
         screen: Setting
    },
    Profile: {
        screen: Profile 
    }
}
const settingStack = createStackNavigator(screens); 