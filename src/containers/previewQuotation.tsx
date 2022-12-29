import React from 'react';
import { View, Text, SafeAreaView, Alert, Dimensions, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Colours from '../theme/colours';
import { QuotationStyles } from './quotationStyle';
import QuotationPreviewFromToView from '../components/quotation/quotationPreviewFromToView';
import DiscountTotalAndTahnkYouView from '../components/quotation/discountTotalAndThankYouView';

interface PreviewQuotationContainerpProps {
    customerName: string,
    phoneNumber: string,
    areaArray: [],
    discountPercentage: string,
    totalQuoteValue: string;
    customerAddress: string;
    customerPhone: string;
    vendorName: string;
    vendorAddress: string;
    vendorPhone: string;
    vendorCityAndZip: string;
    style: {};
    titleStyle: {};
};

const PreviewQuotationContainer = () => {

    const route = useRoute()

    const navRoute = route.params as PreviewQuotationContainerpProps


    const viewPastQuotationTapped = () => {
        Alert.alert('', JSON.stringify(navRoute.areaArray))
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>


            <QuotationPreviewFromToView
                customerName={navRoute.customerName}
                customerAddress={navRoute.customerAddress}
                customerPhone={navRoute.phoneNumber}
                vendorName={navRoute.vendorName}
                vendorAddress={navRoute.vendorAddress}
                vendorPhone={navRoute.vendorPhone}
                vendorCityAndZip={navRoute.vendorCityAndZip}
                style={{}}
                titleStyle={{}}
                quotationNumber={'0001'}
                date={`${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`} />
            <View>

                <View style={QuotationStyles.previewListHeader}>
                    <View style={[QuotationStyles.typeContainer, { borderTopLeftRadius: 10, backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 25) * 0.4 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>AREA</Text>
                    </View>
                    <View style={[QuotationStyles.typeContainer, { backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 25) * 0.15 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>QTY</Text>
                    </View>
                    <View style={[QuotationStyles.typeContainer, { backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 20) * 0.2 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>RATE</Text>
                    </View>
                    <View style={[QuotationStyles.typeContainer, { borderTopRightRadius: 10, backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 20) * 0.24 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>COST</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{
                    borderColor: Colours.DarkGray, marginLeft: 10, marginRight: 10,
                    maxHeight: (Dimensions.get('screen').height - 100) * 0.5,
                    height: Dimensions.get('screen').height * 0.64
                    // height: (Dimensions.get('screen').height - 130) * 0.75,
                    //     maxHeight: (Dimensions.get('screen').height - 130) * 0.75,
                }}>
                    {navRoute.areaArray.map((item, index) => {
                        return (
                            <View style={{ paddingRight: 1, paddingLeft: 1, flexDirection: 'row', backgroundColor: Colours.DarkGray }}>
                                <View style={[QuotationStyles.typeContainer, { width: (Dimensions.get('screen').width - 25) * 0.4 }]}>
                                    <Text style={{color:Colours.Black}}>{item['type']}</Text>
                                </View>
                                <View style={[QuotationStyles.typeContainer, { width: (Dimensions.get('screen').width - 25) * 0.15 }]}>
                                    <Text style={{color:Colours.Black}}>{item['qty']}</Text>
                                </View>
                                <View style={[QuotationStyles.typeContainer, { width: (Dimensions.get('screen').width - 25) * 0.2 }]}>
                                    <Text style={{color:Colours.Black}}>₹ {item['rate']}</Text>
                                </View>
                                <View style={[QuotationStyles.typeContainer, { width: (Dimensions.get('screen').width - 20) * 0.25 }]}>
                                    <Text style={{color:Colours.Black}}>₹ {item['cost']}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

                <DiscountTotalAndTahnkYouView
                    discountPercentage={navRoute.discountPercentage}
                    total={navRoute.totalQuoteValue} />

                
            </View>

        </SafeAreaView>

    )
}

export default PreviewQuotationContainer;
