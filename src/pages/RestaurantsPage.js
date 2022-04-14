import { useEffect, useState } from 'react';

import Card from '../ui/Card';
import RestaurantInfo from './RestaurantInfo';

function RestaurantsPage() {

    const [restaurants, setRestaurants] = useState();

    const API_URL = "https://pure-tundra-61323.herokuapp.com/";

    useEffect(() => {
        fetch(`${API_URL}api/v1/restaurants`)
            .then((res) => res.json())
            .then((res) => setRestaurants(res.data))
    }, [])


    return (
        <div>

            <h1>All the restaurants that Chris likes</h1>

            
            {restaurants && restaurants.map((restaurant) => {
                return (
                    <Card key={restaurant.id}>
                        <RestaurantInfo 
                            name={restaurant.attributes.name}
                            image={restaurant.attributes.image_url}
                            id={restaurant.id}
                            slug={restaurant.attributes.slug}
                        />
                    </Card>
                )
            })}
        </div>
    )
}

export default RestaurantsPage;