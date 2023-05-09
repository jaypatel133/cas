import React, { useState } from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-picker/picker";   

function Login({navigation}) {
    const [gender, setGender] = useState(new Date());
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
                    <ScrollView>
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

                    <View style={{flexDirection: "row",justifyContent: "space-evenly",marginTop: 10}}>
                        <View style={{marginLeft:0}}>
                                <View>
                                    <Text style={{width:145}}>Date of Birth</Text>
                                    <TextInput style={styles.imp} placeholder='dd/mm/yyyy' ></TextInput>
                                </View>
                        </View>
                        <View>
                            <Text>Gender</Text>
                            <View style={{borderColor: "gray",borderWidth: 1,borderRadius: 10,height:50}}>
                            <Picker
                                selectedValue={gender}
                                onValueChange={(value, index) => setGender(value)}
                                mode="dropdown" 
                                style={{marginTop:-13,width:140,marginLeft:5}}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                            </View>
                        </View>
                    </View>

                    

                    <View style={{marginTop:10,marginLeft:30,marginRight:30}}>
                        
                    </View>

                    <View style={{justifyContent: "space-evenly",marginTop: 10,marginLeft:30,marginRight:34}}>
                        <View>
                            <Text>Email</Text>
                            <TextInput style={styles.imp} placeholder='Email_id@gmail.com' ></TextInput>
                        </View>
                    </View>

                    <View style={{justifyContent: "space-evenly",marginTop: 10,marginLeft:30,marginRight:34}}>
                        <View>
                            <Text>Password</Text>
                            <TextInput style={styles.imp} placeholder='' ></TextInput>
                        </View>
                    </View>

                    <View style={{justifyContent: "space-evenly",marginTop: 10,marginLeft:30,marginRight:34}}>
                        <View>
                            <Text>Mobile No.</Text>
                            <TextInput style={styles.imp} placeholder='1234567890' ></TextInput>
                        </View>
                    </View>


                    <View style={styles.button}>
                        <Text style={styles.text}>Sign in</Text>
                    </View>
                    <View style={styles.center}><Text style={styles.SignUpArea.Text}>Or continue with</Text></View>
                    
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: 20,
                        marginBottom: 20
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
                    </ScrollView>  
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
            padding: 10,
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
        },
        picker: {
          marginVertical: 0,
          padding:0,
          width: 300,
        },  
    }
)

export default Login;