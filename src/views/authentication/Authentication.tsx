import { Col, Row } from "react-bootstrap";
import { Login } from "./login";
import styles from "./Authentication.module.scss";
import people from '../../app/assets/people.png';
import { useState } from "react";
import { Register } from "./register/Register";

type AuthFormType = 'login' | 'register';

export const Authentication = () => {
    const [authForm, setAuthForm] = useState<AuthFormType>('login');

    const handleFormToggle = (form: AuthFormType) => {
        setAuthForm(form);
    }

    return (
        <div className={styles.container}>
            <Row xs={12} md={8} lg={6}>
                <Col>
                    {authForm === 'login' ? (
                        <Login onFormToggle={handleFormToggle} />
                    ) : (
                        <Register onFormToggle={handleFormToggle} />
                    )}
                </Col>
            </Row>
            <Row xs={6} md={4}>
                <Col>
                    <img className={styles.image} src={people} alt="People" />
                </Col>
            </Row>

        </div>
    );
};
