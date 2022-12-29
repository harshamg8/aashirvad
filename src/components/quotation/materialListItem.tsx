import React, { type PropsWithChildren } from 'react';
import { View, Text, KeyboardAvoidingView,TextInput, Dimensions, Image, KeyboardTypeOptions, StyleProp, TouchableOpacity } from 'react-native';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'
import Icons from '../../assets/icons/Icons'
import { returnWidth, Titles } from '../../constatnts';

const MaterialListItem: React.FC<
    PropsWithChildren<{
        item: any;
        index: number;
        onDeleteTapped: Function;
        onMaterialTextChange: Function;
        onQtyChange: Function;
        onRateChange: Function;
        material: string;
        qty:any;
        rate:string;
        materialsArray:any;
    }>
> = ({ children, item, index, onDeleteTapped, qty,material,rate,materialsArray,onMaterialTextChange,onQtyChange,onRateChange }) => {

    return (
        <KeyboardAvoidingView behavior='padding' style={QuotationStyles.areaListItemContainer}>
            <View style={[QuotationStyles.typeContainer, { marginTop: 1,width: returnWidth('View1',Titles.Material)}]}>
                <TextInput
                    onChangeText={(text) => {
                        onMaterialTextChange(text, item, index)
                    }}
                    value={materialsArray[index].material}
                    editable={false}
                    style={{color:Colours.Black}}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View2',Titles.Material) }]}>
                <TextInput
                    placeholder='Qty'
                    onChangeText={(text) => {
                        onQtyChange(text, item, index)
                    }}
                    value={materialsArray[index].qty}
                    style={{width:'90%',color:Colours.Black}}
                    keyboardType={'decimal-pad'}
                    returnKeyType='done'
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View3',Titles.Material) }]}>
                <TextInput
                    placeholder='Rate'
                    onChangeText={(text) => {
                        onRateChange(text, item, index)
                    }}
                    value={materialsArray[index].rate}
                    style={{width:'90%',color:Colours.Black}}
                    keyboardType={'decimal-pad'}
                    returnKeyType='done'
                />
            </View>

            <TouchableOpacity style={[QuotationStyles.typeContainer, { alignItems: 'center', width: (Dimensions.get('screen').width - 2) * 0.1 }]}
                onPress={() => {
                    onDeleteTapped(item, index)
                }}>
                <Image
                    source={Icons.CLOSE}
                    resizeMode='contain'
                    style={{ width: 16, height: 16, alignSelf: 'center' }}
                />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )

}

export default MaterialListItem


