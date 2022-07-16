import '../App.css';
import Navbar from "./Navbar";
import  Icon  from '../images/usericon.png';
import { useTranslation } from 'react-i18next';



const About = () => {
    
    const { i18n, t } = useTranslation();


    return (
        <div className="">
            <Navbar></Navbar>

            <center>
            <div className="infoAlumno">
            <img className="imgNavbar" src={Icon} alt="" />
                <h3><i>{t("Name")}:</i> Talamantes Castañeda Ángela María.</h3>
                <p><b>{t("Subject")}:</b> {t("Comprehensive Web Development")}.</p>
                <p><b>{t("Carrier/Degree/Group")}:</b> IDGS 9°A.</p>
                <p><b>{t("Enrollment")}:</b> 191243.</p>
                
            </div>
            </center>
        </div>
    )
}

export default About;