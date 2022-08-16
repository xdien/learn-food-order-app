import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return (<header className={classes.header}>
        <div className={classes.logo}>Great Quote</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={classes.active}>All Quote</NavLink>
                </li>
                <li>
                    <NavLink to='/new-quote' activeClassName={classes.active}>New Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header> );
};

export default MainNavigation;