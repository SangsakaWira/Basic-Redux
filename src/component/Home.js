import React from 'react';
import {Button,Container} from 'semantic-ui-react'

function Home(props){
    return(
        <div>
            <Container>
                <h1>Home App</h1>
                
            </Container>
        </div>
    )
}

// function mapStatetoProps(state){
//     return{
//         count: state.count
//     }
// }

// function mapDispatchtoProps(dispatch){
//     return{
//         onIncrementClick:()=>{
//             const action = {type:"INCREMENT"};
//             dispatch(action)
//         },
//         onDecrementClick:()=>{
//             const action = {type:"DECREMENT"};
//             dispatch(action)
//         }
//     }
// }

export default Home