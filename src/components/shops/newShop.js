import { Formik, Form, Field } from "formik";
import Sidebar from "../dashboard/sidebar";
import { Container, Row, Col } from "../grid";
import { useSelector, useDispatch } from "react-redux";
import { addShop } from '../../features/shops/shopSlice';
import { selectCoffeeByUserId } from "../../features/coffees/coffeeSlice";
import styled from "styled-components";
import CoffeeList from "../../features/coffees/coffeeList";
const Label = styled.label`
font-size: 1rem;
padding: 1rem;
vertical-align: middle;
margin: 1rem 0;
`
const StyledField = styled(Field)`
font-size: .75rem;
font-weight: bold;
padding: .5rem;
width: 100%;
margin: .2rem 0;
`
const Button = styled.button`
    background: limegreen;
    font-size: 1rem;
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
const timeInput = (props) => (
    <input type='time' {...props} />
);
const NewShop = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.userId);
    const coffees = useSelector(selectCoffeeByUserId(loggedInUser));

    function handleSubmit(values) {
        const address = values.address_2 ? `${values.address_1} ${values.address_2} ${values.city}, ${values.state} ${values.zip}` : `${values.address_1} ${values.city}, ${values.state} ${values.zip}`;
        values.address = address;
        values.description = document.getElementById('description').value;
        console.log(values);
        for (let i = 0; i <= 6; i++) {
            let cur_open = `open_${i}`;
            let cur_close = `close_${i}`;
            let open_hours = document.getElementById(cur_open);
            let close_hours = document.getElementById(cur_close);
            values.hours[i].open = open_hours.value;
            values.hours[i].close = close_hours.value;
        }
        const Shop = dispatch(addShop(values));
        console.log(Shop);
    }
    return (
        <Row>
            <Col md="2">
                <Sidebar />
            </Col>
            <Col md='10'>
                <Formik
                    initialValues={{
                        name: "",
                        address: "",
                        description: "",
                        hours: [
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            },
                            {
                                "open": "",
                                "close": ""
                            }
                        ],
                        brewing: [],
                        user: loggedInUser
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>Store Information</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'>
                                    <Label htmlFor='name'>Shop Name:
                                    </Label>
                                </Col>
                                <Col md='9'>
                                    <StyledField name='name' id='name' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'>
                                    <Label htmlFor='address'>Address Line 1:</Label>
                                </Col>
                                <Col md='9'>
                                    <StyledField name='address_1' id='address_1' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'>
                                    <Label htmlFor='address'>Address Line 2:</Label>
                                </Col>
                                <Col md='9'>
                                    <StyledField name='address_2' id='address_2' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1">
                                    <Label htmlFor='city'>City: </Label>
                                </Col>
                                <Col md='3'>
                                    <StyledField name='city' id='city' />
                                </Col>
                                <Col md='1'>
                                    <Label htmlFor='state'>State: </Label>
                                </Col>
                                <Col md='3'>
                                    <StyledField name='state' id='state' />
                                </Col>
                                <Col md='1'>
                                    <Label htmlFor='zip'>ZIP Code: </Label>
                                </Col>
                                <Col md='3'>
                                    <StyledField name='zip' id='zip' />
                                </Col>
                            </Row>
                            <Row>
                                <Col><Label htmlFor='description'>Store Description</Label></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <StyledField name='description' id='description' as='textarea' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>When are you open?</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'> </Col>
                                <Col md='2'><span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Open</span></Col>
                                <Col md='2'><span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Close</span></Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Sunday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_0' id='open_0' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_0' id='close_0' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Monday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_1' id='open_1' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_1' id='close_1' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Tuesday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_2' id='open_2' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_2' id='close_2' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Wednesday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_3' id='open_3' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_3' id='close_3' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Thursday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_4' id='open_4' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_4' id='close_4' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Friday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_5' id='open_5' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_5' id='close_5' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'><Label>Saturday:</Label></Col>
                                <Col md='2'>
                                    <StyledField name='open_6' id='open_6' as={timeInput} />
                                </Col>
                                <Col md='2'>
                                    <StyledField name='close_6' id='close_6' as={timeInput} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>What are you brewing?</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {coffees.map((coffee) => {
                                        return (
                                            <Label htmlFor='brewing'> {coffee.name}
                                                <Field type='checkbox' name='brewing' id='brewing' value={coffee._id} />
                                            </Label>
                                        )
                                    })}
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ 'textAlign': 'center' }}>
                                    <Button type='submit' color='primary'>
                                        Add Shop
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Formik>
            </Col>
        </Row>
    )
}

export default NewShop;