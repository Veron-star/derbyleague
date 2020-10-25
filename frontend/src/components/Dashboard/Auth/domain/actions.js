import { createAsyncThunk } from '@reduxjs/toolkit';
import events from "./events";

export const logIn = createAsyncThunk(
    'api/LOG_IN',
    async ({username, password}) => {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        const responseJson = await response.json();
        const { token, userId } = responseJson;
        return { token, userId }; 
    }
)

export const signUp = createAsyncThunk(
    "app-domain/SIGN_UP",
    async ({username, password}) => {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        const responseJson = await response.json();
        const { token, userId } = responseJson;
        return { token, userId }; 
    }
)

export const logOut = () => (dispatch) => {
    dispatch(events.loggedOut());
}

const actions = {
    logIn,
    signUp,
    logOut
}

export default actions;