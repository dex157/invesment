import { ICommunicateState } from '../../../types'
import { ECommunicateActions } from '../actions/index'

const initialState: ICommunicateState = {
    authCommunicate: ECommunicateActions.AUTH_PENDING
}

export const communicateReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case ECommunicateActions.AUTH_PENDING:
            return {
                ...state,
                authCommunicate: ECommunicateActions.AUTH_PENDING
            }
        case ECommunicateActions.AUTH_SUCCESS:
            return {
                ...state,
                authCommunicate: ECommunicateActions.AUTH_SUCCESS
            }


        case ECommunicateActions.AUTH_ERROR:
            return {
                ...state,
                authCommunicate: ECommunicateActions.AUTH_ERROR
            }


        case ECommunicateActions.AUTH_RESET:
            return {
                ...state,
                authCommunicate: ECommunicateActions.AUTH_RESET
            }

        default: return state
    }
}