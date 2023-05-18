import React from 'react';
import {View, TextInput} from 'react-native';
import { StyleSheet, Text, Image, Animated, ScrollView } from 'react-native';

function Homevisit(props) {
    return (
        <ScrollView>
              <View style={styles.Homevisitbox}>

                <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Home Visit</Text>
                
              </View>  



            <View style={styles.loginArea.inputArea}>
                        <Text>Name</Text>
                        <TextInput style={styles.imp} placeholder="Enter your name"></TextInput>
            </View>


             <View style={styles.loginArea.inputArea}>
                        <Text>Contact No</Text>
                        <TextInput style={styles.imp} inputMode='numeric' placeholder="Enter your Contact number"></TextInput>
             </View>


             <View style={styles.loginArea.inputArea}>
                        <Text>Age</Text>
                        <TextInput style={styles.imp} inputMode='numeric' placeholder="Enter your Age"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>Height</Text>
                        <TextInput style={styles.imp} inputMode='numeric' placeholder="Enter your Height"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>Weight</Text>
                        <TextInput style={styles.imp} inputMode='numeric' placeholder="Enter your weight"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>Address</Text>
                        <TextInput style={styles.imp} multiline={true} placeholder="Enter your Address"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>State</Text>
                        <TextInput style={styles.imp} placeholder="Enter your State"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>City</Text>
                        <TextInput style={styles.imp} placeholder="Enter your City"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>State</Text>
                        <TextInput style={styles.imp} placeholder="Enter your State"></TextInput>
             </View>

             <View style={styles.loginArea.inputArea}>
                        <Text>Pincode</Text>
                        <TextInput style={styles.imp} inputMode='numeric' placeholder="Enter your Pincode"></TextInput>
             </View>
             
             <View style={styles.loginArea.inputArea}>
                        <Text>Email</Text>
                        <TextInput style={styles.imp} inputMode='email' placeholder="Enter your E-mail"></TextInput>
             </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        imgDiv:{
            justifyContent: 'center', 
            alignItems: 'center', 
            
            flex: 0.5,
            // backgroundColor: "black",
        },
        img:{
            width: '100%',
            height: undefined,
            aspectRatio: 1.5,
        },
        loginArea:{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50, 
             
            Text:{
                fontSize: 20
            },
            Title:{
                paddingTop:20,
                fontSize:32
            },
            inputArea:{
                paddingTop:15,
                textAlignVertical: "left",
                textAlign: "left",
                paddingLeft: 30,
                paddingRight: 30,
            },
            button:{
                padding:20,
            }
        },
        center:{
            alignItems: 'center', 
        },
        imp:{
            borderColor: "gray",
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
        },
        button:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 15,
            elevation: 3,
            marginTop:20,
            marginLeft:30,
            marginRight:30,
            backgroundColor: '#7266D7',
        },
        text: {
            fontSize: 22,
            lineHeight: 21,
            letterSpacing: 0.25,
            color: 'white',
          },

        linkbutton: {
             width: 65,
             height: 48,
            aspectRatio: 1, 
        }  ,
        Homevisitbox:{
            backgroundColor: '#7266D7',
            width: 'auto',
             height: 70,
             marginTop:70,
             marginLeft:20,
            marginRight:20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        }
    }
)



export default Homevisit;