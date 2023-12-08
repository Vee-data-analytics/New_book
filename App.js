import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChapterList from './ChapterList';
import Chapter from './Chapter';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ChapterList"
          component={ChapterList} 
        />
        <Stack.Screen 
          name="Chapter"
          component={Chapter} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}