import { Login } from "./login";
import { useState } from "react";
import { Register } from "./register/Register";

import styles from "./Authentication.module.scss";

type AuthFormType = 'login' | 'register';

export const Authentication = () => {
    const [authForm, setAuthForm] = useState<AuthFormType>('login');

    const handleFormToggle = (form: AuthFormType) => {
        setAuthForm(form);
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {authForm === 'login' ? (
                    <Login onFormToggle={handleFormToggle} />
                ) : (
                    <Register onFormToggle={handleFormToggle} />
                )}
            </div>
        </div>
    );
};
