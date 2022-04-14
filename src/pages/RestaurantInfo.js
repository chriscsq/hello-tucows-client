import DeleteIcon from '@mui/icons-material/Delete';

function RestaurantInfo(props) {

    const API_URL = "https://pure-tundra-61323.herokuapp.com/";

    function deleteHandler() {
        fetch(`${API_URL}api/v1/restaurants/${props.slug}`, { method: 'DELETE' })
        .then(() => console.log('delete successful'));
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>{props.name}</h1>
                <div style={{cursor: 'pointer'}} onClick={deleteHandler}><DeleteIcon color="disabled" />
                </div>
            </div>
            <img style={{ objectFit: 'cover', height: 200, width: 'auto' }} src={props.image} alt={props.name} />
        </>
    )
}

export default RestaurantInfo;