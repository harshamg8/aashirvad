import React, {  useState, useEffect, type PropsWithChildren } from 'react';
import {  TouchableOpacity, Image } from 'react-native';
import { View, Text, SafeAreaView,  FlatList } from 'react-native'
import GrayButton from '../components/buttons/grayButton';
import { ButtonTitles, NavigationNames, Titles } from '../constatnts';
import Colours from '../theme/colours';
import TotalQuotationValueContainer from '../components/quotation/totalQuotationValueContainer';
import TextWithEditIcon from '../components/quotation/textWithEditIcon';
import Icons from '../assets/icons/Icons'
import { QuotationStyles } from './quotationStyle';

const QuotationDetailsAdvancedContainer: React.FC<
    PropsWithChildren<{
        navigation: any;

    }>
> = ({ children, navigation }) => {

    const [totalActivityCost, setTotalActivityCost] = useState('');
    const [totalQuoteValue, setTotalQuoteValue] = useState('');
    const [activitiesArray, setActivitiesArray] = useState([]);
    const [laborsArray, setLaborArray] = useState([]);
    const [materialsArray, setMaterialArray] = useState([]);
    const [activitiesCost, setActivitiesCost] = useState('0');
    const [laborsCost, setLaborCost] = useState('0');
    const [materialsCost, setMaterialCost] = useState('0');
    const [area, setArea] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [totalAreaArray, setTotalAreaArray] = useState([]);
    const [basicDetails, setBasicDetails] = useState({});
    const [customerType, setCustomerType] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [phone, setPhone] = useState('');
    const [expand, setExpand] = useState(false);
    const [discountPercentage, setDiscountPercentage] = useState('0');
    const [discount, setDiscount] = useState('0');



    useEffect(() => {
        calculateTotal()

    }, [totalAreaArray]);

    const calculateTotal = () => {
        if (totalAreaArray.length > 0) {
            let total = 0
            totalAreaArray.forEach(item => {
                total = total + Number(item['estimatedCost'])
            })
            setTotalActivityCost(total.toString())
        } else {
            setTotalActivityCost('0')

        }
    }


    const previewQuotationTapped = () => {

        let sectionArrayForPreview: { title: never; data: {}[]; }[] = []

        if (typeof (totalAreaArray) != 'undefined') {
            if (totalAreaArray.length > 0) {
                totalAreaArray.forEach(item => {
                    const sectionItem = {
                        title: item['area'],
                        data: [item['activitiesArray'], item['laborsArray'], item['materialsArray']]
                    }
                    sectionArrayForPreview.push(sectionItem)
                })
            }


        }
        // const discountAmount = Number(totalActivityCost) * (Number(discountPercentage) / 100)
        // setDiscount(discountAmount.toString())
        let quoteValue = Number(totalActivityCost) - Number(discount)
        setTotalQuoteValue(quoteValue.toString())
        console.warn(JSON.stringify(sectionArrayForPreview))

        navigation.navigate(NavigationNames.PreviewQuotationAdvanced, {
            previewArray: sectionArrayForPreview,
            customerName: customerName,
            customerAddress: customerAddress,
            customerPhone: phone,
            vendorName: 'Suresh (Plumber)',
            vendorAddress: 'Address Here',
            vendorPhone: '87611234',
            vendorCityAndZip: '571428',
            discountPercentage: Number(discountPercentage).toFixed(2).toString(),
            totalQuoteValue: quoteValue,
            fromDate: fromDate,
            toDate: toDate

        })

    }


    const shareWithCustomerTapped = () => {

    }

    const onComingBackFromBasicDetails = (customerType: string, customerName: string, customerAddress: string, fromDate: string, toDate: string, phone: string) => {
        setCustomerType(customerType)
        setCustomerName(customerName)
        setCustomerAddress(customerAddress)
        setFromDate(fromDate)
        setToDate(toDate)
        setPhone(phone)
    }

    const editButtonTapped = () => {
        navigation.navigate(NavigationNames.BasicDetails, {
            onGoBack: onComingBackFromBasicDetails,
            customerType: customerType,
            customerName: customerName,
            customerAddress: customerAddress,
            fromDate: fromDate,
            toDate: toDate,
            phone: phone
        })
    }

    const onComingBackFromAreaDetails = (activitiesArray: [] = [], laborsArray: [] = [], materialsArray: [] = [], activitiesCost: string = '', laborsCost: string = '', materialsCost: string = '', area: string = '', type: string = '', size: string = '', index: number) => {
        setActivitiesArray(activitiesArray)
        setLaborArray(laborsArray)
        setMaterialArray(materialsArray)
        setActivitiesCost(activitiesCost)
        setLaborCost(laborsCost)
        setMaterialCost(materialsCost)
        setArea(area)
        setType(type)
        setSize(size)

        let listItem = {
            area: area,
            estimatedCost: Number(activitiesCost) + Number(laborsCost) + Number(materialsCost),
            activitiesArray: activitiesArray,
            laborsArray: laborsArray,
            materialsArray: materialsArray,
            type: type,
            size: size,
            activitiesCost: activitiesCost,
            laborsCost: laborsCost,
            materialsCost: materialsCost
        }
        let listArray = [...totalAreaArray]
        if (typeof (index) != 'undefined') {
            listArray[index] = listItem
        } else {
            listArray.push(listItem)
        }

        setTotalAreaArray(listArray)
    }

    const onDeleteTapped = (index: number) => {
        if (typeof (totalAreaArray) != 'undefined') {
            if (totalAreaArray.length > 0) {
                if (typeof (totalAreaArray[index]) != 'undefined') {
                    let listArray = [...totalAreaArray]
                    listArray.splice(index, 1)
                    setTotalAreaArray(listArray)
                }
            }
        }
        calculateTotal()
    }

    const addAreaButtontapped = () => {
        navigation.navigate(NavigationNames.AreaDetails, {
            onGoBack: onComingBackFromAreaDetails
        })
    }

    const renderBasicDetails = () => {
        if (!expand) {
            return null
        }
        return (
            <View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.CustomerType}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{customerType}</Text>
                </View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.CustomerName}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{customerName}</Text>
                </View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.CustomerAddress}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{customerAddress}</Text>
                </View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.FromDate}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{fromDate}</Text>
                </View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.ToDate}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{toDate}</Text>
                </View>
                <View style={QuotationStyles.basicDetailsContainer}>
                    <Text style={QuotationStyles.basicDetailsLable}>{Titles.PhoneNo}</Text>
                    <Text style={QuotationStyles.basicDetailsValue}>{phone}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: Colours.DarkGray, marginTop: 10, marginBottom: 10 }} />
            </View>

        )

    }

    const _renderItem = ({ item, index }: { item: any; index: any }) => {
        return (
            <TextWithEditIcon
                title={item.area}
                editButtonTapped={() => {
                    navigation.navigate(NavigationNames.AreaDetails, {
                        onGoBack: onComingBackFromAreaDetails,
                        onDeleteTapped: onDeleteTapped,
                        activitiesArray: totalAreaArray[index]['activitiesArray'],
                        laborsArray: totalAreaArray[index]['laborsArray'],
                        materialsArray: totalAreaArray[index]['materialsArray'],
                        area: totalAreaArray[index]['area'],
                        type: totalAreaArray[index]['type'],
                        size: totalAreaArray[index]['size'],
                        activitiesCost: totalAreaArray[index]['activitiesCost'],
                        materialsCost: totalAreaArray[index]['materialsCost'],
                        laborsCost: totalAreaArray[index]['laborsCost'],
                        estimatedCost: totalAreaArray[index]['estimatedCost'],
                        index: index

                    })
                }}
                style={{}}
                titleStyle={{}}
                secondTitle={`${Titles.EstimatedCost}: ${item.estimatedCost}`}
                iconName={Icons.ACTIVITY} />

        )
    }


    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
            <View>
                <TextWithEditIcon
                    title={Titles.BasicDetails}
                    editButtonTapped={editButtonTapped}
                    style={{}}
                    titleStyle={{}}
                    secondTitle={''}
                    iconName={''} >
                    <TouchableOpacity onPress={() => {
                        setExpand(!expand)
                    }}>
                        {expand ?
                            <Image
                                style={{ width: 20, height: 20 }}
                                resizeMode='contain'
                                source={Icons.UPARROW}
                            /> :
                            <Image
                                style={{ width: 28, height: 28 }}
                                resizeMode='contain'
                                source={Icons.DOWNARROW}
                            />}

                    </TouchableOpacity>
                </TextWithEditIcon>
                {renderBasicDetails()}

            </View>


            <GrayButton
                title={ButtonTitles.AddArea}
                buttonTapped={addAreaButtontapped}
                style={{ height: 40, marginRight: 10, marginLeft: 10 }}
                titleStyle={{ fontSize: 14, color: Colours.Black }} />

            <FlatList
                data={totalAreaArray}
                renderItem={_renderItem}
            />

            <TotalQuotationValueContainer
                totalActivityCost={totalActivityCost}
                previewQuotationTapped={previewQuotationTapped}
                shareWithCustomerTapped={shareWithCustomerTapped}
                saveAsTemplate={() => {
                }}
                isAdvanced={true}
                onDiscountPercentageChanged={(text: string) => {
                    setDiscountPercentage(text);
                }}
                onDiscountChanged={(text: string) => {
                    setDiscount(text);
                    // console.warn(text)
                }}
                areaArray={[]}
                advancedAreaArray={totalAreaArray}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <GrayButton
                        title={ButtonTitles.PreviewQuotation}
                        buttonTapped={previewQuotationTapped}
                        style={{ paddingHorizontal: 15, height: 40, }}
                        titleStyle={{ fontSize: 14 }} />
                    <GrayButton
                        title={ButtonTitles.SaveAsTemplate}
                        buttonTapped={() => {

                        }}
                        style={{ paddingHorizontal: 15, height: 40, }}
                        titleStyle={{ fontSize: 14 }} />
                </View>
            </TotalQuotationValueContainer>

        </SafeAreaView>

    )
}

export default QuotationDetailsAdvancedContainer;
