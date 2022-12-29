import React, { type PropsWithChildren  } from 'react';
import { View,  SafeAreaView } from 'react-native'
import Icons from '../assets/icons/Icons';
import BlueButtonWithIcon from '../components/buttons/blueButtonWithIcon';
import GrayButton from '../components/buttons/grayButton';
import { ButtonTitles, NavigationNames } from '../constatnts';

const QuotationBasicContainer: React.FC<
PropsWithChildren<{
    navigation: any;

}>
> = ({ children, navigation }) => {

    const createQuotationTapped = () => {
        navigation.navigate(NavigationNames.QuotationDetails)
    }

    const viewPastQuotationTapped = () => {
    }

    return (
        <SafeAreaView>
            <View>

                <BlueButtonWithIcon
                    title={ButtonTitles.CreateQuotation}
                    icon={Icons.PLUSCIRCLE}
                    buttonTapped={createQuotationTapped}
                    style={{}} />

                <GrayButton
                    title={ButtonTitles.ViewPastQuotation}          
                    buttonTapped={viewPastQuotationTapped}
                    style={{}} 
                    titleStyle={{}} />

            </View>

        </SafeAreaView>

    )
}

export default QuotationBasicContainer;
