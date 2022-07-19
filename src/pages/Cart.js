import { useNavigate } from 'react-router-dom';

function Cart(props) {
    const navigate = useNavigate();
    const { auth } = props;
    return (
        <>
            <br />
            <button
                onClick={() => {
                    const newAuth = auth;
                    if (newAuth) {
                        return <h1>Cart</h1>;
                    } else {
                        alert('請先登入在結帳');
                        navigate('/login', { replace: true });
                    }
                }}
            >
                點擊結帳
            </button>
            ;
        </>
    );
}

export default Cart;
