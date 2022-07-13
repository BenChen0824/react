import { useState } from 'react';
function ChildB(props) {
    const [datachildB, setDataChildB] = useState('ChildB Data');
    return (
        <>
            <h2>Child B Data</h2>
            <button
                onClick={() => {
                    props.setDataFromChildB(datachildB);
                }}
            >
                ChildB Data Send
            </button>
        </>
    );
}

export default ChildB;
