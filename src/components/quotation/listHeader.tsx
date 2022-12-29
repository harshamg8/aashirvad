import React, { type PropsWithChildren } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { returnWidth, Titles, widthToReturn } from '../../constatnts';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'



const ListHeader: React.FC<
    PropsWithChildren<{
        title1: string;
        title2: string;
        title3: string;
        title4: string;
        kind: string;
    }>
> = ({ children, title1, title2, title3, title4, kind }) => {

    return (
        <View style={[QuotationStyles.areaListItemContainer, { marginBottom: 5 }]}>
            <View style={[QuotationStyles.areaHeader, { width: returnWidth('View1',kind) }]}>
                <Text style={QuotationStyles.headerLable}>{title1.toUpperCase()}</Text>
            </View>
            <View style={[QuotationStyles.areaHeader, { width: returnWidth('View2',kind) }]}>
                <Text style={QuotationStyles.headerLable}>{title2.toUpperCase()}</Text>
            </View>
            {kind != Titles.Activities &&
                <View style={[QuotationStyles.areaHeader, { width: returnWidth('View3',kind) }]}>
                    <Text style={QuotationStyles.headerLable}>{title3.toUpperCase()}</Text>
                </View>
            }
            {(kind != Titles.Activities && kind != Titles.Material) &&
            <View style={[QuotationStyles.areaHeader, { width: returnWidth('View4',kind) }]}>
                <Text style={QuotationStyles.headerLable}>{title4.toUpperCase()}</Text>
            </View>}
            <View style={[{ width: (Dimensions.get('screen').width - 5) * 0.1, height: '100%', backgroundColor: Colours.White }]}>
                <Text></Text>
            </View>
        </View>
    )

}

export default ListHeader
