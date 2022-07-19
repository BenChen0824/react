// import CC from './CC';
import { useState } from 'react';
import FC from './FC';

function Parent() {
    const [isShow, setIsShow] = useState(true);

    return (
        <>
            {isShow && <FC />}
            <button
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                {isShow ? '移除' : '呈現'}
            </button>
        </>
    );
}

export default Parent;
