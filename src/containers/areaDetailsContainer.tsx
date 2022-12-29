import React, { useState, useEffect, type PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import {  useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView, TextInput, Dimensions } from 'react-native'

import GrayButton from '../components/buttons/grayButton';

import { NavigationNames, Titles } from '../constatnts';
import Colours from '../theme/colours';

import TextWithEditIcon from '../components/quotation/textWithEditIcon';
import Icons from '../assets/icons/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface AreaDetailsProps {
    onGoBack: Function;
    activitiesArray: [];
    laborsArray: [];
    materialsArray: [];
    area: string;
    type: string;
    size: string;
    index:number;
    activitiesCost:string;
    materialsCost:string;
    laborsCost:string;
    estimatedCost:string;
    onDeleteTapped:Function;
}

const AreaDetailsContainer: React.FC<
    PropsWithChildren<{
    }>
> = ({ children }) => {

    const navigation = useNavigation()
    const route = useRoute()
    const navRoute = route.params as AreaDetailsProps

    const [area, setArea] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');

    const [totalActivityCost, setTotalActivityCost] = useState('0');
    const [activitiesCost, setActivitiesCost] = useState('0');
    const [materialsCost, setMaterialsCost] = useState('0');
    const [laborsCost, setLaborsCost] = useState('0');
    const [estimatedCost, setEstimatedCost] = useState('0');

    const [activitiesArray, setActivitiesArray] = useState([]);
    const [materialsArray, setMaterialsArray] = useState([]);
    const [laborsArray, setLaborsArray] = useState([]);

    useEffect(() => {
        if(typeof(navRoute.index) != 'undefined'){
            setActivitiesArray(navRoute.activitiesArray)
            setLaborsArray(navRoute.laborsArray)
            setMaterialsArray(navRoute.materialsArray)
            setArea(navRoute.area)
            setType(navRoute.type)
            setSize(navRoute.size)
            setActivitiesCost(navRoute.activitiesCost)
            setLaborsCost(navRoute.laborsCost)
            setMaterialsCost(navRoute.materialsCost)
            setEstimatedCost(navRoute.estimatedCost)
        }
        
    }, [])


    const onComingBackFromActivities = (activityArray: [], activitiesCost: any) => {
        setActivitiesArray(activityArray)
        setActivitiesCost(activitiesCost)

    }

    const onComingBackFromMaterials = (materialsArray: [], materialsCost: any) => {
        setMaterialsArray(materialsArray)
        setMaterialsCost(materialsCost)
        // alert(materialsCost)

    }

    const onComingBackFromLabor = (laborsArray: [], laborsCost: any) => {
        setLaborsArray(laborsArray)
        setLaborsCost(laborsCost)
        Alert.alert('Details', JSON.stringify(laborsArray) + '\n' + laborsCost)

    }

    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, alignItems: 'center', justifyContent: 'space-around' }}>
                <GrayButton
                    title={Titles.Preview}
                    buttonTapped={() => {

                    }}
                    style={{ width: (Dimensions.get('screen').width - 40) / 4 }}
                    titleStyle={{}} />
                <GrayButton
                    title={Titles.Copy}
                    buttonTapped={() => {

                    }}
                    style={{ width: (Dimensions.get('screen').width - 40) / 4 }}
                    titleStyle={{}} />
                <GrayButton
                    title={Titles.Delete}
                    buttonTapped={() => {
                        if(typeof(navRoute.index) != 'undefined'){
                            navRoute.onDeleteTapped(navRoute.index)
                        }
                        navigation.goBack()

                    }}
                    style={{ width: (Dimensions.get('screen').width - 40) / 4 }}
                    titleStyle={{}} />
                <GrayButton
                    title={Titles.Save}
                    buttonTapped={() => {
                        navRoute.onGoBack(activitiesArray, laborsArray, materialsArray, activitiesCost, laborsCost, materialsCost, area, type, size,navRoute.index)
                        navigation.goBack()
                    }}
                    style={{ backgroundColor: Colours.BlueButton, width: (Dimensions.get('screen').width - 40) / 4 }}
                    titleStyle={{ color: Colours.White }} />
            </View>

            <View style={{ height: 1, marginTop: 10, backgroundColor: Colours.Underline }} />
            
            <Text style={{ color: Colours.DarkGray, fontSize: 16, fontWeight: 'bold',marginLeft:10 }}>Enter Area</Text>

            <TextInput
                placeholder='Enter Area'
               
                value={area}
                onChangeText={(text) => {
                    setArea(text)
                }}
                style={{ margin: 10, fontSize: 16, borderBottomWidth: 1,color:Colours.Black, borderColor: Colours.Underline, height: 40 }}
                placeholderTextColor={Colors.Black}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>

                <View style={{ width: '45%' }}>
                    <Text style={{ color: Colours.DarkGray, fontSize: 16, fontWeight: 'bold' }}>Type</Text>
                    <TextInput
                        placeholder='Enter Type'
                        value={type}
                        onChangeText={(text) => {
                            setType(text)
                        }}
                        style={{ margin: 10, fontSize: 16,color:Colours.Black, borderBottomWidth: 1, borderColor: Colours.Underline, height: 40 }}
                    />
                </View>

                <View style={{ width: '45%' }}>
                    <Text style={{ color: Colours.DarkGray, fontSize: 16, fontWeight: 'bold' }}>Size</Text>
                    <TextInput
                        placeholder='Enter Size'
                        value={size}
                        onChangeText={(text) => {
                            setSize(text)
                        }}
                        style={{ margin: 10, fontSize: 16,color:Colours.Black, borderBottomWidth: 1, borderColor: Colours.Underline, height: 40 }}
                    keyboardType='numbers-and-punctuation'
                    />
                </View>

            </View>

            <TextWithEditIcon
                title={`${Titles.Activities} (${activitiesArray.length})`}
                editButtonTapped={() => {
                    navigation.navigate(NavigationNames.Activities as never, {
                        onGoBack: onComingBackFromActivities,
                        activitiesArray: activitiesArray
                    } as never);
                }}
                style={{}}
                titleStyle={{}}
                secondTitle={Titles.TapEditToAdd}
                iconName={Icons.ACTIVITY} />

            <TextWithEditIcon
                title={`${Titles.Labor} (${laborsArray.length})`}
                editButtonTapped={() => {
                    navigation.navigate(NavigationNames.Labor as never, {
                        onGoBack: onComingBackFromLabor,
                        laborsArray: laborsArray
                    } as never)
                }}
                style={{}}
                titleStyle={{}}
                secondTitle={Titles.TapEditToAdd}
                iconName={Icons.LABOR}
            />
            <TextWithEditIcon
                title={`${Titles.Material} (${materialsArray.length})`}
                editButtonTapped={() => {
                    navigation.navigate(NavigationNames.Materials as never, {
                        onGoBack: onComingBackFromMaterials,
                        materialsArray: materialsArray
                    } as never)
                }}
                style={{}}
                titleStyle={{}}
                secondTitle={Titles.TapEditToAdd}
                iconName={Icons.MATERIAL}
            />

        </SafeAreaView>

    )
}

export default AreaDetailsContainer;
