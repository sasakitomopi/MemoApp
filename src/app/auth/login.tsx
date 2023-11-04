import {Text, View , TextInput , StyleSheet, TouchableOpacity} from 'react-native'
import Button from '../../components/button'

import {Link, router} from 'expo-router'

const handlePress = (): void => {
    // Login
    router.replace('/memo/list')
}

const LogIn = () : JSX.Element => {
    return (
        <View>
            <View style = {styles.inner}>
                <Text style = {styles.title}>Log In</Text>
                <TextInput style = {styles.input} value='Email Address'></TextInput>
                <TextInput style = {styles.input} value='PassWord'></TextInput>
                <Button label='Submit' onPress={handlePress}></Button>
                <View style={styles.footer}>
                     <Text style={styles.footerText}>Not registered?</Text>
                     <Link href='/auth/signup' asChild>
                        <TouchableOpacity>
                          <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                     </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#F0F4F8'
    },
    title : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : 'bold',
        marginBottom : 16
    },
    inner : {
        paddingVertical : 27,
        paddingHorizontal : 24
    },
    input : {
        borderWidth : 1,
        borderColor : '#DDDDDD',
        backgroundColor : '#ffffff',
        height : 48,
        padding : 8,
        fontSize : 16,
        marginBottom : 16
    },
    footer :{
        flexDirection : 'row'
    },
    footerText : {
        fontSize : 14,
        lineHeight : 24,
        marginRight : 8,
        color : '#000000'
    },
    footerLink : {
        fontSize : 14,
        lineHeight : 24,
        color : '#467FD3'
    }
})

export default LogIn
