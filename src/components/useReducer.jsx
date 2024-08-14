import { useReducer } from 'react';

function UseReducerExample() {
    const initialState = {
        showTextFlag : true,
        changeTextFlag : false
    }
    const HIDE_TEXT = 'HIDE_TEXT'
    const SHOW_TEXT = 'SHOW_TEXT'
    const CHANGE_TEXT = 'CHANGE_TEXT'
    
    function reducer(state, action){
        switch (action.type) {
            case HIDE_TEXT:
                return {
                    ...state,
                    showTextFlag : false
                }
            case SHOW_TEXT:
                return {
                    ...state,
                    showTextFlag : true
                }
            case CHANGE_TEXT:
                return {
                    ...state,
                    changeTextFlag : !state.changeTextFlag
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);
    
    return (
    <div>
        {state?.showTextFlag ? <h3>Use Reducer Hook Example</h3> : <h3></h3>}
        <button onClick={()=> dispatch({type: HIDE_TEXT})}>Hide Text</button>
        <button onClick={()=> dispatch({type: SHOW_TEXT})}>Show Text</button>
        <button onClick={()=> dispatch({type: CHANGE_TEXT})}> Change Text Style</button>
    </div>)
    
}
export default UseReducerExample