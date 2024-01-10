import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><img src='https://i.pinimg.com/originals/50/b0/f8/50b0f8e79cc6b0e458e2cbba932720d8.png' id='slogo'></img></div>
            <div onClick={() => props.handleShow(true)}> <i class="fa-solid fa-cart-shopping" id='carticon'></i>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;