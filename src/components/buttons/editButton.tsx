import React, { type PropsWithChildren } from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Icons from '../../assets/icons/Icons'
import { buttonStyles } from './style';



const EditButton: React.FC<
    PropsWithChildren<{
        buttonTapped: Function;
        style:{};
    }>
> = ({ children, buttonTapped,style }) => {

    return(
        <TouchableOpacity style={[buttonStyles.editButton,style]}
        onPress={() => {
            buttonTapped()
        }}
        >
            <Image
            source={Icons.EDIT}
            style={[buttonStyles.editIcon]}
            />
            
        </TouchableOpacity>
    )

}

export default EditButton


