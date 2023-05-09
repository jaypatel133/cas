import React from 'react';
import { Button, TextInput, View, Pressable  } from 'react-native';
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
                style={styles.loginArea}>
                    <View style={styles.center}>
                    <Text style={[styles.loginArea.Text,styles.loginArea.Title]}>Hello</Text>
                    <Text style={styles.loginArea.Text}>Ready to log in? Let's get started!</Text>
                    </View>
                    <View style={styles.loginArea.inputArea}>
                        <Text>Username</Text>
                        <TextInput style={styles.imp} placeholder="Enter your Username"></TextInput>
                    </View>
                    <View style={styles.loginArea.inputArea}>
                        <Text>Password</Text>
                        <TextInput style={styles.imp} placeholder="Enter your Password"></TextInput>
                        <Text style={{textAlign: "right"}}>Forgot Password?</Text>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.text}>Sign in</Text>
                    </View>
                    <View style={styles.center}><Text style={styles.loginArea.Text}>Or continue with</Text></View>
                    
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: 20
                    }}>
                        
                    <LinearGradient
                        colors={['rgba(25,25,25,0.5)','rgba(255,255,255,1)']}
                        start={{x: -1.5, y: 0}}
                        end={{x: 1, y: 1}}
                        style={{height: 52,width: 70,paddingLeft: 10,borderRadius:8}}><Image source={require('../assets/googlebutton.png')} style={styles.linkbutton}/></LinearGradient>  
                    <LinearGradient
                        colors={['rgba(25,25,25,0.5)','rgba(255,255,255,1)']}
                        start={{x: -1.5, y: 0}}
                        end={{x: 1, y: 1}}
                        style={{height: 52,width: 70,paddingLeft: 10,borderRadius:8}}><Image source={require('../assets/applebutton.png')} style={styles.linkbutton}/></LinearGradient> 
                    <LinearGradient
                        colors={['rgba(25,25,25,0.5)','rgba(255,255,255,1)']}
                        start={{x: -1.5, y: 0}}
                        end={{x: 1, y: 1}}
                        style={{height: 52,width: 70,paddingLeft: 10,borderRadius:8}}><Image source={require('../assets/facebookbutton.png')} style={styles.linkbutton}/></LinearGradient>  

                    </View>
                    {/* <Image source={require('../assets/googlebutton.png')} style={styles.linkbutton}/> */}





                    <Pressable  style={styles.button} onPress={()=>{
                         navigation.navigate('Homevisit')
                    }}>
                        <Text  style={styles.text}>Sign up</Text>
                    </Pressable>
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
        }  
    }
)

export default Login;