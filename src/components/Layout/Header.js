import './Header.css';
import HeaderCartButton from './HeaderCartButton';


function Header(props) {
    return (
        <header className='header'>
            <h1 >foodyBaba</h1>
            <HeaderCartButton onClick={props.onShowCart} />

        </header>
    )
};

export default Header;