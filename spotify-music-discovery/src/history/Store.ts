// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
      valorCompartilhado: null,
};

const appSlice = createSlice({
      name: 'app',
      initialState,
      reducers: {
            setValorCompartilhado: (state, action) => {
                  state.valorCompartilhado = action.payload;
            },
      },
});

const store = configureStore({
      reducer: appSlice.reducer,
});

export const { setValorCompartilhado } = appSlice.actions;
export default store;
