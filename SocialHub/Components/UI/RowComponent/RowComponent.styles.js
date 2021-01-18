import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: 80,
      
    },
    rowFront: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        height:'100%',
        
    },
    imageContainer: {
        height: 40,
        width: '10%',
        marginVertical: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    textContainer: {
        width: '82%',
        marginVertical: 10,
        marginLeft: 4,
        marginRight: 15,
        height: '80%'
    },
    rowFrontVisible: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15
    },
 
})

export default styles;