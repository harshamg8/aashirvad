import React, { type PropsWithChildren } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Titles } from '../../constatnts';
import { QuotationStyles } from '../../containers/quotationStyle';
import Colours from '../../theme/colours'
import PreviewFromToDetailsText from './previewFromToDetailsText';



const QuotationPreviewFromToView: React.FC<
    PropsWithChildren<{
        customerName: string;
        customerAddress: string;
        customerPhone: string;
        vendorName: string;
        vendorAddress: string;
        vendorPhone: string;
        vendorCityAndZip: string;
        quotationNumber: string;
        date:string;
        style: {};
        titleStyle: {};
    }>
> = ({ children, customerName,
    customerAddress,
    customerPhone,
    vendorName,
    vendorAddress,
    vendorPhone,
    quotationNumber,
    date,
    vendorCityAndZip, style, titleStyle }) => {

        return (
            <View>
                <View>
                    <Text style={QuotationStyles.previewQuotationMainLable}>Quotation | {customerName}</Text>
                    <Text style={QuotationStyles.previewQuotationNumberAndDate}>{quotationNumber} | Date {date}</Text>
                </View>
                <View style={QuotationStyles.fromToContainer}>
                <View style={QuotationStyles.fromToView}>
                    <Text style={QuotationStyles.fromToLable}>{Titles.From}</Text>
                    <PreviewFromToDetailsText
                        title={vendorName}
                        style={{}} />
                    <PreviewFromToDetailsText
                        title={vendorAddress}
                        style={{}} />
                    <PreviewFromToDetailsText
                        title={vendorCityAndZip}
                        style={{}} />
                    <PreviewFromToDetailsText
                        title={vendorPhone}
                        style={{}} />
                </View>
                <View style={{ padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderLeftWidth: 0.25, borderColor: Colours.DarkGray, backgroundColor: Colours.White, width: '50%', height: '99.9%' }}>

                    <Text style={QuotationStyles.fromToLable}>{Titles.To}</Text>
                    <PreviewFromToDetailsText
                        title={customerName}
                        style={{}} />
                    <PreviewFromToDetailsText
                        title={customerAddress}
                        style={{}} />
                    <PreviewFromToDetailsText
                        title={customerPhone}
                        style={{}} />
                </View>
            </View>
            </View>

        )

    }

export default QuotationPreviewFromToView
