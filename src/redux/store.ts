import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducers } from './rootReducer';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas'

const saga = createSagaMiddleware()

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(saga)))

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
