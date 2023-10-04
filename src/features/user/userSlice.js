import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setCurrentUser: (state, action) => {
        // Updating the state with the new currentUser
        return { ...state, currentUser: action.payload }
      }
    }
  });

  export const userReducer = userSlice.reducer;

    export const { setCurrentUser } = userSlice.actions;

    export const selectCurrentUser = (state) => state.user.currentUser;