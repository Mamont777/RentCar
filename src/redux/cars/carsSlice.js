import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCars } from './carsThunk';

const customArrThunks = [getAllCars];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    filter: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setToFavorites: (state, { payload }) => {
      const addCar = state.items.find(car => car.id === payload.id);
      if (addCar) {
        state.favorites.push(addCar);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const index = state.favorites.findIndex(car => car.id === payload.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = null;
    },
  },
  extraReducers: builder => {
    const { pending, rejected } = status;

    builder
      .addCase(getAllCars.fulfilled, handleFulfilled)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const { setToFavorites, removeFromFavorites, setFilter, resetFilter } =
  carSlice.actions;
export const carsReducer = carSlice.reducer;
