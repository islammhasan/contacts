import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {ContactRow, Container} from '../../components';
import {styles} from './styles';

export const Favorites = () => {
  const favorites = useSelector(state => state.main.favorites);
  console.log(favorites.length);
  const renderItem = ({item}) => {
    return (
      <ContactRow
        name={item?.displayName}
        img={item?.hasThumbnail && item?.thumbnailPath}
        phone={item?.phoneNumbers[0]?.number}
        isFav
      />
    );
  };
  const listSeparator = () => {
    return <View style={styles.listSeparator} />;
  };
  return (
    <Container>
      {favorites.length > 0 && (
        <FlatList
          data={favorites}
          contentContainerStyle={styles.listStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.recordID}
          renderItem={renderItem}
          ItemSeparatorComponent={listSeparator}
        />
      )}
    </Container>
  );
};
