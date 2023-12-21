// ChapterList.js

import React, { useState, useEffect } from 'react';  
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import chaptersData from './books.json';

function ChapterList({ navigation, fontSize }) {

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    setChapters(chaptersData.map(chapter => chapter.fields));
  }, []);

  return (
    <FlatList
      data={chapters}
      renderItem={({ item }) => (
        <TouchableOpacity  
          onPress={() => {
            navigation.navigate('Chapter', {
              chapter: item,
              fontSize: fontSize
            });
          }}
        >
          <View style={styles.chapterItem}>
            <Text style={styles.chapterTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  chapterItem: {
    backgroundColor: '#333', 
    padding: 10,
    marginVertical: 0.7,
    borderRadius: 4
  },
  chapterTitle: {
    color: 'white',
    fontSize: 18 
  }
});

export default ChapterList;