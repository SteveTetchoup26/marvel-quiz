import { BrowserRouter as Router, Route, Switch,BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../Signup';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword';

function App() {

    return (
        <BrowserRouter >
            <Header />

            <Routes>
                <Route exact path='/' Component={Landing} />
                <Route path='/welcome' Component={Welcome} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={SignUp} />
                <Route path='/forgetpassword' Component={ForgetPassword} />
                <Route path='/error' Component={ErrorPage} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
