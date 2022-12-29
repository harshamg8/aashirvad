import React, { type PropsWithChildren } from 'react';
import { View, Dimensions } from 'react-native';
import { Titles } from '../../constatnts';
import Colours from '../../theme/colours'
import GrayButton from '../buttons/grayButton';



const CancelSaveButtonHolder: React.FC<
    PropsWithChildren<{
        cancelButtonTapped: Function;
        saveButtonTapped: Function;
    }>
> = ({ children, cancelButtonTapped, saveButtonTapped }) => {

    return (
        <View>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', justifyContent: 'space-between', }}>
                <GrayButton
                    title={Titles.Cancel}
                    buttonTapped={() => {
                        cancelButtonTapped()
                    }}
                    style={{ width: (Dimensions.get('screen').width - 40) / 3 }}
                    titleStyle={{}} />
                <GrayButton
                    title={Titles.Save}
                    buttonTapped={() => {
                        saveButtonTapped()
                    }}
                    style={{ backgroundColor: Colours.BlueButton, width: (Dimensions.get('screen').width - 40) / 3 }}
                    titleStyle={{ color: Colours.White }} />
            </View>
            <View style={{ height: 1, marginBottom:10,backgroundColor: Colours.Underline }} />
        </View>
    )

}

export default CancelSaveButtonHolder
