import React, { type PropsWithChildren } from 'react';
import { View, Text, KeyboardAvoidingView,TextInput, Dimensions, Image, KeyboardTypeOptions, StyleProp, TouchableOpacity } from 'react-native';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'
import Icons from '../../assets/icons/Icons'
import { PlaceHolders, returnWidth, Titles } from '../../constatnts';

const LaborListItem: React.FC<
    PropsWithChildren<{
        item: any;
        index: number;
        onDeleteTapped: Function;
        onLaborTextChange: Function;
        onQtyChange: Function;
        onRateChange: Function;
        onForDaysChange:Function;
        labor: string;
        qty:any;
        rate:string;
        forDays:string;
        laborsArray:any;
    }>
> = ({ children, item, index, onDeleteTapped, qty,labor,rate,laborsArray,onLaborTextChange,onQtyChange,onRateChange,onForDaysChange }) => {

    return (
        <KeyboardAvoidingView behavior='padding' style={QuotationStyles.areaListItemContainer}>
            <View style={[QuotationStyles.typeContainer, { marginTop: 1,width: returnWidth('View1',Titles.Labor) }]}>
                <TextInput
                    onChangeText={(text) => {
                        onLaborTextChange(text, item, index)
                    }}
                    placeholder={PlaceHolders.Labor}
                    value={laborsArray[index].labor}
                    style={{color:Colours.Black}}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View2',Titles.Labor) }]}>
                <TextInput
                    placeholder='Qty'
                    onChangeText={(text) => {
                        onQtyChange(text, item, index)
                    }}
                    value={laborsArray[index].qty}
                    style={{width:'90%',color:Colours.Black}}
                    keyboardType={'decimal-pad'}
                    returnKeyType='done'
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View3',Titles.Labor)}]}>
                <TextInput
                    placeholder='Rate'
                    onChangeText={(text) => {
                        onRateChange(text, item, index)
                    }}
                    value={laborsArray[index].rate}
                    style={{width:'90%',color:Colours.Black}}
                    keyboardType={'decimal-pad'}
                    returnKeyType='done'
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View4',Titles.Labor) }]}>
                <TextInput
                    placeholder='For Days'
                    onChangeText={(text) => {
                        onForDaysChange(text, item, index)
                    }}
                    value={laborsArray[index].forDays}
                    style={{width:'90%',color:Colours.Black}}
                    keyboardType={'decimal-pad'}
                    returnKeyType='done'
                />
            </View>

            <TouchableOpacity style={[QuotationStyles.typeContainer, { alignItems: 'center', width: (Dimensions.get('screen').width - 2) * 0.08 }]}
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

export default LaborListItem


