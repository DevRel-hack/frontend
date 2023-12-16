import './Header.scss';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';

export default function Header() {
  return (
    <header className="header">
      <Link className="header__links-item" to="/devRelMe/main">
        <h3 className="header__logo">Логотип</h3>
      </Link>
      <nav className="header__links-container">
        <ul className="header__links-list">
          <li className="header__links-item">
            <Link to="/devRelMe/main" className="header__link">
              Люди
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/devRelMe/main" className="header__link">
              Аналитика
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/devRelMe/main" className="header__link">
              Мои мероприятия
            </Link>
          </li>
          <li className="header__links-item">
            <Link to="/devRelMe/main" className="header__link">
              По рассылочке
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__profile-container">
        <div className="header__profile-content">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar
            alt="Ваш аватар"
            src="https://i.ytimg.com/vi/zjltQhTahmo/hqdefault.jpg"
            sx={{ width: '58px', height: '58px' }}
          />
          <div className="header__profile-info">
            <h3 className="header__profile-name">Имя пользователя</h3>
            <span className="header__profile-email">email пользователя</span>
          </div>
        </div>
      </div>
    </header>
  );
}
