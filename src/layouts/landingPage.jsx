import Header from '../components/Header';
import Footer from '../components/Footer';

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