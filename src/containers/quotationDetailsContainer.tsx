import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {  SafeAreaView, } from 'react-native'
import Colours from '../theme/colours';
import QuotationDetailsBasicContainer from './quotationDetailsBasicContainer';
import QuotationDetailsAdvancedContainer from './quotationDetailsAdvancedContainer';

const QuotationDetailsContainer = (props: { navigation: { navigate: (arg0: string,{}) => void; }; }) => {
const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: Colours.ContainerBackground, flex: 1 }}>
           {/* <QuotationDetailsBasicContainer
           navigation={navigation}
           /> */}
           <QuotationDetailsAdvancedContainer
           navigation={navigation}
           />
        </SafeAreaView>

    )
}

export default QuotationDetailsContainer;
