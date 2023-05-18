import React from 'react';
import {StyleSheet, View ,Text} from 'react-native';

function HomePage(props) {
    return (
        <View>
            <View>
                <Text style={styles.TopBar}>Name Of User</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        TopBar:{
            paddingTop:25,
        }
    }
)

export default HomePage;