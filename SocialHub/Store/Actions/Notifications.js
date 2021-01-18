export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
import firestore from '@react-native-firebase/firestore';
import { MESSAGES, COLLECTIONS, ERROR_CODES } from '../../Constants/AppConstants';
import Notification from '../../Modals/NotificationModal';




export const getNotifications = () => {
    let notificationData = [];
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        const querySnapShot = await firestore().collection(COLLECTIONS.NOTIFICATIONS).doc(`${user.userId}`).get();
        let data = await querySnapShot.data().notifications;
        for (let i = 0; i < data.length; i++) {
                 notificationData.push(
                new Notification(
                 data[i].notificationId,
                 data[i].postId,
                 data[i].text,
                 data[i].time,
                 data[i].user
                )
            )
        }
        dispatch({ type: GET_NOTIFICATIONS, notifications: notificationData })
    }
}
