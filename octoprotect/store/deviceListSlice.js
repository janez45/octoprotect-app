import { createSlice } from "@reduxjs/toolkit";
import { deviceListAction } from "../service/websocket";


export const deviceListSlice = createSlice({
  name: 'deviceList',
  initialState: {
    devices: []
  },
  extraReducers: (builder) => {
    builder.addCase(deviceListAction, (state, data) => {
      state.devices = data.payload.data
    })
  },
})