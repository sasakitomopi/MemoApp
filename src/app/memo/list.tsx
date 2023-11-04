import {View , StyleSheet} from 'react-native'
import  MemoListItem from '../../components/memoListItem'
import  CircleBotton from '../../components/circleButton';
import Icon from '../../components/icon'
import { useEffect } from 'react';
import { router, useNavigation } from 'expo-router';
import LogOutButton from '../../components/logoutButton';

const handlePress = ():void =>{
    router.push('/memo/create');
}
const List = () : JSX.Element => {
    const navigation = useNavigation()
    useEffect (() => {
        navigation.setOptions({
            headerRight: () => {
                return <LogOutButton />
            }
        })
    }, [])
    return (
        <View style = {styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleBotton onPress={handlePress}>
                <Icon name='plus' size={40} color='#ffffff'/>
            </CircleBotton>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff'
    },
});

export default List