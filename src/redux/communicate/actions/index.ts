
export enum ECommunicateActions {
    AUTH_PENDING = 'COMMUNICATE:PENDING',
    AUTH_SUCCESS = 'COMMUNICATE:SUCCESS',
    AUTH_ERROR = 'COMMUNICATE:ERROR',
    AUTH_RESET = 'COMMUNNICATE:RESET'
}

const authPending = (type: ECommunicateActions.AUTH_PENDING) => ({ type: ECommunicateActions.AUTH_PENDING })
const authSuccess = (type: ECommunicateActions.AUTH_SUCCESS) => ({ type: ECommunicateActions.AUTH_SUCCESS })
const authError = (type: ECommunicateActions.AUTH_ERROR) => ({ type: ECommunicateActions.AUTH_ERROR })
const authReset = (type: ECommunicateActions.AUTH_RESET) => ({ type: ECommunicateActions.AUTH_RESET })

export const authCommunicate = {
    authPending,
    authSuccess,
    authError,
    authReset
}