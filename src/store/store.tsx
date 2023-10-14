import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from './slices/departmentsSlice'
import filtersReducer from './slices/filtersSlice'
import servicesReducer from './slices/servicesSlice'

export const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    filters: filtersReducer,
    services: servicesReducer
  },
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch