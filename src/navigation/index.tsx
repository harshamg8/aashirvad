
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuotationContainer from '../containers/quotationContainer';
import QuotationDetailsContainer from '../containers/quotationDetailsContainer';
import PreviewQuotationContainer from '../containers/previewQuotation';
import AreaDetailsContainer from '../containers/areaDetailsContainer';
import ActivitiesContainer from '../containers/activitiesContainer';
import MaterialContainer from '../containers/materialsContainer';
import { NavigationNames, ScreenNames } from '../constatnts';
import LaborContainer from '../containers/laborContainer';
import BasicDetailsContainer from '../containers/basicDetailsContainer';
import PreviewQuotationAdvancedContainer from '../containers/previewQuotationAdvancedContainer';

const QuotationStack = createNativeStackNavigator()

const QuotationStackConfig = () => {
    return (
        <QuotationStack.Navigator>
            <QuotationStack.Screen name={NavigationNames.Quotation} component={QuotationContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.QuotationDetails} component={QuotationDetailsContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.PreviewQuotation} component={PreviewQuotationContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.AreaDetails} component={AreaDetailsContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.BasicDetails} component={BasicDetailsContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.Activities} component={ActivitiesContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.Materials} component={MaterialContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.Labor} component={LaborContainer}></QuotationStack.Screen>
            <QuotationStack.Screen name={NavigationNames.PreviewQuotationAdvanced} component={PreviewQuotationAdvancedContainer}></QuotationStack.Screen>

        </QuotationStack.Navigator>
    )
}

export default QuotationStackConfig;


