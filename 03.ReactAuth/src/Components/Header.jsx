import './header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkIsActive = (IsActive) => IsActive ? "header__item-link header__item-link--is--active":"header__item-link"
  return (
    <div>
    
      <nav className="header"> 
        <a className="header__logo" href="/">LOGO</a>
        <ul className="header__nav-list" />
        <li className="header__list-item">
            <NavLink className={({isActive})=>linkIsActive(isActive)} to="/home">Home</NavLink>
        </li>
        <li className="header__list-item">
            <NavLink className={({isActive})=>linkIsActive(isActive)} to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="header__list-item">
            <NavLink className={({isActive})=>linkIsActive(isActive)} to="/secret">Secret</NavLink>
        </li>
        <li className="header__list-item">
            <NavLink className={({isActive})=>linkIsActive(isActive)} to="/login">Login</NavLink>
        </li>
        <li className="header__list-item">
            <NavLink className={({isActive})=>linkIsActive(isActive)} to="/signup">Signup</NavLink>
        </li>
      </nav>
    </div>
  )
}

export default Header