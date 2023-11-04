import {View , Text, StyleSheet} from 'react-native'
import  Header  from '../components/header';
import  MemoListItem from '../components/memoListItem'
import  CircleBotton from '../components/circleButton';
const Index = () : JSX.Element => {
    return (
        <View style = {styles.container}>
            <Header/>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleBotton>+</CircleBotton>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff'
    },
});

export default Index