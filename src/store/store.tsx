import thunk from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'
import departmentsReducer from './slices/departmentsSlice'

export const store = configureStore({
  reducer: {
    departments: departmentsReducer
  },
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch