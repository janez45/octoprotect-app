import { createSlice } from "@reduxjs/toolkit";
import { pairSuccessAction, pairAction } from "../service/websocket";

export const devicePairSlice = createSlice({
  name: "devicePair",
  initialState: {
    nexusMac: "",
    pairSecret: "",
    pairSuccess: false,
  },
  reducers: {
    qrCodeScanned: (state, { payload }) => {
      state.nexusMac = payload.macAddress;
      state.pairSecret = payload.pairSecret;
    },
    resetPairSuccess: (state, { payload }) => {
      state.pairSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pairSuccessAction, (state, data) => {
      state.pairSuccess = true;
    });
  },
});
