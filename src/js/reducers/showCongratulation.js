import {SHOW_CONGRATULATION} from '../actions/ActionTypes'

export default function showCongratulation(state = false, action) {
    switch (action.type) {
        case SHOW_CONGRATULATION:
            return true;
        default:
            return false
    }
}