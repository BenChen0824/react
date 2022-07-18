import { useRef } from 'react';

function RefsForm() {
    const inputRef = useRef(null);
    //利用refs主要原因為這個適用資料傳動，因此不會有產生相同id跑不了的狀況

    return (
        <>
            <h1>RefsForm</h1>
            <input type="text" ref={inputRef} />
            {/* 先設定參照 ref */}
            <button
                onClick={() => {
                    inputRef.current.focus();
                    //這邊呼叫參照並以current的狀態來進行調整
                }}
            >
                Focus
            </button>
            <button
                onClick={() => {
                    inputRef.current.blur();
                }}
            >
                Blur
            </button>
            <button
                onClick={() => {
                    alert(inputRef.current.value);
                }}
            >
                Show value
            </button>
        </>
    );
}

export default RefsForm;
