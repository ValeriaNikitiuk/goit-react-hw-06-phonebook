
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './sliceContact'
import {filterReducer} from './filterSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const persistedContacts = persistReducer(contactsPersistConfig, contactsReducer);

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'] // виключаємо редуктор фільтра з persistConfig
// }

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
      filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);