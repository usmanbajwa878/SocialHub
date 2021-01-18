import React, { useState } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import RowComponent from '../../UI/RowComponent';
import styles from './Inbox.styles';
import { SwipeListView } from 'react-native-swipe-list-view'
import HiddenDeleteBtn from '../../UI/HiddenDeleteBtn';


const Inbox = props => {

    const [listData, setListData] = useState(props.Data);

    const deleteRow = (rowMap, rowkey) => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowkey);
        newData.splice(prevIndex, 1);
        setListData(newData)
    }
    const onRightActionStatusChange = rowkey => {
        console.log('on right action status change', rowkey)
    }

    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75)
        const rowHeightAnimatedValue = new Animated.Value(80)
        return (
            <HiddenDeleteBtn
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onDelete={() => deleteRow(rowMap, data.item.id)}
            />
        )

    }

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(80)

        return (
            <RowComponent handleShowChat={()=>props.navigation.navigate('Chat')} key={data.item.id.toString()} removeRow={() => deleteRow(rowMap, data.item.id)} rowHeightAnimatedValue={rowHeightAnimatedValue}  item={data.item} />
        )
    }


    return (
        <SafeAreaView style={styles.screen}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                leftActivationValue={20}
                disableRightSwipe
                leftActionValue={0}
                rightActionValue={-450}
                rightActivationValue={-20}
                onRightActionStatusChange={onRightActionStatusChange}

            />
        </SafeAreaView>
    )
}

export default Inbox;