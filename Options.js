
// Options.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Options({ route }) {

  const [fontSize, setFontSize] = useState(16);  

  return (
    <View style={styles.container}>
     <Text style={styles.header}>Font Size</Text>

     <View style={styles.sliderContainer}>
       <Text style={{fontSize}}>Preview Text</Text>

       <Slider
         style={styles.slider}
         value={fontSize}
         onValueChange={setFontSize}
         minimumValue={12}
         maximumValue={50}
       />
     </View>

     <Button 
       title="Save"
       onPress={() => {
        const {fontSizeSetter} = route.params;
      
        fontSizeSetter(fontSize);
      }}
     />

   </View>
  );
}

const styles = StyleSheet.create({

  

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20
  },

  sliderContainer: {
    width: '100%',
    alignItems: 'stretch',
    paddingHorizontal: 50
  },

  slider: {
    width: '100%',
    height: 40
  },
  
});