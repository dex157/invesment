interface IAuthState {
    formData: IAuthData | null
}

interface IAuthData {
    name: string,
    phone: string
}

export type { IAuthState, IAuthData }