import React, {  type PropsWithChildren } from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import GridComponent from '../components/quotation/gridComponent';
import QuotationLib from '../components/quotation/quotationLibItem';
import {  NavigationNames, Titles } from '../constatnts';
import Colours from '../theme/colours';
import Icons from '../assets/icons/Icons'




const QuotationAdvancedContainer: React.FC<
PropsWithChildren<{
    navigation: any;

}>
> = ({ children, navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Quotations</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <GridComponent
            title={Titles.Saved}
            image={Icons.SAVED}
            marginRight={6}
            onClick={function (): void {
              console.log('Clicked');
            }}
          />
          <GridComponent
            title={Titles.Draft}
            marginRight={6}
            image={Icons.DRAFT}
            onClick={function (): void {
              console.log('Clicked');
            }}
          />
          <GridComponent
            title={Titles.Sent}
            image={Icons.SENT}
            onClick={function (): void {
              console.log('Clicked');
            }}
          />
        </View>
        <Text style={styles.title}>Quotation Library</Text>
        <View style={{flex: 1}}>
          <QuotationLib
            onClick={function (): void {
              console.log('Clicked');
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationNames.QuotationDetails)}
          style={styles.button}>
          <Image style={styles.logo} source={Icons.PLUS} />
          <Text style={{color:Colours.Black}}>Create Quotation</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default QuotationAdvancedContainer;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
    },
    title: {
      marginTop: 15,
      marginBottom: 10,
      color:Colours.Black
    },
    logo: {
      width: 20,
      height: 20,
      marginRight: 12,
    },
    button: {
      marginVertical: 30,
      backgroundColor: Colours.Underline,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      flexDirection: 'row',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: 'grey',
      borderRadius: 6,
    },
  });