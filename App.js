// App.js

import React, { useState } from 'react';
import { NavigationContainer,Button } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChapterList from './ChapterList';
import Chapter from './Chapter';
import Options from './Options';

const Stack = createStackNavigator();

const globalTheme = {
  // theme
};

export default function App() {
  const [fontSize, setFontSize] = useState(globalTheme.fontSize);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Incwadi Yenqubo"
          component={ChapterList}
          initialParams={{ fontSize }}
        />
        <Stack.Screen
          name="Inkonzo"
          component={Chapter}
          initialParams={{ fontSize }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={({ navigation, route }) => ({
            // No headerRight button in this screen
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
