import Header from '../components/HeaderLogin';
import Footer from '../components/FooterLogin';

const LandingPage = ({children}) => {
    return(
        <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </div>
    );
}

export default LandingPage;