import React, { type PropsWithChildren } from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { QuotationStyles } from '../../containers/quotationStyle';

const PreviewFromToDetailsText: React.FC<
    PropsWithChildren<{
        title: string;
        style:{};
    }>
> = ({ children, title,style }) => {

    return(
        <Text style={[QuotationStyles.fromToDetails,style]}>
            {title}
        </Text>
    )

}

export default PreviewFromToDetailsText


