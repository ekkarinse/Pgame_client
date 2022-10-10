import { Link } from "react-router-dom";

const Dashboard = () => {
    return <div>
    <h1 id="name">Dashboard</h1>
    <button><Link to="/">Logout</Link></button>
    </div>;
};

export default Dashboard;
