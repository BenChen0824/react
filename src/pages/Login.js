import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const { auth, setAuth } = props;
    return (
        <>
            <h1>Login</h1>
            <button
                onClick={() => {
                    const newAuth = !auth;
                    setAuth(newAuth);

                    if (newAuth) {
                        alert('歡迎登入');
                        navigate('/', { replace: true });
                    } else {
                        alert('謝謝!');
                    }
                }}
            >
                {auth ? 'LogOut' : 'LogIN'}
            </button>
            <p>{auth ? '會員已登入' : '沒登入'}</p>
        </>
    );
}

export default Login;
