import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen010093Navigator from '../features/BlankScreen010093/navigator';
import BlankScreen110092Navigator from '../features/BlankScreen110092/navigator';
import BlankScreen010085Navigator from '../features/BlankScreen010085/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen010093: { screen: BlankScreen010093Navigator },
BlankScreen110092: { screen: BlankScreen110092Navigator },
BlankScreen010085: { screen: BlankScreen010085Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
