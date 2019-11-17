import {createStore} from 'redux'

const initialState = {
    count:10,
    nama:"Sangsaka Wira",
    umur:23
}

const reducer = (state = initialState,action)=>{
    console.log('reducer berjalan')
    return state
}

const store = createStore(reducer)

export default store;