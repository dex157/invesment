import { EAuthActions } from "../../redux/auth/actions"
import { ECommunicateActions } from "../../redux/communicate/actions"

interface ICommunicateState {
    authCommunicate: TAuthCommunicate
}

type TAuthCommunicate = ECommunicateActions.AUTH_PENDING | ECommunicateActions.AUTH_SUCCESS | ECommunicateActions.AUTH_ERROR | ECommunicateActions.AUTH_RESET



export type { ICommunicateState }