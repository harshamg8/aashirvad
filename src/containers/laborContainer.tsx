import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView, FlatList, Dimensions } from 'react-native'
import GrayButtonWithIcon from '../components/buttons/grayButtonWithicon';
import { ButtonTitles, Titles } from '../constatnts';
import Colours from '../theme/colours';
import LaborListItem from '../components/quotation/laborListItem';
import CancelSaveButtonHolder from '../components/quotation/cancelSaveButtonHolder';
import Icons from '../assets/icons/Icons';
import ListHeader from '../components/quotation/listHeader';

interface LaborContainerProps {
    onGoBack: Function
    laborsArray: []
};

const LaborContainer = () => {

    const [labor, setLabor] = useState('');
    const [qty, setQty] = useState('0');
    const [rate, setRate] = useState('0');
    const [forDays, setForDays] = useState('0');
    const [laborsArray, setLaborsArray] = useState([]);

    const [totalLaborCost, setTotalLaborCost] = useState('');

    const navigation = useNavigation()
    const route = useRoute()
    const navRoute = route.params as LaborContainerProps

    useEffect(() => {

        if (typeof (navRoute.laborsArray) != undefined) {
            const receivedArray = [...navRoute.laborsArray]
            setLaborsArray(receivedArray)
        } else {
            setLaborsArray([])
        }
    }, [])


    useEffect(() => {
        if (laborsArray.length > 0) {
            calculateTotal()
        } else {
            setTotalLaborCost('0')
        }
    }, [laborsArray]);


    const returnAddedLaborsCount = () => {
        return laborsArray.length
    }

    const _header = () => {

        return (
            <ListHeader 
            title1={Titles.Labor} 
            title2={Titles.Qty} 
            title3={Titles.Rate} 
            title4={Titles.ForDays} 
            kind={Titles.Labor} 
            />
        )

    }

    const onDeleteTapped = (item: any, index: number) => {
        let listArray = [...laborsArray]
        listArray.splice(index, 1)
        setLaborsArray(listArray)
    }

    const onLaborTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('labor', text, index)
    }
    const onQtyChange = (text: string, item: any, index: number) => {
        updateArrayItems('qty', text, index)
    }

    const onRateChange = (text: string, item: any, index: number) => {
        updateArrayItems('rate', text, index)
    }

    const onForDaysChange = (text: string, item: any, index: number) => {
        updateArrayItems('forDays', text, index)
    }

    const updateArrayItems = (kind: string, value: string, index: number) => {
        let listArray: {}[] = [...laborsArray]
        if (listArray.length > 0) {
            switch (kind) {
                case 'labor':
                    listArray[index].labor = value
                    setLabor(value)
                    break;
                case 'qty':
                    listArray[index].qty = value
                    setQty(value)
                    break;
                case 'rate':
                    listArray[index].rate = value
                    setRate(value)
                    break;
                case 'forDays':
                    listArray[index].forDays = value
                    setForDays(value)
                    break;

                default:
                    break;
            }
            calculateTotal()
        }
    }


    const calculateTotal = () => {
        if (laborsArray.length > 0) {
            let total = 0
            laborsArray.forEach(item => {
                total = total + (Number(item['qty'] * Number(item['rate'] * Number(item['forDays']))))
            })
            setTotalLaborCost(total.toString())
        } else {
            setTotalLaborCost('0')
        }
    }

    const _footer = () => {
        return (
            <View style={{ marginBottom: 10, }}>
                <GrayButtonWithIcon
                    title={ButtonTitles.AddLabor}
                    icon={Icons.PLUS}
                    buttonTapped={addLaborTapped}
                    style={{ height: 35 }}
                    iconStyle={{ width: 15, height: 15 }}
                    lableStyle={{ fontSize: 14,color:Colours.Black }} />
            </View>

        )

    }

    const addLaborTapped = () => {
        let listItem = { labor: '', qty: '', rate: '', forDays: '' }
        let listArray = [...laborsArray]
        listArray.push(listItem)
        setLaborsArray(listArray)
    }

    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <LaborListItem
                item={item}
                index={index}
                onDeleteTapped={onDeleteTapped}
                onLaborTextChange={onLaborTextChange}
                onQtyChange={onQtyChange}
                onRateChange={onRateChange}
                onForDaysChange={onForDaysChange}
                labor={labor}
                qty={qty}
                rate={rate}
                forDays={forDays}
                laborsArray={laborsArray} />

        )
    }

    const cancelButtonTapped = () => {
        navigation.goBack()
    }

    const saveButtonTapped = () => {
        navRoute.onGoBack(laborsArray, totalLaborCost)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
            <CancelSaveButtonHolder
                cancelButtonTapped={cancelButtonTapped}
                saveButtonTapped={saveButtonTapped} />

            <Text style={{ fontSize: 16, fontWeight: 'bold', color:Colours.Black,margin: 10 }}>{Titles.AddedItems} ({returnAddedLaborsCount()})</Text>

            <View style={{}}>
                {_header()}
                <FlatList
                    style={{ flex: 0, height: Dimensions.get('screen').height * 0.8, maxHeight: Dimensions.get('screen').height * 0.8 }}
                    contentContainerStyle={{}}
                    initialNumToRender={laborsArray.length}
                    data={laborsArray}
                    renderItem={_renderItem}
                    ListFooterComponent={_footer}
                />
                {/* {_footer()} */}

            </View>
        </SafeAreaView>

    )
}

export default LaborContainer;
