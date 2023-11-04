import {Text, View , TextInput , StyleSheet} from 'react-native'
import Header from '../../components/header'
import Button from '../../components/button'

const SignUp = () : JSX.Element => {
    return (
        <View>
            <Header/>
            <View style = {styles.inner}>
                <Text style = {styles.title}>Sign Up</Text>
                <TextInput style = {styles.input} value='Email Address'></TextInput>
                <TextInput style = {styles.input} value='PassWord'></TextInput>
                <Button label='Submit'></Button>
                <View style={styles.footer}>
                     <Text style={styles.footerText}>Already registerd?</Text>
                     <Text style={styles.footerLink}>Log In.</Text>
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
