import { Row } from '../../components/grid';
import { useSelector } from 'react-redux';
import { selectAllCoffees } from './coffeeSlice';
import CoffeeCard from './coffeeCard';
const CoffeeList = ({ type }) => {
    const coffees = useSelector(selectAllCoffees);
    if (type === "recent") {
        return (
            <>
                {coffees.map(coffee => {
                    return (
                        <Row key={coffee.id}>
                            <CoffeeCard coffee={coffee} />
                        </Row>
                    )
                })}
            </>
        )
    }
}

export default CoffeeList;