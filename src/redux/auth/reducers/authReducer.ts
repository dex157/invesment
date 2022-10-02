import { IAuthState } from '../../../types/index'
import { EAuthActions } from '../actions/index'

const initialState: IAuthState = {
    formData: null,
}


export const authReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case EAuthActions.SET_FORM_DATA:
            return {
                ...state,
                formDate: action.payload
            }
        default:
            return state
    }

}