import React from 'react';
import { View, Text, SafeAreaView, Dimensions, SectionList } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Colours from '../theme/colours';
import { QuotationStyles } from './quotationStyle';
import QuotationPreviewFromToView from '../components/quotation/quotationPreviewFromToView';
import DiscountTotalAndTahnkYouView from '../components/quotation/discountTotalAndThankYouView';

interface PreviewQuotationCAdvancedontainerpProps {
    previewArray: [];
    discountPercentage: string;
    totalQuoteValue: string;
    customerName: string;
    customerAddress: string;
    customerPhone: string;
    vendorName: string;
    vendorAddress: string;
    vendorPhone: string;
    vendorCityAndZip: string;
    fromDate: string;
    toDate: string;

};

const PreviewQuotationAdvancedContainer = () => {

    const route = useRoute()

    const navRoute = route.params as PreviewQuotationCAdvancedontainerpProps

    const returnItemsActivities = (item: any) => {
        return item.map((data: any) => {
            return (
                <View>
                    {renderAllRows(data['activity'], data['cost'])}
                </View>
            )
        })
    }

    const returnItemsLabors = (item: any) => {
        return item.map((data: any) => {
            return (
                <View>
                    {renderAllRows(data['labor'], Number(data['qty']) * Number(data['rate']) * Number(data['forDays']))}
                </View>
            )
        })
    }

    const returnItemsMaterials = (item: any) => {
        return item.map((data: any) => {
            return (
                <View>
                    {renderAllRows(data['material'], Number(data['qty']) * Number(data['rate']))}
                </View>

            )
        })
    }

    const renderAllRows = (title: string, item: any) => {
        return (
            <View style={{ paddingRight: 1, paddingLeft: 1, marginLeft: 10, marginRight: 10, flexDirection: 'row', backgroundColor: Colours.DarkGray }}>
                <View style={[QuotationStyles.typeContainer, { height: 40, width: (Dimensions.get('screen').width - 23) * 0.7 }]}>
                    <Text style={{ color: Colours.Black }}>{title}</Text>
                </View>
                <View style={[QuotationStyles.typeContainer, { height: 40, width: (Dimensions.get('screen').width - 23) * 0.3 }]}>
                    <Text style={{ color: Colours.Black }}>{item}</Text>
                </View>
            </View>
        )
    }

    const renderHeader = (title: string, item: []) => {
        return (
            <View style={{ marginBottom: 5 }}>
                <View style={QuotationStyles.previewListHeader}>
                    <View style={[QuotationStyles.typeContainer, { borderTopLeftRadius: 10, backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 23) * 0.7 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>{title}</Text>
                    </View>
                    <View style={[QuotationStyles.typeContainer, { borderTopRightRadius: 10, backgroundColor: Colours.LowOpacityBlue, width: (Dimensions.get('screen').width - 23) * 0.3 }]}>
                        <Text style={QuotationStyles.previewListHeaderLable}>Amount</Text>
                    </View>
                </View>
                {
                    title == 'Activity' ?
                        returnItemsActivities(item)
                        :
                        title == 'Labor' ?
                            returnItemsLabors(item)
                            :
                            returnItemsMaterials(item)
                }
            </View>
        )
    }


    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        if (index == 0) {
            if (typeof (item) == 'undefined') {
                return null
            }
            if (item.length < 1) {
                return null
            }
            return (
                <View>
                    {renderHeader('Activity', item)}
                </View>
            )

        }

        if (index == 1) {
            if (typeof (item) == 'undefined') {
                return null
            }
            if (item.length < 1) {
                return null
            }
            return (
                <View>
                    {renderHeader('Labor', item)}
                </View>
            )

        }
        if (index == 2) {
            if (typeof (item) == 'undefined') {
                return null
            }
            if (item.length < 1) {
                return null
            }
            return (
                <View>
                    {renderHeader('Material', item)}
                </View>
            )

        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start' }}>

            <QuotationPreviewFromToView
                customerName={navRoute.customerName}
                customerAddress={'AddressHere'}
                customerPhone={navRoute.customerPhone}
                vendorName={navRoute.vendorName}
                vendorAddress={navRoute.vendorAddress}
                vendorPhone={navRoute.vendorPhone}
                vendorCityAndZip={navRoute.vendorCityAndZip}
                quotationNumber={'0001'}
                date={`${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`}
                style={{}}
                titleStyle={{}} />
            <View>

                <Text style={{ fontWeight: 'bold', color: Colours.Black, fontSize: 11, marginLeft: 10, marginBottom: 10 }}>Start Date {navRoute.fromDate} - End Date {navRoute.toDate}</Text>

                <SectionList
                    sections={navRoute.previewArray}
                    style={{
                        height: (Dimensions.get('screen').height - 40) * 0.7,
                        maxHeight: (Dimensions.get('screen').height - 200) * 0.6,
                    }}
                    renderItem={_renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colours.Black, margin: 10 }}>{title}</Text>
                    )}

                />

                <DiscountTotalAndTahnkYouView
                    discountPercentage={navRoute.discountPercentage}
                    total={navRoute.totalQuoteValue}
                    style={{ bottom: 55 }} />



            </View>

        </SafeAreaView>

    )
}

export default PreviewQuotationAdvancedContainer;
