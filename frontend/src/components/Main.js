import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/protecteRoutes/PrivateRoute';
import AdminRoute from '../components/protecteRoutes/AdminRoute';
import Home from './home/Home';
import AllProduct from './home/AllProduct';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';
import AdminDashboard from './admin/AdminDashboard';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import ProductDetails from './home/ProductDetails';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/modeltype" exact component={AllProduct} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/modeldata/:id" exact component={ProductDetails} />
                <PrivateRoute path="/user/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <AdminRoute path="/admin/dashboard">
                    <AdminDashboard />
                </AdminRoute>
                <AdminRoute path="/devicetype">
                    <CreateCategory />
                </AdminRoute>
                <AdminRoute path="/devicemodel">
                    <CreateProduct />
                </AdminRoute>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Main;