const initialState = {
    propertiesArray:[],//this will be an array of objects-each object being a property
    pendingPropName:'',
    pendingPropDesc: '',
    pendingPropAddress:'',
    pendingPropCity: '',
    pendingPropState: '',
    pendingPropZip:'',
    pendingPropURL:'',
    pendingPropLoanAmt:0,
    pendingPropMonthMortg:0,
    pendingPropDesiredRent:0,
    pendingPropStatus:'Active'//I dont think i need this

}

//action Types go here:

const UPDATE_PROPNAME = 'UPDATE_PROPNAME';
const UPDATE_PROPDESC ='UPDATE_PROPDESC';
const UPDATE_PROPADDRESS ='UPDATE_PROPADDRESS';
const UPDATE_PROPCITY ='UPDATE_PROPCITY';
const UPDATE_PROPSTATE ='UPDATE_PROPSTATE';
const UPDATE_PROPZIP ='UPDATE_PROPZIP';
const UPDATE_PROPURL ='UPDATE_PROPURL';
const UPDATE_PROPLOAN_AMT ='UPDATE_PROPLOAN_AMT';
const UPDATE_PROPMONTH_MORTG ='UPDATE_PROPMONTH_MORTG';
const UPDATE_PROPDESIRED_RENT ='UPDATE_PROPDESIRED_RENT';
//I will need one for the updating of the propertiesArray
const UPDATE_PROPERTIES_ARRAY = 'UPDATE_PROPERTIES_ARRAY';

function reducer(state = initialState, action){
    switch(action.type){
        //Cases go here
        case UPDATE_PROPNAME:
        return Object.assign({}, state, {pendingPropName: action.payload});
        case UPDATE_PROPDESC:
        return Object.assign({}, state, {pendingPropDesc: action.payload});
        case UPDATE_PROPADDRESS:
        return Object.assign({}, state, {pendingPropAddress: action.payload});
        case UPDATE_PROPCITY:
        return Object.assign({}, state, {pendingPropCity: action.payload});
        case UPDATE_PROPSTATE:
        return Object.assign({}, state, {pendingPropState: action.payload});
        case UPDATE_PROPZIP:
        return Object.assign({}, state, {pendingPropZip: action.payload});
        case UPDATE_PROPURL:
        return Object.assign({}, state, {pendingPropURL: action.payload});
        case UPDATE_PROPLOAN_AMT:
        return Object.assign({}, state, {pendingPropLoanAmt: action.payload});
        case UPDATE_PROPMONTH_MORTG:
        return Object.assign({}, state, {pendingPropMonthMortg: action.payload});
        case UPDATE_PROPDESIRED_RENT:
        return Object.assign({}, state, {pendingPropDesiredRent: action.payload});
        case UPDATE_PROPERTIES_ARRAY:
        console.log(action.payload)
        return Object.assign({}, state, { propertiesArray: action.payload})


        default:return state;

    }
}

//action creators
// Example:
// export function updateLoanType(loanType){
//     return{
//         type:UPDATE_LOAN_TYPE,
//         payload: loanType
//     }
// }
export function updatePendingPropName(pendingPropName){
    return{
        type:UPDATE_PROPNAME,
        payload: pendingPropName
    }
}

export function updatePendingPropDesc(pendingPropDesc){
    return{
        type:UPDATE_PROPDESC,
        payload: pendingPropDesc
    }
}
export function updatePendingPropAddress(pendingPropAddress){
    return{
        type:UPDATE_PROPADDRESS,
        payload: pendingPropAddress
    }
}
export function updatePendingPropCity(pendingPropCity){
    return{
        type:UPDATE_PROPCITY,
        payload: pendingPropCity
    }
}
export function updatePendingPropState(pendingPropState){
    return{
        type:UPDATE_PROPSTATE,
        payload: pendingPropState
    }
}
export function updatePendingPropZip(pendingPropZip){
    return{
        type:UPDATE_PROPZIP,
        payload: pendingPropZip
    }
}
export function updatePendingPropURL(pendingPropURL){
    return{
        type:UPDATE_PROPURL,
        payload: pendingPropURL
    }
}
export function updatePendingPropLoanAmt(pendingPropLoanAmt){
    return{
        type:UPDATE_PROPLOAN_AMT,
        payload: pendingPropLoanAmt
    }
}
export function updatePendingPropMonthMortg(pendingPropMonthMortg){
    return{
        type:UPDATE_PROPMONTH_MORTG,
        payload: pendingPropMonthMortg
    }
}
export function updatePendingPropDesiredRent(pendingPropDesiredRent){
    return{
        type:UPDATE_PROPDESIRED_RENT,
        payload: pendingPropDesiredRent
    }
}
//I will need one more for the updating of the Properties array
export function updatePropertiesArray(propertiesArray){
    console.log(propertiesArray)
    return{
        type:UPDATE_PROPERTIES_ARRAY,
        payload: propertiesArray
    }
}

export default reducer;