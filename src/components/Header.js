// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Salut, je m'appelle Tristan</h1><br/>
                <p>Développeur junior blockchain | react | next </p>
                <button className='button'>Rentrez en contact</button>
            </div>
        </section>
    );
}

export default Header;