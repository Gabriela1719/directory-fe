import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../../../components";
import styles from './Register.module.scss';
import { Link } from "react-router-dom";

type RegisterProps = {
    onFormToggle: (form: 'login' | 'register') => void;
};

export const Register: React.FC<RegisterProps> = ({ onFormToggle }) => {
    const handleLoginClick = () => {
        onFormToggle('login');
    };

    return (
        <Form className={styles.form}>
            <Row xs={12} md={8} lg={4} className={styles.centerRow}>
                <Col>
                    <Form.Text>Signup</Form.Text>
                </Col>
            </Row>

            <Form.Group className='mb-3' controlId="formGroupEmail">
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formGroupEmail">
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
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
                    <Button variant='email' type="submit" label='Submit' className={styles.button}>
                        Submit
                    </Button>
                </Col>
            </Row>
            <div className={styles.register}>
                <Form.Text>Already have an account? <Link to='/login' onClick={handleLoginClick}>    Log in</Link></Form.Text>
            </div>
        </Form>
    );
};