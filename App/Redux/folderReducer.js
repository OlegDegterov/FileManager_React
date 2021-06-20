import {API} from "../API/api";

const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA";

/*let equal = (a, b) => {
    for (key in a) {
        if (a[key] !== b[key]) return false
    }
    for (key in b) {
        if (b[key] !== a[key]) return false
    }
    return true;
}*/

let initialState = {
    data: [],
    children: []
};

const ReducerF = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {...state, data: action.data}
        }
        case SET_DATA: {

            return {
            ...state, children: [...state.children, action.data]
            /*let index = state.children.findIndex(id => id.id === action.id);*/
            ///===> Условие начало

                /*...state,
                children: [...state.children, action.data]*/
                /*...state, children: [...state.children.filter((obj) => {if (state.children) {Object.values(obj)[0] === action.data.children[0].id}}), action.data]*/

                /*children: action.data
                    ? {
                        ...state, children: [...state.children.filter((obj) => {
                            Object.keys(obj)[children.id] !== action.data.children.id
                        }), action.data]
                    }
                    : {...state, children: [...state.children, action.data]}*/
            }
        }
        ///=== Условие конец
        /*return {...state, data:action.data}*/
        /*!!!!!return {...state, ...action.data}*/
        /* return {...state.data.children[0].children, children:action.data.children}*/
        /*return {...state, children: action.data}*/
        /*return {
            ...state,
            children: [...state.children, action.data]
        }
    }*/
        /*Posts: [...state.Posts, newPost],*/
        /*...state.data, data:*/
        default:
            return state;
    }
}

export const getData = (data) => ({type: GET_DATA, data});
export const getDataId = (data) => ({type: SET_DATA, data});

export const getDataThunkCreator = () => {
    return (dispatch) => {
        API.getData().then(data => {
            dispatch(getData(data))
        })
    }
}
export const getDataIdThunkCreator = (id) => {
    return (dispatch) => {
        API.getDataId(id).then(data => {
            dispatch(getDataId(data, id))
        })
    }
}
export default ReducerF;


