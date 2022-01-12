import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: '',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      console.log('theme ->', state.theme);

      if (state.theme === 'dark-theme') {
        state.theme = 'default-theme';
      } else if (state.theme === 'default-theme') {
        state.theme = 'dark-theme';
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
