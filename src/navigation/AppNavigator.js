import Login from "../views/Login";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DemoScreen from "../views/DemoScreen";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    DemoScreen: { screen: DemoScreen }
  },
  {
    headerMode: "none",
    title: "Main",
    initialRouteName: "Login",
    cardStack: {
      gesturesEnabled: false
    },
    //--------this is used to remove animation for react-navigation
    transitionConfig : () => ({ 
      transitionSpec: {
        duration: 0,
        },
    }),
    //---------------------------------------------------------------
  },
  
);

const App = createAppContainer(AppNavigator);

export default App;
