import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeaturedFoodCard = ({ sortedFoods }) => {

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={sortedFoods.photo} /></figure>
                <div className="card-body">
                        <div className="flex items-center gap-1">
                            <div className="avatar">
                                <div className="w-6 md:w-10 rounded-full">
                                    <img src={sortedFoods.donarPhoto} />
                                </div>
                            </div>
                            <span className="text-sm md:text-lg">{sortedFoods.donarName}</span>
                        </div>
                    <h2 className="card-title">{sortedFoods.name}</h2>
                    <h2 className="card-title">Quantity: <span className='font-normal'>{sortedFoods.quantity}</span></h2>
                    <h2 className="card-title">Pickup Location: <span className='font-normal'>{sortedFoods.location}</span></h2>
                    <h2 className="card-title">Expiry Date: <span className='font-normal'>{sortedFoods.expiryDate}</span></h2>
                    {
                        sortedFoods.details && <h2 className="card-title">Additional Notes: <span className='font-normal'>{sortedFoods.details}</span></h2>
                    }
                    <div className="card-actions justify-end">
                        <Link to={`/food/${sortedFoods._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;

FeaturedFoodCard.propTypes = {
    sortedFoods: PropTypes.object,
}