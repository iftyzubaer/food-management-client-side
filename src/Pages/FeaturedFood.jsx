import PropTypes from 'prop-types';
import FeaturedFoodCard from './FeaturedFoodCard';
import { Link } from 'react-router-dom';

const FeaturedFood = ({ foods }) => {

    const sortedFoods = foods.sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity))

    return (
        <div className='text-center'>
            <h2 className="text-5xl font-bold text-center my-4">Featured Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sortedFoods.map(sortedFoods => <FeaturedFoodCard key={sortedFoods._id} sortedFoods={sortedFoods}></FeaturedFoodCard>)
                }
            </div>
            <Link to={'/available'} className="btn btn-primary my-6">Show All</Link>
        </div>
    );
};

export default FeaturedFood;

FeaturedFood.propTypes = {
    foods: PropTypes.array,
}