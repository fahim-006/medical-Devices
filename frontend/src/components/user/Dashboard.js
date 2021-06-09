import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';

const Dashboard = () => {
    const { name, email, role } = userInfo();


    const UserInfo = () => (
        <div className="card mb-5">
            <ul className="list-group">
                <li className="list-group-item"><strong>Name: </strong>{name}</li>
                <li className="list-group-item"><strong>E-mail: </strong> {email}</li>
                <li className="list-group-item">{role}</li>
            </ul>
        </div>
    );

    return (
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
            <div className="col-sm-3">
                    <h3 style={{textAlign: 'center',}}>User Information</h3>
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;