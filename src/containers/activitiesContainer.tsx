import React, { useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView, TextInput, FlatList, Dimensions } from 'react-native'
import { PlaceHolders, Titles } from '../constatnts';
import Colours from '../theme/colours';
import ActivityListItem from '../components/quotation/activityListItem';
import CancelSaveButtonHolder from '../components/quotation/cancelSaveButtonHolder';
import ListHeader from '../components/quotation/listHeader';

interface ActivityContainerProps {
    onGoBack: Function
    activitiesArray: []
};

const ActivitiesContainer = () => {

    const [activity, setActivity] = useState('');
    const [activityToBeAdded, setActivityToBeAdded] = useState('');
    const [cost, setCost] = useState('0');
    const [activityArray, setActivityArray] = useState([]);

    const [totalActivityCost, setTotalActivityCost] = useState('');

    const navigation = useNavigation()
    const route = useRoute()
    const navRoute = route.params as ActivityContainerProps

    useEffect(() => {

        if (typeof (navRoute.activitiesArray) != undefined) {
            const receivedArray = [...navRoute.activitiesArray]
            setActivityArray(receivedArray)
        } else {
            setActivityArray([])
        }
    }, [])


    useEffect(() => {
        if (activityArray.length > 0) {
            calculateTotal()
        } else {
            setTotalActivityCost('0')
        }
    }, [activityArray]);


    const returnAddedActivityCount = () => {
        return activityArray.length
    }

    const _header = () => {

        return (
            <ListHeader 
            title1={Titles.Activities} 
            title2={Titles.Cost} 
            title3={''} 
            title4={''} 
            kind={Titles.Activities} 
            />
        )

    }

    const onDeleteTapped = (item: any, index: number) => {
        let listArray = [...activityArray]
        listArray.splice(index, 1)
        setActivityArray(listArray)
    }

    const onActivityTextChange = (text: string, item: any, index: number) => {
        updateArrayItems('activity', text, index)
    }
    const onCostChange = (text: string, item: any, index: number) => {
        updateArrayItems('cost', text, index)
    }

    const updateArrayItems = (kind: string, value: string, index: number) => {
        let listArray = [...activityArray]
        if (listArray.length > 0) {
            switch (kind) {
                case 'activity':
                    listArray[index].activity = value
                    setActivity(value)
                    break;
                case 'cost':
                    listArray[index].cost = value
                    setCost(value)
                    break;

                default:
                    break;
            }
            calculateTotal()
        }
    }

    const onActivityAdded = () => {
        let listItem = { activity: activity, cost: 0 }
        let listArray = [...activityArray]
        activity && listArray.push(listItem)
        setActivityArray(listArray)
    }

    const calculateTotal = () => {
        if (activityArray.length > 0) {
            let total = 0
            activityArray.forEach(item => {
                total = total + Number(item['cost'])
            })
            setTotalActivityCost(total.toString())
        } else {
            setTotalActivityCost('0')
        }
    }

    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <ActivityListItem
                item={item}
                index={index}
                onDeleteTapped={onDeleteTapped}
                onActivityTextChange={onActivityTextChange}
                onCostChange={onCostChange}
                activity={activity}
                cost={cost}
                activityArray={activityArray} />

        )
    }

    const cancelButtonTapped = () => {
        navigation.goBack()
    }

    const saveButtonTapped = () => {
        navRoute.onGoBack(activityArray, totalActivityCost)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>

            <CancelSaveButtonHolder
                cancelButtonTapped={cancelButtonTapped}
                saveButtonTapped={saveButtonTapped} />

            <TextInput
                placeholder={PlaceHolders.TypeToAddActivities}
                autoCorrect={false}
                placeholderTextColor={Colours.Black}
                style={{ margin: 10, height: 40, marginBottom: 20, fontSize: 16,color:Colours.Black, borderBottomWidth: 1, borderColor: Colours.DarkGray }}
                value={activity}
                returnKeyType={'done'}
                returnKeyLabel='Add'
                onSubmitEditing={() => {
                    setActivity('')
                    onActivityAdded()
                }}
                onChangeText={(text) => {
                    setActivity(text)

                }}
            />

            <View style={{ height: 1, marginLeft: -10, marginRight: -10, backgroundColor: Colours.Underline }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 10,color:Colours.Black }}>{Titles.AddedItems} ({returnAddedActivityCount()})</Text>

            <View style={{}}>
                {_header()}
                <FlatList
                    style={{ flex: 0, height: Dimensions.get('screen').height * 0.3, maxHeight: Dimensions.get('screen').height * 0.3 }}
                    contentContainerStyle={{}}
                    initialNumToRender={activityArray.length}
                    data={activityArray}
                    renderItem={_renderItem}
                />
            </View>
        </SafeAreaView>

    )
}

export default ActivitiesContainer;
