import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';



export const generateRandomId = () => {
    return Math.floor(Math.random() * Date.now());
}
undefined
export const openFile = async (url, name) => {
    const localFile = `${RNFS.DocumentDirectoryPath}/${name}.docx`;
    const options = {
        fromUrl: url,
        toFile: localFile
    };
    try {
        await RNFS.downloadFile(options);
        await FileViewer.open(localFile)
    } catch (error) {
            console.log(error)
    }
}