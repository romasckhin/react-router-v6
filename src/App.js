import {Routes, Route, Link} from 'react-router-dom'
import AboutPage from "./components/AboutPage";
import InfoPage from "./components/InfoPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import styled from 'styled-components'

function App() {

    const linkStyle = {

        textDecoration: 'none',
        color: '#5968a2',
        fontSize: '20px',
        fontWeight: 'bold',
        borderLeft: '3px solid #5968a2',
        borderRight: '3px solid #5968a2',
    }

    return (

        <div>

            <Header>

                <Link style={linkStyle} to='/'> Home </Link>

                <Link style={linkStyle} to='/about'> About </Link>

                <Link style={linkStyle} to='/info'> Info </Link>


            </Header>

            <RoutesStyle>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/info' element={<InfoPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </RoutesStyle>

        </div>
    );
}

export default App;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #c6c9d5;
  padding: 40px;
`
const RoutesStyle = styled.div`

    text-align: center;
    font-size: 22px;
    font-weight: lighter;
    margin-top: 200px;
    text-decoration: green wavy underline;;
`