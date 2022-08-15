import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { Row, Col, Container } from '../components/grid';

const LoginContainer = styled(Container)`
    display: flex;
    justify-content: center;
    min-height: 80vh;
`

const LoginCard = styled.div`
    border: 1px solid black;
    width: 30vw;
    height: 40vh;
    margin: 2rem;
    border-radius: 6px;
    .cardHeader {
        border-bottom: 1px solid #ccc;
        h1 {
            font-size: 1.4rem;
            font-family: "Nunito Sans";
        }
    }
    input {
        max-width: 100%;
        font-size: 1.4rem;
        padding: 0.5rem;
        margin: .5rem;
    }
    form {
        margin: 1em;
    }
`
const Button = styled.button`
    background: limegreen;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 10px;
    font-family: "Nunito Sans";
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 3px;
    transition: background .4s;
        :hover {
            background: green;
        }
`
const LoginPage = () => {
    const handleLogin = (values) => {

    }
    return (
        <LoginContainer>
            <LoginCard>
                <Row className='cardHeader'>
                    <Col><h1>Log In</h1></Col>
                </Row>
                <Formik
                    initialValues={{ username: "", password: "" }} onSubmit={handleLogin}>
                    <Form>
                        <Row>
                            <Col>
                                <Field name="username" placeholder="Username" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field name="password" placeholder="Password" type="password" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type='submit' color='primary'>
                                    LOG IN
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </LoginCard>
        </LoginContainer>
    )
}

export default LoginPage;