import React, { type PropsWithChildren } from 'react';
import { View, Text, KeyboardAvoidingView,TextInput, Dimensions, Image, KeyboardTypeOptions, StyleProp, TouchableOpacity, Platform } from 'react-native';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'
import Icons from '../../assets/icons/Icons'
import { returnWidth, Titles } from '../../constatnts';

const ActivityListItem: React.FC<
    PropsWithChildren<{
        item: any;
        index: number;
        onDeleteTapped: Function;
        onActivityTextChange: Function;
        onCostChange: Function;
        activity: string;
        cost:any;
        activityArray:any;
    }>
> = ({ children, item, index, onDeleteTapped, cost,activity,activityArray,onActivityTextChange,onCostChange }) => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'padding'} style={QuotationStyles.areaListItemContainer}>
            <View style={[QuotationStyles.typeContainer, { marginTop: 1,width: returnWidth('View1',Titles.Activities) }]}>
                <TextInput
                    onChangeText={(text) => {
                        onActivityTextChange(text, item, index)
                    }}
                    value={activityArray[index].activity}
                    editable={false}
                    style={{color:Colours.Black}}
                />
            </View>

            <View style={[QuotationStyles.typeContainer, {alignItems:'center', width: returnWidth('View2',Titles.Activities) }]}>
                <TextInput
                    placeholder='Cost'
                    onChangeText={(text) => {
                        onCostChange(text, item, index)
                    }}
                    value={activityArray[index].cost}
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

export default ActivityListItem


