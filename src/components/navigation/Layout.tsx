import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { BoxArrowInRight, People, PersonLinesFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styles from './Layout.module.scss';

interface LayoutProp {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div>
            <Row>
                <Col>
                    <Navbar expand="lg" className={styles.navbar} >
                        <Container>
                            <Navbar.Brand className={styles.navBrand}>
                                <PersonLinesFill style={{ marginBottom: '4px' }} size={25} />
                                <Navbar.Text className={styles.navText}>
                                    DIRECTORY
                                </Navbar.Text>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link
                                        as={Link} to={'/adresar'}
                                        className={styles.navLink}>
                                        Contacts
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link} to={'/favorite'}
                                        className={styles.navLink}>
                                        Favorite
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className="justify-content-end">
                                <div>
                                    <Navbar.Text className={styles.navText}>
                                        gabi.vidoic@gmail.com
                                    </Navbar.Text>
                                    <BoxArrowInRight size={25} />
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Container>
                        {children}
                    </Container>
                </Col>
            </Row>
        </div>
    )
} 