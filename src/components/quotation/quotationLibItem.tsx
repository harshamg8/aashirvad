import React, {FC} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colours from '../../theme/colours';

type Props = {
  onClick: () => void;
};

const QuotationLibData = [
    {
      "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      "title": "First Item",
      "desc": "Description",
      "img": "https://reactnative.dev/img/tiny_logo.png"
    },
    {
      "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      "title": "Second Item",
      "desc": "Description",
      "img": "https://reactnative.dev/img/tiny_logo.png"
    },
    {
      "id": "58694a0f-3da1-471f-bd96-145571e29d72",
      "title": "Third Item",
      "desc": "Description",
      "img": "https://reactnative.dev/img/tiny_logo.png"
    }
  ]

const QuotationLib: FC<Props> = ({...props}) => {
  const renderItem  = ({ item, index }: { item: any; index: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.container}
        onPress={() => {
          props.onClick();
        }}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.desc}</Text>
        </View>
        <Image
          style={styles.logo}
          source={{
            uri: item.img,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={QuotationLibData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default QuotationLib;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    height: 80,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.65,
    flexDirection: 'row',
    elevation: 6,
    paddingVertical: 10,
  },
  logo: {
    width: 90,
    height: 60,
    marginRight: 10,
  },
  title: {
    marginTop: 5,
    color:Colours.Black
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
});