import {useNavigate} from 'react-router-dom';
import Footer from '../components/footer';

function Main(){

    const navigate = useNavigate();

    const goToHelloWorld = () => {
        navigate("/helloWorld");
    }

    return(
        <>
            <p>This is tha Main</p>
            <button onClick={goToHelloWorld}>Go to Hello World</button>
            <Footer />
        </>
    );
}

export default Main;