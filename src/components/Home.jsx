import Navbar from "./Navbar";
import '../App.css';
import  Index  from '../images/fondo.jpg';


const Home = () => {


    return (
        <div>
            <Navbar></Navbar>

            <div>
            <img className="imgHome" src={Index} alt="" />
            </div>
        </div>
    )
}

export default Home;