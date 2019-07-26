import {Navigation} from 'react-native-navigation'
import Init from './containers/init'
import Tab1 from './containers/bottomNavigation/Tab1'
import Tab2 from './containers/bottomNavigation/Tab2'
import Tab3 from './containers/bottomNavigation/Tab3'
import Tab4 from './containers/bottomNavigation/Tab4'
import TestDrawer from './containers/bottomNavigation/TestDrawer'

export function registerScreens(Provider , store){
    Navigation.registerComponentWithRedux("Init" , ()=> Init , Provider , store)
    Navigation.registerComponentWithRedux("Tab1" , ()=> Tab1 , Provider , store)
    Navigation.registerComponentWithRedux("Tab2" , ()=> Tab2 , Provider , store)
    Navigation.registerComponentWithRedux("Tab3" , ()=> Tab3 , Provider , store)
    Navigation.registerComponentWithRedux("Tab4" , ()=> Tab4 , Provider , store)
    Navigation.registerComponentWithRedux("TestDrawer" , ()=> TestDrawer , Provider , store)
}