import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './OpenFile.styles';


const OpenFile = props => {

    console.log("DOC", props)

    const url = props.url;
    const type = props.type;
    const name = props.name;
    const close = props.close;
    const [path, setPath] = useState('');
    const [loading,setLoading] = useState(false);


    const openFile = async () => {
        setLoading(true)
        const localFile = `${RNFS.DocumentDirectoryPath}/${name}`;
        const options = {
            fromUrl: url,
            toFile: localFile
        };
       

        RNFS.downloadFile(options).promise
        // .then(() => setPath(localFile))
             .then(
                 setLoading(false),
                 () => FileViewer.open(localFile)
                 )
            .then(() => {
                console.log('filePath',localFile)
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        openFile()
    }, [path])


    return (
        <View>
            <TouchableOpacity style={styles.closeBtn} onPress={() => close()} >
                <Text>Close</Text>
            </TouchableOpacity>
            {/* <View style={styles.docContainer}>
                {
                    FileViewer.open(path)
                }
            </View> */}
        </View>
    )



}

export default OpenFile;