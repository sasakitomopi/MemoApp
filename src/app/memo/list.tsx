import {View , StyleSheet, FlatList} from 'react-native'
import  MemoListItem from '../../components/memoListItem'
import  CircleBotton from '../../components/circleButton';
import Icon from '../../components/icon'
import {useEffect , useState} from 'react';
import {collection , onSnapshot , query , orderBy} from 'firebase/firestore'
import { router, useNavigation } from 'expo-router';
import LogOutButton from '../../components/logoutButton';
import {db, auth} from '../../config'
import { type Memo } from '../../../types/memo';

const handlePress = ():void =>{
    router.push('/memo/create');
}
const List = () : JSX.Element => {
    const [memos , setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect (() => {
        navigation.setOptions({
            headerRight: () => {
                return <LogOutButton />
            }
        })
    }, [])
    useEffect(()=>{
        if (auth.currentUser === null){
            return
        }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        const unsubscribte = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc)=>{
                const {bodyText, updatedAt} = doc.data()
                remoteMemos.push({
                    id : doc.id,
                    bodyText : bodyText,
                    updatedAt : updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribte
    },[])
    return (
        <View style = {styles.container}>
            <FlatList 
             data = {memos}
             renderItem={({item})=> {return <MemoListItem memo= {item} />}}
            />
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