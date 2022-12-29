import React, { type PropsWithChildren } from 'react';
import {View,Text,TextInput, KeyboardTypeOptions} from 'react-native';
import { textInputStyles } from './style';

const TextInputWithLable: React.FC<
    PropsWithChildren<{
        lable: string;
        placeHolder:string;
        inputName:string;
        keyBoardType:KeyboardTypeOptions;
        onTextChanged: Function;
    }>
> = ({ children, lable,placeHolder,inputName,keyBoardType,onTextChanged }) => {

    return(
        <View style={textInputStyles.container}>
            <Text style={[textInputStyles.lable]}>{lable}</Text>
            <TextInput
            style={textInputStyles.textInput}
            placeholder={placeHolder}
            onChangeText={(text) => {
                onTextChanged(text,inputName)
            }}
            keyboardType={keyBoardType}
            />
            <View style={textInputStyles.underline}/>

        </View>
    )

}

export default TextInputWithLable


