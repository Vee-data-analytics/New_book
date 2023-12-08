import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function Chapter({route}) {

  const chapter = route.params.chapter;  

  return (
    <ScrollView>
      <Text>{chapter.title}</Text>
      <Text>{chapter.content}</Text> 
    </ScrollView>
  );
}