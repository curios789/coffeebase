import { Container, Row, Col } from "../../components/grid"
import { Card } from "../../styled-components/Card";
const CoffeeDetailCard = styled(Card)`

`
const CoffeeDetail = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <CoffeeDetailCard></CoffeeDetailCard>
                </Col>
            </Row>
            <Row>
                <Comments coffee={coffee} />
            </Row>
        </Container>
    )
}

export default CoffeeDetail;