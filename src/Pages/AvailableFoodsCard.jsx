import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AvailableFoodsCard = ({ foods }) => {
    return (
        <div>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={foods.photo} /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-1">
                            <div className="avatar">
                                <div className="w-6 md:w-10 rounded-full">
                                    <img src={foods.donarPhoto} />
                                </div>
                            </div>
                            <span className="text-sm md:text-lg">{foods.donarName}</span>
                        </div>
                        <h2 className="card-title">{foods.name}</h2>
                        <h2 className="card-title">Quantity: <span className='font-normal'>{foods.quantity}</span></h2>
                        <h2 className="card-title">Pickup Location: <span className='font-normal'>{foods.location}</span></h2>
                        <h2 className="card-title">Expiry Date: <span className='font-normal'>{foods.expiryDate}</span></h2>
                        {
                            foods.details && <h2 className="card-title">Additional Notes: <span className='font-normal'>{foods.details}</span></h2>
                        }
                        <div className="card-actions justify-end">
                            <Link to={`/food/${foods._id}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodsCard;

AvailableFoodsCard.propTypes = {
    foods: PropTypes.object,
}