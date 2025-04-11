import { configureStore } from '@reduxjs/toolkit';
import { batchSlice, fileReducer } from './batchSlice';
import historyPanelReducer from './historyPanelSlice';
import modernizationReducer from './modernizationSlice';

export const store = configureStore({
    reducer: {
        batch: batchSlice.reducer,
        fileUpload: fileReducer,
        historyPanel: historyPanelReducer,
        modernizationReducer: modernizationReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
