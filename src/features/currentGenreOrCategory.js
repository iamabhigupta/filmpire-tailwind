import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenereOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenereOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
