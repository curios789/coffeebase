import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postComment } from "./commentSlice";
import styled from "styled-components";
import { Row, Col } from '../../components/grid'
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

const Label = styled.label`

`

const FormStyled = styled(Form)`
    background-color: #ccc;
    padding: 1rem;
    margin: 1rem 0;
        h1{
            font-family: "Nunito Sans";
        }
        textarea {
            width: 80%;
            font-family: sans-serif;
            padding: 20px;
        }
        .form-control{
            font-size: 1.2rem;
            padding: 5px;
            margin: 5px;
        }
        label {
            font-size: 1.2rem;
        }
    `
const CommentForm = ({ type, id }) => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        let comment = {};
        // IF WE'RE COMING FROM THE SHOP PAGE
        if (type === 'shop') {
            comment = {
                shop_id: parseInt(id),
                rating: values.rating,
                author: values.author,
                text: values.commentText,
                datetime: new Date(Date.now()).toISOString()
            }
            // IF WE'RE COMING FROM A COFFEE PAGE
        } else {
            comment = {
                coffee_id: parseInt(id),
                rating: values.rating,
                author: values.author,
                text: values.commentText,
                datetime: new Date(Date.now()).toISOString()
            }
        }
        dispatch(postComment(comment));
    }
    return (
        <Formik initialValues={{ rating: undefined, author: "", commentText: "" }} onSubmit={handleSubmit}>
            <FormStyled>
                <Row>
                    <Col><h1>Tell us what you think!</h1></Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Label htmlFor="author">Author:</Label>
                        <Field name="author" placeholder="Your Name" className="form-control" />
                        <ErrorMessage name="author"></ErrorMessage>
                    </Col>
                    <Col md='6'>
                        <Label htmlFor="rating">Rating:</Label>
                        <Field name="rating" as="select" className="form-control">
                            <option>Select...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Field>
                        <ErrorMessage name="rating"></ErrorMessage>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Field
                            name='commentText'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type='submit' color='primary'>
                            Post Comment
                        </Button>
                    </Col>
                </Row>
            </FormStyled>
        </Formik>
    );
}

export default CommentForm;