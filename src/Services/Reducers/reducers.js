import { Satellite } from "@material-ui/icons"
import { Add_To_Cart, Remove_To_Cart } from "../Constants"
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case Add_To_Cart:
            console.warn('reducer', action)
            return [
                ...state,
                { cardData: action.payload }

            ]
        case Remove_To_Cart:
            console.warn('reducer', action)
            state.pop();
            return [
                ...state,


            ]

        default:
            return state
    }
}