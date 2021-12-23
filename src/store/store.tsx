import { createStore } from "redux";

interface Map {
    type: string;
    map: any;
}

const SET_MAP = "setMap";

const setMap = (map: any): Map => {
    return {
        type: SET_MAP,
        map,
    };
};

const reducer = (
    // eslint-disable-next-line default-param-last
    state = {
        map: null,
    },
    action: any
): any => {
    switch (action.type) {
        case SET_MAP:
            return {
                map: action.map,
            };

        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    setMap,
};

export default store;
