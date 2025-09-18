import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  userName: 'Nguyễn Văn Nam',
  gender: 'Nam',
  dateBirth: '20/03/2023',
  address: 'Thanh Xuân, Hà Nội',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    updateUser(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
