import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePropertiesArray} from '../ducks/reducer';
import axios from 'axios';

class Dash extends Component {

    componentDidMount(){
        axios.get('/api/properties')
        .then(res => {this.props.updatePropertiesArray(res.data) 
            console.log('res.data is now', res.data)})
        //updatePropertiesArray(res.data)
    }


    render(){
        const {propertiesArray} = this.props;
        console.log('The proptertiesArray is',propertiesArray);
        var displayedProperties = propertiesArray.map((property, index) => {
            return(
                <div>
                    <div>
                    <img src = {property.propimage}/>
                    </div>
                    <div>
                        <h3>{property.propname}</h3>
                        <p>{property.propdesc}</p>
                    </div>
                    <div>
                        <p>Loan:$ {property.loanamt}</p>
                        <p>Monthly Mortgage:${property.monthlymort}</p>
                        {/* <p>Recommended Rent: ${property.}</p>    I need to get this fixed maybe...*/}
                        <p>Desired Rent:${property.desiredrent}</p>
                        <p>Address:{property.propaddress}</p>
                        <p>City:{property.propcity}</p>
                        {/* <p>State:{property.propstate}</p> */}
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h1 id="dashTitle">This is the Dashboard!</h1>
                <p>It melted -but we still have the radio!</p>
                {/* {propertiesArray} map over the array and then display it in jsx */}
                {displayedProperties}

                <Link to="/enterValue"><button>Enter New Property</button></Link>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {propertiesArray} = state;

    return{
        propertiesArray
    };
}

export default connect(mapStateToProps, {updatePropertiesArray})(Dash)//Not super confident here