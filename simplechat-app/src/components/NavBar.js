import classes from './NavBar.module.css';
import { signOutHandler } from '../firebase/firebaseConfig';

function Navbar(props) {
    const signOutClick = () => {
        signOutHandler();
    }

    return (<div id={classes.background}>
        <h1>Simple Chat <i className="bi bi-wechat"></i></h1>
        
        {props.user &&
            <button 
                id={classes.login_logout_button} 
                onClick={signOutClick}>
                    Sign Out
            </button>
        }
        

    </div>
    )
}

export default Navbar;