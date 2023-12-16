import { Outlet } from 'react-router-dom';

interface ILayout {
  children?: JSX.Element;
  type?: 'full' | 'normal';
}

export default function Layout({ children, type = 'full' }: ILayout) {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: type === 'full' ? '100vh' : '80vh',
        minWidth: '100vw',
        padding: '20px',
        backgroundColor: '#64400f',
      }}
    >
      <Outlet />
      {children}
    </main>
  );
}
