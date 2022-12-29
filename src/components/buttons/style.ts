import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colours from '../../theme/colours';

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor:Colours.BlueButton,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        height:22,
        width:22,
        marginRight:10

    },
    title:{
        color:Colours.White,
        fontSize:16,
        fontWeight:'bold'
    },
    editButton:{
        backgroundColor:Colours.Underline,
        padding:10,
        width:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'flex-end',
        position:'absolute',
        right:10
    },
    editIcon:{
        height:18,
        width:18,
    }
})