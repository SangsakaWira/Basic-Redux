import React from 'react';
import {Button,Container} from 'semantic-ui-react'
import {connect} from 'react-redux'

function Counter(props){
    console.log(props)
    return(
        <div>
            <Container>
                <h1>Counter App</h1>
                <p>{props.count}</p>
                <Button>Increment</Button>
                <Button>Decrement</Button>
            </Container>
        </div>
    )
}

function mapStatetoProps(state){
    console.log('mapStatetoprops',state)
    return{
        count: state.count
    }
}

export default connect(mapStatetoProps)(Counter)