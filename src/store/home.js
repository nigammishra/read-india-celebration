import { createSlice } from "@reduxjs/toolkit";
import { ricApi } from './axios';

//show the loader
var userDetails = localStorage.getItem("userDetails");
var data = JSON.parse(userDetails);
var user_id = data?.ID;

const initialHomeState = {
    contact_submit: [],
    loaderStatus: false
}

const homeSlice = createSlice({
    name: 'home',
    initialState: initialHomeState,
    reducers: {
        ContactSuccessSubmit(state, action) {
            state.contact_submit = action.payload;
            state.loaderStatus = false;
        },
        updateLoaderStatus(state, action) {
            state.loaderStatus = action.payload;
        }
    }
})

export const homeActions = homeSlice.actions;

export const saveContact = (formData) => {
    return async (dispatch) => {
        dispatch(homeActions.updateLoaderStatus(true));
        try {
            // Send email
            const response = await ricApi.post('/save-contact', formData);
            if (response.data.status === 'success') {
                dispatch(homeActions.ContactSuccessSubmit(response.data.msg));
            } else {
                dispatch(homeActions.updateLoaderStatus(false));
            }
        } catch (e) {
            console.error(e);
            dispatch(homeActions.updateLoaderStatus(false));
        }
    }
}

export default homeSlice.reducer;
