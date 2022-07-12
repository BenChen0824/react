import Child from './Child';

function Parent() {
    return (
        <>
            <Child
                text="Hello React"
                value={123}
                aa={true}
                func={function () {
                    alert('Hello!!');
                }}
            />

            <Child
                aa={false}
                func={function () {
                    alert('NEW ONE!!');
                }}
            />
        </>
    );
}

export default Parent;
