import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colours from '../theme/colours';

export const QuotationStyles = StyleSheet.create({
    totalQuotationValueContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colours.White,
        position: 'absolute',
        bottom:-20,
        width: Dimensions.get('screen').width,
        // height:250,
        elevation: 15,
        shadowColor: Colours.Black,
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,

    },
    basicDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 5
    },
    basicDetailsLable: {
        fontSize: 14,
        color:Colours.Black,
        width: '40%'
    },
    basicDetailsValue: {
        fontSize: 14,
        color:Colours.Black,
        fontWeight: 'bold'
    },
    costSplitUpView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        alignItems: 'center'

    },
    lable: {
        fontSize: 14,
        fontWeight: 'bold',
        color:Colours.Black
    },
    discountPercentageInput: {
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: Colours.Underline,
        borderRadius: 5,
        width: 50,
        // height: 30,
        color:Colours.Black
    },
    discountInput: {
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: Colours.Underline,
        borderRadius: 5,
        // height: 30,
        width: 120,
        textAlign: 'right',
        color:Colours.Black
    },
    areaListItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colours.Underline

    },
    typeContainer: {
        backgroundColor: Colours.White,
        width: (Dimensions.get('screen').width - 5) * 0.4,
        height: 50,
        marginRight: 0.5,
        // marginLeft:1,
        marginBottom: 0.5,
        marginTop:0.5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    closeContainer: {
        backgroundColor: Colours.White,
        // width: (Dimensions.get('screen').width - 30) / 3,
        height: 50,
        marginRight: 1,
        // marginLeft:1,
        marginBottom: 1,
        marginTop: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    areaHeader: {
        width: (Dimensions.get('screen').width - 5) * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.White
    },
    headerLable: {
        fontWeight: 'bold',
        color: Colours.DarkGray,
        fontSize: 14
    },
    previewQuotationMainLable: {
        fontSize: 20,
        color: Colours.BlueButton,
        fontWeight: 'bold',
        margin: 10

    },
    previewQuotationNumberAndDate: {
        fontSize: 15,
        color: Colours.Black,
        fontWeight: 'bold',
        marginLeft: 10
    },
    fromToContainer: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: Colours.DarkGray,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },
    fromToView: {
        padding: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderRightWidth: 0.25,
        borderColor: Colours.DarkGray,
        backgroundColor: Colours.White,
        width: '50%',
        height: '99.9%'
    },
    fromToLable: {
        fontSize: 15,
        color: Colours.BlueButton,
        fontWeight: 'bold',
        marginBottom: 5
    },
    fromToDetails: {
        fontSize: 14,
        color: Colours.Black,
    },
    previewListHeader: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: Colours.LowOpacityBlue,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: Colours.DarkGray
    },
    previewListHeaderLable: {
        color: Colours.BlueButton,
        fontWeight: 'bold',
        fontSize: 14
    },
    discountAndTotalViewContainer: {
        backgroundColor: Colours.LowOpacityBlue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        height: 60,
        borderRadius: 10,
        margin: 10,
        width: Dimensions.get('screen').width - 20,
    },
    discountAndTotalAndThankYouViewContainer: {
        
        borderRadius: 10,
        width: Dimensions.get('screen').width - 20,
        bottom: 40,
        position: 'absolute',
        
    },
    thankYouView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colours.Underline,
        height: 50,
        width: Dimensions.get('screen').width,
        
    },
    discountAndTotalView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discountAndTotalText: {
        fontSize: 18,
        color: Colours.Black,
        fontWeight: 'bold',
        marginBottom: 5
    },
    

})