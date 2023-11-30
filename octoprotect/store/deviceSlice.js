import { createSlice } from "@reduxjs/toolkit";
import { accelAction, connStateAction, disarmAction, movementTriggerAction, nexusStateAction } from "../service/websocket";

export const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    device: null,
    nexusState: null,
    acceleration: {}
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
      .addCase(accelAction, (state, {payload}) => {
        state.acceleration[payload.titanID] = payload.magnitude
      })
  }
})
