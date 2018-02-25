import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//Import things from reducer here(lots)
import {
    updatePendingPropName, 
    updatePendingPropDesc,
    updatePendingPropAddress,
    updatePendingPropCity,
    updatePendingPropState,
    updatePendingPropZip,
    updatePendingPropURL,
    updatePendingPropLoanAmt,
    updatePendingPropMonthMortg,
    updatePendingPropDesiredRent,
    updatePropertiesArray


} from '../ducks/reducer'

class Entry extends Component {
    render(){
        //destructure all the functions... OMG...
        const {updatePendingPropName,
            updatePendingPropDesc,
            updatePendingPropAddress,
            updatePendingPropCity,
            updatePendingPropState,
            updatePendingPropZip,
            updatePendingPropURL,
            updatePendingPropLoanAmt,
            updatePendingPropMonthMortg,
            updatePendingPropDesiredRent,
            updatePropertiesArray
        } = this.props;

        return(
            <div>
                <h1>Enter New Property Values Below</h1>
                    <div>
                        <p></p>
                        <input placeholder="Property Name" onChange={(e) => updatePendingPropName(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="Description" onChange={(e) => updatePendingPropDesc(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="Address" onChange={(e) => updatePendingPropAddress(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="City" onChange={(e) => updatePendingPropCity(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="State" onChange={(e) => updatePendingPropState(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="ZIP" onChange={(e) => updatePendingPropZip(e.target.value)}/>
                    </div>

                    <div>
                        <p></p>
                        <input placeholder="Image URL" onChange={(e) => updatePendingPropURL(e.target.value)}/>
                    </div>

                    <div>
                        <p>Loan Amount</p>
                        <input placeholder="0.00" onChange={(e) => updatePendingPropLoanAmt(e.target.value)}/>
                    </div>

                    <div>
                        <p>Monthly Mortgage</p>
                        <input placeholder="0.00" onChange={(e) => updatePendingPropMonthMortg(e.target.value)}/>
                    </div>

                    <div>
                        <p>Desired Rent</p>
                        <input placeholder="0.00" onChange={(e) => updatePendingPropDesiredRent(e.target.value)}/>
                    </div>

                    <Link to='/'><button onClick = {(e) => updatePropertiesArray()}>Save Entry</button></Link>





            </div>
        )
    }
}
function mapStateToProps(state){
    //Destructure all the values here
    const {propertiesArray,
        pendingPropName,
        pendingPropDesc,
        pendingPropAddress,
        pendingPropCity,
        pendingPropState,
        pendingPropZip,
        pendingPropURL,
        pendingPropLoanAmt,
        pendingPropMonthMortg,
        pendingPropDesiredRent,
        } = state;

    return{
        //all the vales here
    };
}
//in the brackets, put all the functions there
export default connect(mapStateToProps, {
    updatePendingPropName, 
    updatePendingPropDesc,
    updatePendingPropAddress,
    updatePendingPropCity,
    updatePendingPropState,
    updatePendingPropZip,
    updatePendingPropURL,
    updatePendingPropLoanAmt,
    updatePendingPropMonthMortg,
    updatePendingPropDesiredRent,
    updatePropertiesArray})(Entry);