import {Link, NavLink, Outlet} from 'react-router-dom'
import styled from "styled-components";

const Layout = () => {

    const linkStyle = {
        textDecoration: 'none',
        fontSize: '20px',

    }

    const setActive = ({isActive}) => isActive ? 'active-link' : ''


    return (
        <>

            <Header>

                <NavLink style={linkStyle} to='/' className={setActive}> Home </NavLink>

                <NavLink style={linkStyle} to='/about' className={setActive}> About </NavLink>

                <NavLink style={linkStyle} to='/info' className={setActive}> Info </NavLink>


            </Header>

            <RoutesStyle>
                <Outlet/>
            </RoutesStyle>

            <footer>2022</footer>

        </>
    );
};

export default Layout;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #e8e9f1;
  padding: 40px;
`

const RoutesStyle = styled.div`

  text-align: center;
  font-size: 22px;
  font-weight: lighter;
  margin-top: 200px;
  text-decoration: green wavy underline;;
`