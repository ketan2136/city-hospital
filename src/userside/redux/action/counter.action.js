import * as ActionType from '../ActionType'

export const increment= () => (dispatche) => {
    dispatche({type: ActionType.INCREMENT_COUNTER})
}

export const decrement = () => (dispatche) => {
    dispatche({type: ActionType.DECREMENT_COUNTER})
}