import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
    return(
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/categories' activeClassName='active'>
                        Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/createcategory' activeClassName='active'>
                        New Category
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav