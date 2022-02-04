import {Outlet} from 'react-router-dom'
import styled from "styled-components";
import CustomLink from "./CustomLink";


const Layout = () => {

        return (
        <>

            <Header>

                <CustomLink  to='/' > Home </CustomLink>

                <CustomLink to='/about' > About </CustomLink>

                <CustomLink  to='/info' > Info </CustomLink>

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