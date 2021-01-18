import {
    UPLOAD_MEDIA,
    NEW_POST,
    GET_ALL_POSTS,
    DELETE_POST,
    POST_COMMENT,
    POST_LIKE,


} from '../Actions/Post';

const initialState = {
    posts: [],
    uploaded_media: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_MEDIA:
            return {
                ...state,
                uploaded_media: action.mediaUrl
            }
        case NEW_POST:
            return state;
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.post
            };
        case POST_COMMENT:
            return state;
        case POST_LIKE:
            return state;
        default:
            return state;
    }
} 