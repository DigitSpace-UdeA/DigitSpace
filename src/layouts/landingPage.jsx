import Header from '../components/HeaderLogin';
import Footer from '../components/FooterLogin';
import SidebarLogin from '../components/SidebarLogin';
const LandingPage = ({children}) => {
    return(
        <div>
        <Header/>
        <SidebarLogin/>
        <main>{children}</main>
        <Footer/>
        </div>
    );
}

export default LandingPage;