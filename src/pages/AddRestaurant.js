import { useState } from 'react';

import Card from '../ui/Card';
import { Modal, Box, Typography } from '@mui/material';
import classes from './AddRestaurant.module.css';

function AddRestaurantPage() {

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const [name, setName] = useState("");
	const [image, setImage] = useState("");

	const [displayModal, setDisplayModal] = useState(false);

	const API_URL = "https://pure-tundra-61323.herokuapp.com/";

	const handleOpen = () => setDisplayModal(true);
	const handleClose = () => setDisplayModal(false);

	function submitHandler(event) {
		event.preventDefault();

		const restaurantData = {
			name: name,
			image_url: image,
		}

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(restaurantData)
		};
		fetch(`${API_URL}api/v1/restaurants`, requestOptions)
			.then(() => {
				setName("");
				setImage("");
				handleOpen();
			})
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="name">Restaurant Name</label>
					<input
						type="text"
						required
						id="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Restaurant Image (URL)</label>
					<input
						type="url"
						required
						id="image"
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>

				<div className={classes.actions}>
					<button>Add Restaurant</button>
				</div>
			</form>

			<Modal
				open={displayModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Restaurant added successfully
					</Typography>
				</Box>
			</Modal>

		</Card>
	)
}

export default AddRestaurantPage;