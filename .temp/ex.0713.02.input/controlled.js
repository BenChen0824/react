import { useState } from 'react';

function Controlled() {
    const [inputText, setInputText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [gender, setGender] = useState('');
    const genderOptions = ['male', 'female', 'other'];
    return (
        <>
            <section id="inputText">
                <h1>文字輸入框(input-text)</h1>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                />
            </section>
            <section id="textArea">
                <h1>文字輸入區域(textarea)</h1>
                <textarea
                    value={textArea}
                    onChange={(e) => {
                        setTextArea(e.target.value);
                    }}
                />
            </section>
            <section id="radio-group">
                <h1>性別</h1>
                {genderOptions.map((v, i) => {
                    return (
                        <span className="mx-3" key={i}>
                            <input
                                type="radio"
                                checked={gender === v}
                                //這邊如果gender(e.target.value) = 選到的map裡跌代的v值依樣 回傳true
                                //也就是會點選
                                value={v}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                            />
                            <label>{v}</label>
                        </span>
                    );
                })}
            </section>
        </>
    );
}

export default Controlled;
