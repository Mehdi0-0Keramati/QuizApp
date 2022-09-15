import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {
    return (
        <Link to={"/infoQuiz"} className="start-button">
            Start Game
        </Link>
    );
}

export default Home;