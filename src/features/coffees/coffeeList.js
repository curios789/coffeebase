import { Row } from '../../components/grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCoffees } from './coffeeSlice';
import { selectCoffeeByRegion } from './coffeeSlice';
import CoffeeCard from './coffeeCard';
import { fetchCoffees } from './coffeeSlice';
import { useEffect } from 'react';

export const RegionList = ({ region }) => {
    region = region.replace(/-/g, ' ');
    const coffees = useSelector(selectCoffeeByRegion(region));
    return (
        <>
            {coffees.map(coffee => {
                return (
                    <Row key={coffee._id}>
                        <CoffeeCard coffee={coffee} />
                    </Row>
                )
            })}
        </>
    );
}
const CoffeeList = ({ type }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCoffees());
    }, []);
    const isLoading = useSelector((state) => state.coffees.isLoading);
    const errMsg = useSelector((state) => state.coffees.errMsg)
    const coffees = useSelector(selectAllCoffees);
    console.log(coffees)
    if (type === "recent") {
        if (isLoading) {
            return ("LOADING")
        }
        if (errMsg) {
            return (errMsg)
        }
        return (
            <>
                {coffees.map(coffee => {
                    return (
                        <Row key={coffee._id}>
                            <CoffeeCard coffee={coffee} />
                        </Row>
                    )
                })}
            </>
        )
    }
}

export default CoffeeList;