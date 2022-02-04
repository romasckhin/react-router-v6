import {Routes, Route} from 'react-router-dom'
import AboutPage from "./components/AboutPage";
import InfoPage from "./components/InfoPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/layout/Layout";
import './App.css'

function App() {

    return (

        <div>

                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/info' element={<InfoPage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>

        </div>
    );
}

export default App;