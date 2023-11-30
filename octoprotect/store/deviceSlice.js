import { createSlice } from "@reduxjs/toolkit";
import { connStateAction, disarmAction, movementTriggerAction, nexusStateAction } from "../service/websocket";

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    device: null,
    nexusState: null,
  },
  reducers: {
    setCurrentDevice: (state, {payload}) => {
      state.device = payload.device;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(nexusStateAction, (state, {payload}) => {
        state.nexusState = payload
      })
      .addCase(movementTriggerAction, (state, {payload}) => {
        state.nexusState.isTriggered = true
      })
      .addCase(connStateAction, (state, {payload}) => {
        const titan = state.nexusState.titan.find(titan => titan.id === payload.titanID)
        console.log(state, payload, titan)
        if (!titan) return
        titan.isWorking = payload.isConnected
      })
  }
})
