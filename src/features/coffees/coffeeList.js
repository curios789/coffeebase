import { Row } from '../../components/grid';
import { useSelector } from 'react-redux';
import { selectAllCoffees } from './coffeeSlice';
import { selectCoffeeByRegion } from './coffeeSlice';
import CoffeeCard from './coffeeCard';

export const RegionList = ({ region }) => {
    region = region.replace(/-/g, ' ');
    const coffees = useSelector(selectCoffeeByRegion(region));
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
    );
}
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