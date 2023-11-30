import { createSlice } from "@reduxjs/toolkit";
import { movementTriggerAction} from "../service/websocket";
import { deviceListAction, pairSuccessAction } from "../service/websocket";

export const deviceListSlice = createSlice({
  name: "deviceList",
  initialState: {
    devices: [],
    showAlert: false,
    pairSuccess: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deviceListAction, (state, data) => {
        state.devices = data.payload.data;
      })
      .addCase(movementTriggerAction, (state) => {
        state.showAlert = true;
      });
  },
})
export const { showAlert} = deviceListSlice.actions;