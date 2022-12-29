import React, { type PropsWithChildren } from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';

import { buttonStyles } from './style';



const BlueButtonWithIcon: React.FC<
    PropsWithChildren<{
        title: string;
        icon: any;
        buttonTapped: Function;
        style:{};
    }>
> = ({ children, title,icon,buttonTapped,style }) => {

    return(
        <TouchableOpacity style={[buttonStyles.button,style]}
        onPress={() => {
            buttonTapped()
        }}
        >
            <Image
            source={icon}
            style={buttonStyles.icon}
            />
            <Text style={buttonStyles.title}>{title}</Text>
        </TouchableOpacity>
    )

}

export default BlueButtonWithIcon


