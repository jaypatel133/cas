import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function Login({navigation}) {
    return (
       <LinearGradient
       colors={['rgba(25,25,25,1)','rgba(152,13,237,1)']}
        style={{
            flex: 1,
        }}>
                 <View style={styles.imgDiv}>

                    <Image source={require('../assets/image1.png')} style={styles.img}/>  

                </View>    
                <View
                style={styles.SignUpArea}>
                    <View style={[styles.center]}>
                        <Text style={styles.SignUpArea.Title}>SIGN UP</Text>
                    </View>

                    <View style={{flexDirection: "row",justifyContent: "space-evenly",marginTop: 10}}>
                        <View style={{marginLeft:-70}}>
                            <Text>First Name</Text>
                            <TextInput style={styles.impSm} placeholder='First name' ></TextInput>
                        </View>
                        <View>
                            <Text>Last Name</Text>
                            <TextInput style={styles.impSm} placeholder='Last name'></TextInput>
                        </View>
                    </View>

                </View>    
       </LinearGradient>
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
        SignUpArea:{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50, 
             
            Text:{
                fontSize: 20
            },
            Title:{
                paddingTop:20,
                fontSize:32,
                fontWeight: 'bold',
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
        impSm:{
            borderColor: "gray",
            width: "180%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
        },
        imp:{
            borderColor: "gray",
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
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
        }  
    }
)

export default Login;