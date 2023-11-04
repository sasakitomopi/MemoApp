import {View , StyleSheet} from 'react-native'
import  Header  from '../../components/header';
import  MemoListItem from '../../components/memoListItem'
import  CircleBotton from '../../components/circleButton';
import Icon from '../../components/icon'

const List = () : JSX.Element => {
    return (
        <View style = {styles.container}>
            <Header/>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleBotton>
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