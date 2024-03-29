import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        storedUsers: {}
    },
    reducers: {
        setStoredUsers: (state, action) => {
            const existingUsers = state.storedUsers;
            const newUsers = action.payload;
            const usersArray = Object.values(newUsers);
           
            for (let i = 0; i < usersArray.length; i++) {
                const userData = usersArray[i];
                existingUsers[userData.userId] = userData;
            }
            state.userData = existingUsers;
        }
    }
})

export const { setStoredUsers } = userSlice.actions;

export default userSlice.reducer;