import React, {FC} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Colours from '../../theme/colours';

type Props = {
  onClick: () => void;
  image: any;
  title: string;
  marginRight?: number;
};

const GridComponent: FC<Props> = ({...props}) => {
  return (
    <TouchableOpacity
      style={[styles.gridContainer, {marginRight: props.marginRight}]}
      onPress={() => {
        props.onClick();
      }}>
      <Image style={styles.logo} source={props.image} />
      <Text style={styles.gridTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default GridComponent;

const styles = StyleSheet.create({
  gridContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
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
    elevation: 6,
  },
  logo: {
    width: 20,
    height: 20,
    // resizeMode: '',
  },
  gridTitle: {
    marginTop: 10,
    color:Colours.Black
  },
});