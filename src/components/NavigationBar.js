import { Link } from 'react-router-dom';

import classes from './NavigationBar.module.css'
function NavigationBar() {

    return (
        <header className={classes.header}>
            <ul>
                <Link exact to="/"><li>All Restaurants</li></Link>
                <Link to="/add-restaurant"><li>Add A Restaurant</li></Link>
            </ul>
        </header>
    )
}

export default NavigationBar;