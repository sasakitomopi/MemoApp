import {Text, View , TextInput , StyleSheet, TouchableOpacity} from 'react-native'
import Button from '../../components/button'

import { Link , router} from 'expo-router'
import {useState} from 'react'

const handlePress = (): void => {
    // regist
    router.replace('/memo/list')
}
const SignUp = () : JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    return (
        <View>
            <View style = {styles.inner}>
                <Text style = {styles.title}>Sign Up</Text>
                <TextInput 
                    style = {styles.input}
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'>
                </TextInput>
                <TextInput 
                    style = {styles.input} 
                    value={password}
                    onChangeText={(text) => {setPassWord(text)}}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder='PassWord'
                    textContentType='password'>
                </TextInput>
                <Button label='Submit' onPress={handlePress}></Button>
                <View style={styles.footer}>
                     <Text style={styles.footerText}>Already registerd?</Text>
                     <Link href='/auth/login' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In.</Text>
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

export default SignUp
