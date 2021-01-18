import {
    GET_NOTIFICATIONS
} from '../Actions/Notifications';

const initialState = {
    notifications: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications
            }
        default:
            return state;
    }
} 