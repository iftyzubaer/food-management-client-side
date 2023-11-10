import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {

    const foods = useLoaderData()

    const [sortedFoods, setSortedFoods] = useState(null)
    const [searchInput, setSearchInput] = useState('');

    const handleSort = () => {
        const sorted = [...foods].sort((a, b) => {
            return new Date(a.expiryDate) - new Date(b.expiryDate)
        })
        setSortedFoods(sorted)
    }

    const handleSearch = () => {
        if (searchInput) {
            const filteredFoods = foods.filter((food) => food.name.toLowerCase().includes(searchInput.toLowerCase()))
            setSortedFoods(filteredFoods)
        }
        else {
            handleSort()
        }
    }

    return (
        <div className="px-2 md:px-20 lg:px-40 my-16 text-center">
            <Helmet>
                <title>Food Saver | Available Food</title>
            </Helmet>
            <h2 className="text-5xl font-bold text-center mb-10">Available Foods</h2>
            <div className="mb-10">
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <button onClick={handleSearch} className="btn join-item rounded-r-lg">Search</button>
                </div>
                <button onClick={handleSort} className="btn rounded-lg ml-10">Sort by Expiry Date</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sortedFoods ? sortedFoods.map(foods => <AvailableFoodsCard key={foods._id} foods={foods}></AvailableFoodsCard>) :
                    foods.map(foods => <AvailableFoodsCard key={foods._id} foods={foods}></AvailableFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;