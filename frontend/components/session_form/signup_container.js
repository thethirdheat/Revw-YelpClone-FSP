import {connect} from 'react-redux'
import {login, clearSessionError, signUp} from '../../actions/session_actions'
import SessionForm from './session_form'

const mstp = (state,prevProps) =>({ 
    errors: state.errors.session,
    user: "",
    password: "",
    email:""
})

const mdtp =  dispatch =>({
    processSignUp:(user)=> (dispatch(signUp(user))) ,
    signIn:(user)=> (dispatch(login(user))),
    clearErr: ()=>dispatch(clearSessionError())
    }
)
export default connect(mstp,mdtp)(SessionForm)