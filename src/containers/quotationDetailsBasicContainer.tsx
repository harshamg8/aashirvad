import React, { useState, useEffect, type PropsWithChildren } from 'react';
import {  Keyboard } from 'react-native';
import { View,  Text, SafeAreaView, FlatList, Dimensions } from 'react-native'
import GrayButtonWithIcon from '../components/buttons/grayButtonWithicon';
import AreaListItem from '../components/quotation/areaListItem';
import TextInputWithLable from '../components/textInputs/textInputWithLable';
import { ButtonTitles, NavigationNames, Titles } from '../constatnts';
import Colours from '../theme/colours';
import TotalQuotationValueContainer from '../components/quotation/totalQuotationValueContainer';
import Icons from '../assets/icons/Icons';
import ListHeader from '../components/quotation/listHeader';



const QuotationDetailsBasicContainer: React.FC<
    PropsWithChildren<{
        navigation: any
    }>
> = ({ children, navigation }) => {

    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [areaArray, setAreaArray] = useState([]);
    const [qty, setQty] = useState('');
    const [rate, setRate] = useState('');
    const [type, setType] = useState('');
    const [totalActivityCost, setTotalActivityCost] = useState('');
    const [showHeader, setShowheader] = useState(false);
    const [discountPercentage, setDiscountPercentage] = useState('0');
    const [discount, setDiscount] = useState('0');
    const [hideBottomView, setHideBottomView] = useState(false);

    let listViewRef: any;



    useEffect(() => {
        if (areaArray.length > 0) {
            setShowheader(true)
            let total = 0
            areaArray.forEach(item => {
                total += item['cost']
            })
            setTotalActivityCost(total.toString())
        } else {
            setTotalActivityCost('0')
            setShowheader(false)
        }
    }, [areaArray]);

    useEffect(() => {
        
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setHideBottomView(false)
        });
    
        return () => {
          hideSubscription.remove();
        };
      }, []);

    const onTextChanged = (text: React.SetStateAction<string>, inputName: React.SetStateAction<string>) => {
        switch (inputName) {
            case 'name':
                setCustomerName(text)
                break;
            case 'phone':
                setPhoneNumber(text)
                break;

            default:
                break;
        }

    }
    const previewQuotationTapped = (discountPercentage: string, discount: string, totalQuotationValue: string) => {
        navigation.navigate(NavigationNames.PreviewQuotation, {
            customerName: customerName,
            phoneNumber: phoneNumber,
            areaArray: areaArray,
            discountPercentage: discountPercentage,
            totalQuoteValue: totalQuotationValue,
            customerAddress: 'Customer Address Here',
            vendorName: 'Suresh (Plumber)',
            vendorAddress: 'Address Here',
            vendorPhone: '87611234',
            vendorCityAndZip: '571428',
        })
    }

    const shareWithCustomerTapped = () => {

    }

    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <AreaListItem
                item={item}
                index={index}
                onDeleteTapped={onDeleteTapped}
                onTypeTextChange={onTypeTextChange}
                onQtyTextChange={onQtyTextChange}
                onRateTextChange={onRateTextChange}
                type={type}
                qty={qty}
                rate={rate}
                areaArray={areaArray}
                onEditingEnded={onEditingEnded}
                onTouchStart={onTouchStart}
            />

        )
    }

    const onDeleteTapped = (item: any, index: number) => {
        let listArray = [...areaArray]
        listArray.splice(index, 1)
        setAreaArray(listArray)

    }

    const addRoomTapped = () => {
        let listItem = { type: '', qty: '', rate: '', cost: 0 }
        let listArray = [...areaArray]
        listArray.push(listItem)
        setAreaArray(listArray)
        listViewRef.scrollToEnd({ animated: true });
    }

    const updateArrayItems = (kind: string, value: string, index: number) => {
        let listArray = [...areaArray]
        if (listArray.length > 0) {
            switch (kind) {
                case 'type':
                    listArray[index].type = value
                    setType(value)
                    break;
                case 'qty':
                    listArray[index].qty = value
                    setQty(value)
                    break;
                case 'rate':
                    listArray[index].rate = value
                    setRate(value)
                    break;

                default:
                    break;
            }
            let cost = Number(areaArray[index]['rate']) * Number(areaArray[index].qty)
            listArray[index].cost = cost
            setAreaArray(listArray)
            calculateTotal(index)
        }

    }

    const onTypeTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('type', text, index)
        setHideBottomView(true)
    }
    const onQtyTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('qty', text, index)
        setHideBottomView(true)

    }
    const onRateTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('rate', text, index)
        setHideBottomView(true)

    }
    const onEditingEnded = () => {
        setHideBottomView(false)
    }

    const onTouchStart = () => {
        setHideBottomView(true)
    }

    const calculateTotal = (index: number) => {
        if (areaArray.length > 0) {

            let total = 0
            areaArray.forEach(item => {
                total = total + Number(item['cost'])
            })
            setTotalActivityCost(total.toString())
        }
    }

    const _footer = () => {
        return (
            <View style={{ marginBottom: 10, }}>
                <GrayButtonWithIcon
                    title={ButtonTitles.AddRoom}
                    icon={Icons.PLUS}
                    buttonTapped={addRoomTapped}
                    style={{ height: 35 }}
                    iconStyle={{ width: 15, height: 15 }}
                    lableStyle={{ fontSize: 14 }} />
            </View>

        )

    }

    const _header = () => {
        if (!showHeader) {
            return null
        }
        return (
            <ListHeader
                title1={Titles.Type}
                title2={Titles.Qty}
                title3={Titles.Rate}
                title4={Titles.Cost}
                kind={'Basic'}
            />
        )

    }

    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
            {/* <View> */}

            <TextInputWithLable
                placeHolder=''
                lable={Titles.CustomerName}
                onTextChanged={onTextChanged}
                keyBoardType='default'
                inputName='name'
            />
            <TextInputWithLable
                placeHolder=''
                lable={Titles.PhoneNo}
                onTextChanged={onTextChanged}
                keyBoardType='phone-pad'
                inputName='phone'
            />

            <View style={{ backgroundColor: Colours.Underline, marginTop: 15, marginBottom: 15, height: 2 }} />

            <Text style={{ margin: 20, marginTop: 5, marginBottom: 15, fontWeight: 'bold', fontSize: 18, color: Colours.Black }}>Areas</Text>

            <View style={{}}>
                {_header()}
                <FlatList
                    style={{ height: Dimensions.get('screen').height * 0.3, maxHeight: Dimensions.get('screen').height * 0.30, }}
                    contentContainerStyle={{}}
                    initialNumToRender={areaArray.length}
                    data={areaArray}
                    ref={(ref) => {
                        listViewRef = ref;
                    }}
                    renderItem={_renderItem}
                    ListFooterComponent={_footer}
                />
                {/* {_footer()} */}
            </View>

            {!hideBottomView &&
                <TotalQuotationValueContainer
                    totalActivityCost={totalActivityCost}
                    previewQuotationTapped={previewQuotationTapped}
                    shareWithCustomerTapped={shareWithCustomerTapped}
                    saveAsTemplate={() => { }}
                    isAdvanced={false}
                    onDiscountPercentageChanged={(text: string) => {
                        setDiscountPercentage(text);
                    }}
                    onDiscountChanged={(text: string) => {
                        setDiscount(text);
                    }}
                    areaArray={areaArray}
                    advancedAreaArray={[]} />
            }

            {/* </View> */}

        </SafeAreaView>

    )
}

export default QuotationDetailsBasicContainer;
