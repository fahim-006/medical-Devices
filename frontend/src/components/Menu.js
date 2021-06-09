import { Link, withRouter } from 'react-router-dom';
import { singout, isAuthenticated, userInfo } from '../utils/auth'
import Logo from '../assets/logo.svg';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#000000' }
    } else {
        return { color: '#004018' }
    }
}

const Menu = ({ history }) => {
    return (
        <div>
         <div className="container">
    <nav className="navbar navbar-expand-md navbar-light">
    <a className="navbar-brand" href="/">
      <img src={Logo} height="30" alt="mdb logo" />
    </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
      aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav1">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
                    <Link style="color: #00704A;" className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                </li>
                {!isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link waves-effect" style={{color: '#00704A'},isActive(history, '/login')} to="/login">Login</Link>
                    </li>


                <li className="nav-item pl-2 mb-2 mb-md-0">
                        <Link type="button" className="btn btn-outline-success btn-md btn-rounded btn-navbar waves-effect waves-light" style={isActive(history, '/register')} to="/register">Register</Link>
                    </li>
                </>)}

                {isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link waves-effect" style={{color: '#00704A'},isActive(history, `${userInfo().role}/dashboard`)} to={`${userInfo().role}/dashboard`}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" style={{ cursor: 'pointer', color: 'grey' }} onClick={() => {
                            singout(() => {
                                history.push('/login')
                            });
                        }}> Log Out</span>
                    </li>
                </>)}
            </ul>
            </div>
        </nav>
       
        </div>
        <hr style={{backgroundColor:'#ebffee'}}></hr>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </div>   
      
    )
}

export default withRouter(Menu);