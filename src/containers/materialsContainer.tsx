import React, {  useState, useEffect, } from 'react';
import { useNavigation,  useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView, TextInput, FlatList, Dimensions } from 'react-native'
import {  PlaceHolders, Titles } from '../constatnts';
import Colours from '../theme/colours';
import MaterialListItem from '../components/quotation/materialListItem';
import CancelSaveButtonHolder from '../components/quotation/cancelSaveButtonHolder';
import ListHeader from '../components/quotation/listHeader';

interface MaterialContainerProps {
    onGoBack: Function
    materialsArray: []
};

const MaterialContainer = () => {

    const [material, setMaterial] = useState('');
    const [qty, setQty] = useState('');
    const [rate, setRate] = useState('');
    const [materialsArray, setMaterialsArray] = useState([]);

    const [totalMaterialCost, setTotalMaterialCost] = useState('');

    const navigation = useNavigation()
    const route = useRoute()
    const navRoute = route.params as MaterialContainerProps

    useEffect(() => {

        if (typeof (navRoute.materialsArray) != undefined) {
            const receivedArray = [...navRoute.materialsArray]
            setMaterialsArray(receivedArray)
        } else {
            setMaterialsArray([])
        }
    }, [])


    useEffect(() => {
        if (materialsArray.length > 0) {
            calculateTotal()
        } else {
            setTotalMaterialCost('0')
        }
    }, [materialsArray]);


    const returnAddedMaterialCount = () => {
        return materialsArray.length
    }

    const _header = () => {

        return (

            <ListHeader 
            title1={Titles.Material} 
            title2={Titles.Qty} 
            title3={Titles.Rate} 
            title4={''} 
            kind={Titles.Material} 
            />
        )

    }

    const onDeleteTapped = (item: any, index: number) => {
        let listArray = [...materialsArray]
        listArray.splice(index, 1)
        setMaterialsArray(listArray)
    }

    const onMaterialTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('material', text, index)
    }
    const onQtyChange = (text: string, item: any, index: number) => {
        updateArrayItems('qty', text, index)
    }

    const onRateChange = (text: string, item: any, index: number) => {
        updateArrayItems('rate', text, index)
    }

    const updateArrayItems = (kind: string, value: string, index: number) => {
        let listArray = [...materialsArray]
        if (listArray.length > 0) {
            switch (kind) {
                case 'material':
                    listArray[index].material = value
                    setMaterial(value)
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
            calculateTotal()
        }
    }

    const onMaterialAdded = () => {
        let listItem = { material: material, qty: qty, rate: rate }
        let listArray = [...materialsArray]
        material && listArray.push(listItem)
        setMaterialsArray(listArray)
    }

    const calculateTotal = () => {
        if (materialsArray.length > 0) {
            let total = 0
            materialsArray.forEach(item => {
                total = total + (Number(item['qty'] * Number(item['rate'])))
            })
            setTotalMaterialCost(total.toString())
        } else {
            setTotalMaterialCost('0')
        }
    }

    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <MaterialListItem
                item={item}
                index={index}
                onDeleteTapped={onDeleteTapped}
                onMaterialTextChange={onMaterialTextChange}
                onQtyChange={onQtyChange}
                onRateChange={onRateChange}
                material={material}
                qty={qty}
                rate={rate}
                materialsArray={materialsArray} />

        )
    }

    const cancelButtonTapped = () => {
        navigation.goBack()
    }

    const saveButtonTapped = () => {
        navRoute.onGoBack(materialsArray, totalMaterialCost)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
            <CancelSaveButtonHolder
                cancelButtonTapped={cancelButtonTapped}
                saveButtonTapped={saveButtonTapped} />
            <TextInput
                placeholder={PlaceHolders.TypeToAddMaterials}
                autoCorrect={false}
                placeholderTextColor={Colours.Black}
                style={{ margin: 10, height: 40, marginBottom: 20, fontSize: 16,color:Colours.Black, borderBottomWidth: 1, borderColor: Colours.DarkGray }}
                value={material}
                returnKeyType={'done'}
                returnKeyLabel='Add'
                onSubmitEditing={() => {
                    setMaterial('')
                    onMaterialAdded()
                }}
                onChangeText={(text) => {
                    setMaterial(text)

                }}
            />

            <View style={{ height: 1, marginLeft: -10, marginRight: -10, backgroundColor: Colours.Underline }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold',color:Colours.Black, margin: 10 }}>{Titles.AddedItems} ({returnAddedMaterialCount()})</Text>

            <View style={{}}>
                {_header()}
                <FlatList
                    style={{ flex: 0, height: Dimensions.get('screen').height * 0.3, maxHeight: Dimensions.get('screen').height * 0.3 }}
                    contentContainerStyle={{}}
                    initialNumToRender={materialsArray.length}
                    data={materialsArray}
                    renderItem={_renderItem}
                />
            </View>
        </SafeAreaView>

    )
}

export default MaterialContainer;
