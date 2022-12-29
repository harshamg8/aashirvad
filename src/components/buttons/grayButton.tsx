import React, { type PropsWithChildren } from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import Colours from '../../theme/colours'
import { buttonStyles } from './style';



const GrayButton: React.FC<
    PropsWithChildren<{
        title: string;
        buttonTapped: Function;
        style:{},
        titleStyle:{}
    }>
> = ({ children, title,buttonTapped,style,titleStyle }) => {

    return(
        <TouchableOpacity style={[buttonStyles.button,{backgroundColor:Colours.GrayButton},style,]}
        onPress={() => {
            buttonTapped()
        }}
        >
            <Text style={[buttonStyles.title,{color:Colours.Black},titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )

}

export default GrayButton
