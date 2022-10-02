import { IAuthData } from "../../../types"

export enum EAuthActions {
    REGISTER = 'AUTH:REGISTER',
    SET_FORM_DATA = 'AUTH:SET_FORM_DATA',
    LOGIN = 'AUTH:LOGIN'
}

const register = (type: EAuthActions.REGISTER) => {
    return { type: EAuthActions.REGISTER }
}

const setFormData = (type: EAuthActions.SET_FORM_DATA, payload: IAuthData) => {
    return { type: EAuthActions.SET_FORM_DATA, payload: payload }
}

const login = (type: EAuthActions.LOGIN) => ({ type: type })


export const authActions = {
    register,
    setFormData,
    login
}