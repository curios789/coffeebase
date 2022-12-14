import { Row, Col, Container } from "../components/grid";
import { Card, CardText } from "../styled-components/Card";
import styled, { keyframes } from "styled-components";
import "@fontsource/alegreya-sans-sc";
import "@fontsource/aleo";
import { Form, Formik, Field } from 'formik';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import CoffeeList, { RegionList } from "../features/coffees/coffeeList";
import { Link, useParams } from "react-router-dom";

const buttonAnimation = keyframes`
from {
    background: transparent;
}
to {
    background: rgba(255,255,255,0.4);
}`;

const cardAnimation = keyframes`
    from {
      transform: translateX(0%);
    }
  
    to {
      transform: translateX(100%);
    }
  `

const CoffeeCard = styled(Card)`
    background-color: ${(props) => props.color};
    background-opacity: .5;
    background-size: cover;
    margin: 0;
    min-height: 450px;
    box-shadow: none;
    border: none;
    border-right: 3px solid black;
    padding: 20px;
    align-items: stretch;
    h3 {
        margin-bottom: 0;
        font-family: "Alegreya Sans SC";
        color: white;
        font-size: 2em;
    }
    img {
        height: 170px;
        background: white;
        border: 2px solid white;
    }
    button {
        background: transparent;
        font-size: 1rem;
        color: white;
        padding: 12px;
        border: 2px solid white;
        font-family: "Alegreya Sans SC";
        font-weight: bold;
        width: 150px;
        :hover {
            animation: ${buttonAnimation} 0.3s forwards;
        }
    }
`
const CoffeeCardText = styled(CardText)`
    font-family: "aleo";
`
const CoffeeSearchBar = styled(Row)`
    display: flex;
    background: #edf8c0;
    border-top:  2px solid #cfa43d;
    margin-bottom: 1em;
    text-align: left;
    align-items: center;
    h4 {
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 1.2rem;
    }
    label {
        font-family: "Alegreya Sans SC";
        padding: 0 1em 0 1em;
    }
    select {
        font-family: "Alegreya Sans SC";
        font-size: 1.2em;
        border: 1px solid black;
        border-radius: 3px;
        padding: 4px;
    }
    button {
        background: limegreen;
        padding: 10px;
        font-family: "Alegreya Sans SC";
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 3px;
        transition: background .4s;
        :hover {
            background: green;
        }
    }
`
const TastingNotes = styled.div`
    position: absolute;
    left: 30vw;
    z-index: 9999;
    max-width: 300px; 
    border: 1px solid black;
    background: white;
    text-align: center;
    h4 {
        margin: 10px;
        border-bottom: 1px solid #ccc;
    }
`
const TastingNotesToggle = styled.button`
    margin: 0 1em 0 1em;
    background-color: #278779 !important;
    &:hover {
        background-color: #7dcce6 !important;
    }
`
const CoffeeSearch = () => {
    const [showNotes, setShowNotes] = useState(false);
    const NotesToggle = () => {
        setShowNotes(!showNotes);
    }
    const handleSubmit = () => {

    }
    return (
        <Formik
            initialValues={{
                body: 'light',
                acidity: 'low',
                flavor: ''
            }}
            onSubmit={handleSubmit()}
        >
            <Form style={{ padding: '1.2em' }}>
                <label>Body</label>
                <Field as='select' name='body'>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="full">Full</option>
                </Field>
                <label>Acidity</label>
                <Field as='select' name='acidity'>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </Field>
                <TastingNotesToggle type='button' onClick={() => NotesToggle()}>Tasting Notes</TastingNotesToggle>
                {showNotes &&
                    <TastingNotes>
                        <h4>Tasting Notes</h4>
                        <label><Field type="checkbox" name="flavor" value="fruit" />Fruit</label>
                        <label><Field type="checkbox" name="flavor" value="chocolate" />Chocolate</label>
                        <label><Field type="checkbox" name="flavor" value="nut" />Nut</label>
                        <label><Field type="checkbox" name="flavor" value="spice" />Spice</label>
                        <label><Field type="checkbox" name="flavor" value="floral" />Floral</label>
                        <label><Field type="checkbox" name="flavor" value="roasty" />Roasty</label>
                        <label><Field type="checkbox" name="flavor" value="herbal" />Herbal</label>
                    </TastingNotes>
                }
                <button type='submit' icon={{}}>Search</button>
            </Form>
        </Formik>
    )
}

const CoffeePage = () => {
    const { region } = useParams();
    return (
        <>
            <CoffeeSearchBar>
                <Col md='2'><h4>COFFEE SEARCH</h4></Col>
                <Col md='10'>
                    <CoffeeSearch />
                </Col>
            </CoffeeSearchBar>
            <Row style={{ border: "5px solid black" }}>
                <Col md="4">
                    <CoffeeCard color="rgba(105, 199, 183, .8)" style={{ backgroundImage: `url(${require('../assets/latinamericabg.webp')})` }}>
                        <img src={`${require('../assets/latinamerica.webp')}`} alt="Latin American Coffees" />
                        <h3>Latin America</h3>
                        <CoffeeCardText>
                            Latin American coffees are mild-bodied and well balanced. They often contain flavor notes of nuts and chocolate.
                        </CoffeeCardText>
                        {region ?
                            <Link to='./../Latin-America'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                            :
                            <Link to='Latin-America'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                        }
                    </CoffeeCard>
                </Col>
                <Col md="4">
                    <CoffeeCard color="yellow" style={{ backgroundImage: `url(${require('../assets/southeastasiabg.webp')})` }}>
                        <img src={`${require('../assets/southeastasia.webp')}`} alt="Southeast Asian Coffees" />
                        <h3>Southeast Asia</h3>
                        <CoffeeCardText>
                            Southeast Asian coffees are known for citrus and floral flavor notes. They are often low in acidity with a medium body.
                        </CoffeeCardText>
                        {region ?
                            <Link to='./../Southeast-Asia'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                            :
                            <Link to='Southeast-Asia'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                        }
                    </CoffeeCard>
                </Col>
                <Col md="4">
                    <CoffeeCard color="red" style={{ backgroundImage: `url(${require('../assets/africabg.webp')})` }}>
                        <img src={`${require('../assets/africa.webp')}`} alt="African Coffees" />
                        <h3>Africa</h3>
                        <CoffeeCardText>
                            African coffees are often sweet and fruity, with light floral notes. They tend to have a fuller body than most other regions.
                        </CoffeeCardText>
                        {region ?
                            <Link to='./../Africa'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                            :
                            <Link to='Africa'><button>Find Coffees <FontAwesomeIcon icon={faAnglesRight} /></button></Link>
                        }
                    </CoffeeCard>
                </Col>
            </Row>
            {region ?
                <Container>
                    <RegionList region={region} />
                </Container>
                :
                <Container>
                    <CoffeeList type="recent" />
                </Container>
            }
        </>
    );
}
export default CoffeePage;