import React, { type PropsWithChildren } from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Colours from '../../theme/colours'
import { buttonStyles } from './style';



const GrayButtonWithIcon: React.FC<
    PropsWithChildren<{
        title: string;
        icon: any;
        buttonTapped: Function;
        style:{};
        iconStyle:{};
        lableStyle:{};
    }>
> = ({ children, title,icon,buttonTapped,style,iconStyle,lableStyle }) => {

    return(
        <TouchableOpacity style={[buttonStyles.button,style,{backgroundColor:Colours.GrayButton}]}
        onPress={() => {
            buttonTapped()
        }}
        >
            <Image
            source={icon}
            style={[buttonStyles.icon,iconStyle]}
            />
            <Text style={[buttonStyles.title,{color:Colours.Black},lableStyle]}>{title}</Text>
        </TouchableOpacity>
    )

}

export default GrayButtonWithIcon


