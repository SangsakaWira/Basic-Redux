import React from 'react';
import {Button,Container} from 'semantic-ui-react'
import {connect} from 'react-redux'

function Counter(props){
    return(
        <div>
            <Container>
                <h1>Counter App</h1>
                <h4>{props.count}</h4>
                <Button onClick={props.onIncrementClick}>Increment</Button>
                <Button onClick={props.onDecrementClick}>Decrement</Button>
            </Container>
        </div>
    )
}

function mapStatetoProps(state){
    return{
        count: state.count
    }
}

function mapDispatchtoProps(dispatch){
    return{
        onIncrementClick:()=>{
            const action = {type:"INCREMENT"};
            dispatch(action)
        },
        onDecrementClick:()=>{
            const action = {type:"DECREMENT"};
            dispatch(action)
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter)