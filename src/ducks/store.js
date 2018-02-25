import {createStore} from 'redux';          //import the redux function that creates the store. Magic happens
import reducer from './reducer';      //import the reducer from the reducer file in your project(in this case, ducks/reducer)


export default createStore(reducer);        //export default the createStore function with the reducer as the argument.