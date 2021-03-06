
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { AppContext } from '../../appContext';
import MetaTags from 'react-meta-tags';

const Login = () => {

    const { setUser } = useContext(AppContext);
    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', true);
        setUser({ isLoggedIn: true });
    }

    return (
        <>
            <MetaTags id="2">
                <title>Login | Lending Books</title>
                <meta name="description" content="Lending books for students login page" />
                <meta name="keywork" content="Books, Lending books, Search books"/>
                <meta property="og:title" content="Lending books login page" />
            </MetaTags>
            <Card style={{ width: '390px', height: 'auto' }} className="m-auto">
                <Card.Img style={{ height: '56px' }} variant="top" src="./tss-logo.PNG" />
                <Card.Header className="text-center">LENDING BOOKS REQUEST APPROVAL</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">LOGIN</Card.Title>

                    <Form>
                        <Form.Group as={Row} controlId="username">
                            <Form.Label column sm={4} className="mandatory">
                                Username
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control autoFocus={true} type="text" placeholder="Username" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="password">
                            <Form.Label column sm={4} className="mandatory">
                                Password
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Col className="text-center">
                            <Button variant="primary" onClick={handleLogin}>Submit</Button>
                        </Col>
                        <Col className="mt-4">
                            <Button variant="link">Forgot Password?</Button>
                            <Button variant="link">Change Password?</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Login;