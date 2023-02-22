import styles from './login.module.css';
import BackEndService from "../../services/back-end.service";
import {useMemo} from "react";

export default function LoginComponent() : JSX.Element
{

    return <div className={styles.login}>
            <h3>Login</h3>
            <input className = {styles.input_button} type={"email"} placeholder={"Email"}/>
            <input className = {styles.input_button} type={"password"} placeholder={"Password"}/>
            <button className={styles.login_button} onClick={() => {console.log('helo'); BackEndService.sendRequest('abd')}}>
                <b>Submit</b>
            </button>
        </div>
}
