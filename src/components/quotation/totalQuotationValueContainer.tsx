import React, {  useState, useEffect, type PropsWithChildren } from 'react';

import { View,  Text, TextInput } from 'react-native'
import Icons from '../../assets/icons/Icons';
import { ButtonTitles, ImageNames, Titles } from '../../constatnts';
import { QuotationStyles } from '../../containers/quotationStyle';
import BlueButtonWithIcon from '../buttons/blueButtonWithIcon';
import GrayButton from '../buttons/grayButton';

const TotalQuotationValueContainer: React.FC<
    PropsWithChildren<{
        totalActivityCost: string;
        previewQuotationTapped: Function;
        shareWithCustomerTapped: Function;
        saveAsTemplate: Function;
        isAdvanced: boolean;
        onDiscountPercentageChanged: Function;
        onDiscountChanged: Function;
        areaArray: never[];
        advancedAreaArray: never[];
    }>
> = ({ children, totalActivityCost, onDiscountPercentageChanged, onDiscountChanged, previewQuotationTapped, isAdvanced, saveAsTemplate, areaArray, advancedAreaArray, shareWithCustomerTapped }) => {

    const [discount, setDiscount] = useState('0');
    const [discountPercentage, setDiscountPercentage] = useState('0');
    const [totalQuotationValue, setTotalQuotationValue] = useState('0');

    useEffect(() => {
        calculateTotalQuotationValue()
    }, [totalActivityCost, discountPercentage, discount]);

    useEffect(() => {
        if (Number(totalActivityCost) > 0) {
            calculateDiscountPercentage(discount)
        }

    }, [totalActivityCost]);

    useEffect(() => {
        if (isAdvanced && advancedAreaArray.length < 1) {
            setDiscount('0')
            setDiscountPercentage('0')
        }

    }, [advancedAreaArray])

    useEffect(() => {
        if (!isAdvanced && areaArray.length < 1) {
            setDiscount('0')
            setDiscountPercentage('0')
        }

    }, [areaArray])

    const calculateDiscount = (text: string) => {
        setDiscount('0')
        const activityctivityCost = Number(totalActivityCost)
        const discountAmount = activityctivityCost * (Number(text) / 100)
        setDiscount(discountAmount.toFixed(1).toString())
        onDiscountChanged(discountAmount)
    }

    const calculateDiscountPercentage = (text: string) => {
        setDiscountPercentage('0')
        const activityctivityCost = Number(totalActivityCost)
        const discountPercent = (Number(text) * 100) / activityctivityCost
        setDiscountPercentage(discountPercent.toFixed(2).toString())
        onDiscountPercentageChanged(discountPercent)
    }

    const calculateTotalQuotationValue = () => {
        const totalActivity = Number(totalActivityCost)
        const discountAmount = Number(discount)
        const totalQuotation = totalActivity - discountAmount
        if (totalActivity > 0) {
            setTotalQuotationValue(totalQuotation.toFixed(2).toString())
        } else {
            setTotalQuotationValue('0')
        }
    }

    const previewQuotationPressed = () => {
        previewQuotationTapped(discountPercentage, discount, totalQuotationValue)
    }

    const shareWithCustomerPressed = () => {
        shareWithCustomerTapped()
    }

    return (
        <View style={QuotationStyles.totalQuotationValueContainer}>
            <View style={QuotationStyles.costSplitUpView}>
                <Text style={QuotationStyles.lable}>{Titles.TotalActivityCost}</Text>
                <Text style={QuotationStyles.lable}>{totalActivityCost}</Text>
            </View>
            <View style={QuotationStyles.costSplitUpView}>
                <Text style={QuotationStyles.lable}>{Titles.DiscountWithMinus}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={QuotationStyles.discountPercentageInput}
                        value={discountPercentage}
                        keyboardType='decimal-pad'
                        onChangeText={(text) => {
                            setDiscountPercentage(text)
                            onDiscountPercentageChanged(text)
                            calculateDiscount(text)
                        }}
                        returnKeyType='done'
                        editable={Number(totalActivityCost) > 0}
                    />
                    <Text style={QuotationStyles.lable}>%</Text>
                </View>

                <TextInput
                    style={QuotationStyles.discountInput}
                    value={discount}
                    keyboardType='decimal-pad'
                    onChangeText={(text) => {
                        setDiscount(text)
                        onDiscountChanged(text)
                        calculateDiscountPercentage(text)
                    }}
                    editable={Number(totalActivityCost) > 0}
                />
            </View>
            <View style={QuotationStyles.costSplitUpView}>
                <Text style={QuotationStyles.lable}>{Titles.TotalQuotationValue}</Text>
                <Text style={QuotationStyles.lable}>{totalQuotationValue}</Text>

            </View>
            {isAdvanced ?
                <View>{children}</View> :
                <GrayButton
                    title={ButtonTitles.PreviewQuotation}
                    buttonTapped={previewQuotationPressed}
                    style={{}}
                    titleStyle={{}} />
            }

            <BlueButtonWithIcon
                style={{ marginBottom: 20 }}
                title={ButtonTitles.ShareWithCustomer}
                icon={Icons.SHARE}
                buttonTapped={shareWithCustomerPressed} />
        </View>
    )
}

export default TotalQuotationValueContainer