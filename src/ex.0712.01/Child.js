function Child(props) {
    const { text, value, aa, func } = props;
    return (
        <>
            <h1>{text}</h1>
            <br />
            <h2>{value}</h2>
            <p>{JSON.stringify(aa)}</p>
            <button onClick={func}>click me</button>
        </>
    );
}

Child.defaultProps = {
    text: '預設值',
    value: 23123,
};

export default Child;
