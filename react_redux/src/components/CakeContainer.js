import React from 'react'
import { connect } from 'react-redux';

import { buyCake } from './redux/cake/cakeActions';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes- {props.num_of_cakes}</h2>
            <button type="button" onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        num_of_cakes: state.num_of_cakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
} 
export default connect( mapStateToProps, mapDispatchToProps )(CakeContainer)