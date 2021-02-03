import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Counter from './src/Counter';
import DateFormat from './src/DateFormat';
import DatePicker from './src/DatePicker';
import RNResponsiveSrc from './src/RNResponsiveSrc';
import ScreenOne from './src/ScreenOne';
import ScreenTwo from './src/ScreenTwo';
import Simple from './src/simple';
import SubmitformPost from './src/SubmitformPost';
import TodoApp from './src/TodoApp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (

    // using props 
    // <View>
    //   <Text>In App Component</Text>
    //   <ScreenTwo name="kpitlawar7715" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




// const App = () => {
//   return (
//     <View>
//       {/* <Simple/> */}
//       {/* <SubmitformPost/> */}
//       {/* <DatePicker/> */}
//       {/* <DateFormat/> */}
//       {/* <RNResponsiveSrc/> */}
//       {/* <Counter /> */}
//       {/* <TodoApp /> */}
//       {/* <ScreenOne /> */}
//       {/* <ScreenTwo /> */}
//     </View>
//   )
// }

// export default App;





