import React, { useState } from 'react';

import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet,
  Button  
} from 'react-native';

function Chapter({route, navigation}) {

  const [fontSize, setFontSize] = useState(18);

  const fontSizeSetter = (size) => {
    setFontSize(size);
  }  

  const { chapter } = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.chapterContainer}>
        
        <Text style={[styles.chapterTitle, {fontSize}]}>
          {chapter.title} 
        </Text>

        <Text style={[styles.chapterContent, {fontSize}]}>
           {chapter.content}
        </Text>

      </View>

      <Button 
        title="Options"
        onPress={() => 
          navigation.navigate('Options', {
            fontSize,
            fontSizeSetter 
          })
        }
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#333'
  },

  chapterContainer: {
    padding: 40,
    margin: 2,
    borderRadius: 8
  },

  chapterTitle: {
    color: 'white',
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10
  },

  chapterContent: {
    color: 'white',
    fontSize: 16
  }

});

export default Chapter;