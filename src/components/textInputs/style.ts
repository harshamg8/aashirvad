import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colours from '../../theme/colours';

export const textInputStyles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,
        // marginBottom:10,
        marginTop:5
    },
    lable: {
        fontSize:14,
        marginBottom:5,
        color:Colours.Black
    },
    textInput:{
        fontSize:16,
        fontWeight:'bold',
        color:Colours.Black,
        marginBottom:5
        // height:35

    },
    underline:{
        backgroundColor:Colours.Underline,
        height:1,
    }
})