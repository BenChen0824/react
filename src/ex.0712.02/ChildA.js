function ChildA(props) {
    return (
        <>
            <h2>Child A Data</h2>
            <p>{props.parentData}</p>

            <h2>Child B傳給Child A</h2>
            <p>來自C-C的資料 : {props.dataFromChildB}</p>
        </>
    );
}

export default ChildA;
