import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { deviceListSlice } from "./deviceListSlice";
import { appSlice } from "./appSlice";
import { Socket, WebsocketMiddleware } from "../service/websocket";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        deviceList: deviceListSlice.reducer
    },
    middleware: (getDefaultMiddleware) => [
        new WebsocketMiddleware(new Socket()),
        ...getDefaultMiddleware()
    ]
})