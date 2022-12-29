import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView} from 'react-native'
import QuotationAdvancedContainer from './quotationAdvancedContainer';
import QuotationBasicContainer from './quotationBasicContainer';

const QuotationContainer = () => {


    return (
        <SafeAreaView style={{flex:1}}>
        
            {/* <QuotationBasicContainer
            navigation={useNavigation()}
            /> */}
            <QuotationAdvancedContainer
            navigation={useNavigation()}
            />

        </SafeAreaView>

    )
}

export default QuotationContainer;
