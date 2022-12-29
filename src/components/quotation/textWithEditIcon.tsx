import React, { type PropsWithChildren } from 'react';
import { Text, View,Image  } from 'react-native';
import Colours from '../../theme/colours'
import EditButton from '../buttons/editButton';


const TextWithEditIcon: React.FC<
    PropsWithChildren<{
        title: string;
        secondTitle:string;
        editButtonTapped: Function;
        iconName:any;
        style: {},
        titleStyle: {}
    }>
> = ({ children, title, editButtonTapped,secondTitle,style,iconName, titleStyle }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: Colours.DarkGray,height:60 }}>
            {iconName &&
            <Image
            source={iconName}
            style={{width:20,height:20,marginRight:10}}
            />}
            <Text style={{ fontSize: 16,color:Colours.Black, fontWeight: 'bold' }}>{title}</Text>
            {children && children}
            <Text style={{fontStyle: 'italic',color:Colours.Black,fontSize:12,marginLeft:5,marginRight:5}}>{secondTitle}</Text>
            <EditButton
                buttonTapped={editButtonTapped}
                style={{}} />
        </View>
    )

}

export default TextWithEditIcon
