import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
    num: 0,
    text: localStorage.getItem('text') || 'Hello World',
}

export const incrementNum = createAction('INCREMENT_NUM');
export const decrementNum = createAction('DECREMENT_NUM');
export const resetNum = createAction('RESET_NUM');
export const setText = createAction('SET_TEXT');
export const incrementNumByFive = createAction('INCREMENT_NUM_BY_FIVE');
export const decrementNumByFive = createAction('DECREMENT_NUM_BY_FIVE');

export default createReducer(initialState, (builder) => {
    builder
    .addCase(incrementNum, (state, action) => {
        if (state.num < 20) {
            state.num = state.num + 1
        } else {
            state.num = 20
        }
    })
    .addCase(decrementNum, (state, action) => {
        if (state.num > 0) {
            state.num = state.num - 1
        } else {
            state.num = 0
        }
    })
    .addCase(resetNum, (state, action) => {
        state.num = 0
    })
    .addCase(setText, (state, action) => {
        state.text = action.payload
    })
    .addCase(incrementNumByFive, (state, action) => {
        if (state.num <= 15) {
            state.num = state.num + 5
        } else {
            state.num = 20
        }
    })
    .addCase(decrementNumByFive, (state, action) => {
        if (state.num >= 5) {
            state.num = state.num - 5
        } else {
            state.num = 0
        }
    })
});
