import '../App.css';
import Navbar from "./Navbar";
import  Icon  from '../images/usericon.png';


const About = () => {


    return (
        <div className="">
            <Navbar></Navbar>

            <center>
            <div className="infoAlumno">
            <img className="imgNavbar" src={Icon} alt="" />
                <h3>Talamantes Castañeda Ángela María</h3>
                <p>Desarrollo Web Integral.</p>
                <p>IDGS 9°A</p>
                <p>191243</p>
                
            </div>
            </center>
        </div>
    )
}

export default About;