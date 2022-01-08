// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// interface Map {
//     type: string;
//     map: any;
// }

// const SET_MAP = "setMap";

// const setMap = (map: any): Map => {
//     return {
//         type: SET_MAP,
//         map,
//     };
// };

// const reducer = (
//     // eslint-disable-next-line default-param-last
//     state = {
//         map: null,
//     },
//     action: any
// ): any => {
//     switch (action.type) {
//         case SET_MAP:
//             return {
//                 map: action.map,
//             };

//         default:
//             return state;
//     }
// };

const kakaoMapSlice = createSlice({
    name: "kakaoMap",
    initialState: {
        map: null,
    },
    reducers: {
        setMap(state, action) {
            // eslint-disable-next-line no-param-reassign
            state.map = action.payload;
        },
    },
});

// const store = createStore(reducer);
const store = configureStore({
    reducer: {
        kakaoMap: kakaoMapSlice.reducer,
    },
});

// export const actionCreators = {
//     setMap,
// };

export const kakaoMapAction = kakaoMapSlice.actions;

export default store;
