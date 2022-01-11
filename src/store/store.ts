import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialKakaoMapState = {
    map: null,
};

const kakaoMapSlice = createSlice({
    name: "setKakaoMap",
    initialState: initialKakaoMapState,
    reducers: {
        setMap(state: { map: any }, action) {
            // eslint-disable-next-line no-param-reassign
            state.map = action.payload;
        },
    },
});

const initialPortalState = {
    portal: false,
};

const MarkerPortalSlice = createSlice({
    name: "MarkerPortal",
    initialState: initialPortalState,
    reducers: {
        MarkerPotalOpen(state) {
            // eslint-disable-next-line no-param-reassign
            state.portal = true;
        },
        MarkerPotalClose(state) {
            // eslint-disable-next-line no-param-reassign
            state.portal = false;
        },
    },
});

const initialMarkerDataState = {
    data: null,
};

const MarkerDataSlice = createSlice({
    name: "MarkerData",
    initialState: initialMarkerDataState,
    reducers: {
        MarkerData(state: { data: any }, action) {
            // eslint-disable-next-line no-param-reassign
            state.data = action.payload;
        },
    },
});

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
    reducer: {
        setKakaoMap: kakaoMapSlice.reducer,
        markerPortal: MarkerPortalSlice.reducer,
        markerData: MarkerDataSlice.reducer,
    },
});

export const kakaoMapAction = kakaoMapSlice.actions;
export const markerPortalAction = MarkerPortalSlice.actions;
export const markerDataAction = MarkerDataSlice.actions;

export default store;
