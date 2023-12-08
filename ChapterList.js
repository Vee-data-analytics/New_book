import { useState, useEffect } from 'react'; 
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import book from './book.json';

export default function ChapterList() {

  const [chapters, setChapters] = useState([]);  
  const navigation = useNavigation();

  useEffect(() => {
    setChapters(book);
  }, []);

  function handleChapterPress(chapter) {
    navigation.navigate('Chapter', {chapter}); 
  }
  
  return (
    <FlatList
      data={chapters}
      renderItem={({item}) => (  
        <TouchableOpacity onPress={() => handleChapterPress(item)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}