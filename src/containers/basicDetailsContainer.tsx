import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import CancelSaveButtonHolder from '../components/quotation/cancelSaveButtonHolder';
import Colours from '../theme/colours';
import DatePicker from 'react-native-date-picker'
import { useNavigation, useRoute } from '@react-navigation/native';

interface BasicDetailsProps {
    onGoBack: Function;
    basicDetails: {},
    customerType: string;
    customerName: string;
    customerAddress: string;
    fromDate: string;
    toDate: string;
    phone: string;
}

const BasicDetailsContainer: React.FC = props => {
    const [customerType, setCustomerType] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isFrom, setIsFrom] = useState(false)

    const route = useRoute()
    const navRoute = route.params as BasicDetailsProps
    const navigation = useNavigation()

    useEffect(() => {

        setCustomerType(navRoute.customerType)
        setCustomerName(navRoute.customerName)
        setCustomerAddress(navRoute.customerAddress)
        setFromDate(navRoute.fromDate)
        setToDate(navRoute.toDate)
        setPhone(navRoute.phone)
    }, [])

    const cancelButtonTapped = () => {
        navigation.goBack()
    }

    const saveButtonTapped = () => {


        navRoute.onGoBack(customerType, customerName, customerAddress, fromDate, toDate, phone)
        navigation.goBack()
    }

    const showDatePicker = () => {
        return (
            <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    const dateString = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`
                    if (isFrom) {
                        setFromDate(dateString)
                    } else {
                        setToDate(dateString)

                    }
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        )
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            {showDatePicker()}
            <CancelSaveButtonHolder
                cancelButtonTapped={cancelButtonTapped}
                saveButtonTapped={saveButtonTapped} />
            <Text style={styles.text}>Customer Type</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setCustomerType(text)}
                    value={customerType}
                />
            </View>
            <Text style={styles.text}>Customer Name</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setCustomerName(text)}
                    value={customerName}
                />
            </View>
            <Text style={styles.text}>Customer Address</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setCustomerAddress(text)}
                    value={customerAddress}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 40 }}>
                    <Text style={styles.text}>From Date</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setFromDate(text)}
                            value={fromDate}
                            onTouchStart={() => {
                                Keyboard.dismiss()
                                setIsFrom(true)
                                setOpen(true)
                               
                            }}
                            
                            onFocus={() => {
                                Keyboard.dismiss()
                                setIsFrom(true)
                                setOpen(true)
                            }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>To Date</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setToDate(text)}
                            value={toDate}
                            onTouchStart={() => {
                                Keyboard.dismiss()
                                setIsFrom(false)
                                setOpen(true)
                               
                            }}
                            
                            onFocus={() => {
                                Keyboard.dismiss()
                                setIsFrom(false)
                                setOpen(true)
                            }}
                        />
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Phone No.</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPhone(text)}
                    value={phone}
                    keyboardType='phone-pad'
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default BasicDetailsContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        paddingTop: 4,
        flex: 1,
        borderWidth: 1,
        borderBottomColor: Colours.DarkGray,
        borderColor: 'white',
        color: Colours.Black
    },
    text: {
        marginTop: 20,
        color: Colours.Black
    },
});