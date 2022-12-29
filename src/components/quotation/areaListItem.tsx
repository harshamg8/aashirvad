import React, { type PropsWithChildren } from 'react';
import { View, Text,TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'
import Icons from '../../assets/icons/Icons'
import { returnWidth } from '../../constatnts';

const AreaListItem: React.FC<
    PropsWithChildren<{
        item: any;
        index: number;
        onDeleteTapped: Function;
        onTypeTextChange: Function;
        onQtyTextChange: Function;
        onRateTextChange: Function;
        type: string;
        qty: string;
        rate: string;
        areaArray:any;
        onEditingEnded: Function;
        onTouchStart: Function;
    }>
> = ({ children, item, index, onDeleteTapped,onEditingEnded,onTouchStart,onTypeTextChange, onQtyTextChange, onRateTextChange, type, qty, rate,areaArray }) => {

    return (
        <View style={QuotationStyles.areaListItemContainer}>
            <View style={[QuotationStyles.typeContainer, {  }]}>
                <TextInput
                    placeholder='Enter room'
                    style={{color:Colours.Black}}
                    onChangeText={(text) => {
                        onTypeTextChange(text, item, index)
                    }}
                    value={areaArray[index].type}
                    onSubmitEditing={() => {onEditingEnded()}}
                    onTouchStart={() => {
                        onTouchStart()
                    }}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, { paddingLeft:2,alignItems:'center',width: returnWidth('View2','Basic') }]}>
                <TextInput
                    placeholder='Qty'
                    style={{color:Colours.Black}}
                    onChangeText={(text) => {
                        onQtyTextChange(text, item, index)
                    }}
                    value={areaArray[index].qty}
                    keyboardType='decimal-pad'
                    onSubmitEditing={() => {onEditingEnded()}}
                    onTouchStart={() => {
                        onTouchStart()
                    }}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View3','Basic') }]}>
                <TextInput
                    placeholder='Rate'
                    style={{color:Colours.Black}}
                    onChangeText={(text) => {
                        onRateTextChange(text, item, index)
                    }}
                    value={areaArray[index].rate}
                    keyboardType='decimal-pad'
                    onSubmitEditing={() => {onEditingEnded()}}
                    onTouchStart={() => {
                        onTouchStart()
                    }}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: (Dimensions.get('screen').width - 5) * 0.2 }]}>
                <Text style={{color:Colours.Black}}>{Number(areaArray[index].rate) * Number(areaArray[index].qty)}</Text>
            </View>

            <TouchableOpacity style={[QuotationStyles.typeContainer, { alignItems: 'center', width: (Dimensions.get('screen').width - 5) * 0.1 }]}
                onPress={() => {
                    onDeleteTapped(item, index)
                }}>
                <Image
                    source={Icons.CLOSE}
                    resizeMode='contain'
                    style={{ width: 16, height: 16, alignSelf: 'center' }}
                />
            </TouchableOpacity>

        </View>
    )

}

export default AreaListItem


