import ChildA from './ChildA';
import ChildB from './ChildB';
import { useState } from 'react';

function Parent() {
    const [parentData, setParentData] = useState('Parent Data');
    const [dataFromChildB, setDataFromChildB] = useState('');
    return (
        <>
            <h1>Parent</h1>
            <p>來自ChildB的資料 : {dataFromChildB}</p>
            <ChildA parentData={parentData} dataFromChildB={dataFromChildB} />
            <ChildB setDataFromChildB={setDataFromChildB} />
        </>
    );
}

export default Parent;
