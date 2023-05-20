import { Col, Form, Row } from 'react-bootstrap';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';

type LoginProps = {
    onFormToggle: (form: 'login' | 'register') => void;
};

export const Login: React.FC<LoginProps> = ({ onFormToggle }) => {

    const handleRegisterClick = () => {
        onFormToggle('register');
    };

    return (
        <div className={styles.container}>
            <Form className={styles.form}>
                <Row xs={12} md={8} lg={4} className={styles.centerRow}>
                    <Col>
                        <Form.Text>Login</Form.Text>
                    </Col>
                </Row>

                <Form.Group className='mb-3' controlId="formGroupEmail">
                    <Form.Label>
                        Email address
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Group>

                <Row xs={12} md={8} lg={4} className={styles.buttonPosition}>
                    <Col >
                        <Button type="submit" label='Submit' className={styles.button} >
                            Submit
                        </Button>
                    </Col>
                </Row>
                <div className={styles.register}>
                    <Form.Text >Don't have an account? <Link to='/register' onClick={handleRegisterClick}>    Sign up</Link></Form.Text>
                </div>
            </Form>

        </div>
    );
};
