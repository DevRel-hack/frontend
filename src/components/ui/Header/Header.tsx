import './Header.scss';
import { NavLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';

export default function Header() {
  return (
    <header className="header">
      <NavLink className="header__links-item" to="/devRelMe/main">
        <h3 className="header__logo">Логотип</h3>
      </NavLink>
      <nav className="header__links-container">
        <ul className="header__links-list">
          <li className="header__links-item">
            <NavLink
              to="/devRelMe/main/people"
              className={({ isActive }) => (isActive ? 'header__link header__link_active' : 'header__link')}
            >
              Люди
            </NavLink>
          </li>
          <li className="header__links-item">
            <NavLink
              to="/devRelMe/main/analytics"
              className={({ isActive }) => (isActive ? 'header__link header__link_active' : 'header__link')}
            >
              Аналитика
            </NavLink>
          </li>
          <li className="header__links-item">
            <NavLink
              to="/devRelMe/main/events"
              className={({ isActive }) => (isActive ? 'header__link header__link_active' : 'header__link')}
            >
              Мои мероприятия
            </NavLink>
          </li>
          <li className="header__links-item">
            <NavLink
              to="/devRelMe/main/sending"
              className={({ isActive }) => (isActive ? 'header__link header__link_active' : 'header__link')}
            >
              По рассылочке
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__profile-container">
        <div className="header__profile-content">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <NavLink to="/devRelMe/main/profile">
            <Avatar
              alt="Ваш аватар"
              src="https://i.ytimg.com/vi/zjltQhTahmo/hqdefault.jpg"
              sx={{ width: '58px', height: '58px' }}
            />
          </NavLink>
          <div className="header__profile-info">
            <h3 className="header__profile-name">Имя пользователя</h3>
            <span className="header__profile-email">email пользователя</span>
          </div>
        </div>
      </div>
    </header>
  );
}
