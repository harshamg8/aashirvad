import React, { type PropsWithChildren } from 'react';
import {Text,TouchableOpacity,StyleSheet,View} from 'react-native';
import { Titles } from '../../constatnts';
import { QuotationStyles } from '../../containers/quotationStyle';


const DiscountTotalAndTahnkYouView: React.FC<
    PropsWithChildren<{
        discountPercentage: string;
        total: string;
        style:{}
    }>
> = ({ children, discountPercentage,total,style }) => {

    return(
        <View style={[QuotationStyles.discountAndTotalAndThankYouViewContainer,style]}>
                    <View style={QuotationStyles.discountAndTotalViewContainer}>
                        <View style={QuotationStyles.discountAndTotalView}>
                            <Text style={QuotationStyles.previewListHeaderLable}>{Titles.Discount.toUpperCase()}  </Text>
                            <Text style={QuotationStyles.discountAndTotalText}>{discountPercentage}%</Text>
                        </View>

                        <View style={QuotationStyles.discountAndTotalView}>
                            <Text style={QuotationStyles.previewListHeaderLable}>{Titles.Total.toUpperCase()} </Text>
                            <Text style={QuotationStyles.discountAndTotalText}> ₹ {total}</Text>
                        </View>

                    </View>
                    <View style={QuotationStyles.thankYouView}>
                        <Text style={QuotationStyles.previewQuotationNumberAndDate}>{Titles.ThankYou}</Text>
                    </View>
                </View>
    )

}

export default DiscountTotalAndTahnkYouView
