import {Text, View , TextInput ,  Alert , StyleSheet, TouchableOpacity} from 'react-native'
import Button from '../../components/button'

import {Link, router} from 'expo-router'
import {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../config'

const handlePress = (email : string, password : string): void => {
    // Login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            router.replace('/memo/list')
        })
        .catch((error) =>{
            const {code, message} = error
            console.log(code, message)
            Alert.alert(message)
        })
}

const LogIn = () : JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    return (
        <View>
            <View style = {styles.inner}>
                <Text style = {styles.title}>Log In</Text>
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
                <Button label='Submit' onPress={()=> {handlePress(email,password)}}></Button>
                <View style={styles.footer}>
                     <Text style={styles.footerText}>Not registered?</Text>
                     <Link href='/auth/signup' asChild replace>
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
