import React, {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Animated     } from 'react-native';

function WelcomeScreen({navigation}) {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);

    useEffect(()=> {
      setTimeout(function(){
        navigation.navigate('Homepage')
   
      }, 4000);
    },[]) 

    return (

        <Animated.View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', opacity: fadeAnim}}>

           <Image source={require('../assets/logo.png')}/>  
        
        </Animated.View>
            
        
    );
}

export default WelcomeScreen;