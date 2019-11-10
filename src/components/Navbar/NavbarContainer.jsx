import Navbar from './Navbar';
import { addMessageActionCreator, updateMessageBodyCreator } from '../../redux/dialogsReducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.friends.friends,
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;