import { useState } from 'react';

function Controlled() {
    const [inputText, setInputText] = useState('');
    const [textArea, setTextArea] = useState('');
    const [gender, setGender] = useState('');
    const [car, setCar] = useState('');
    const genderOptions = ['male', 'female', 'other'];
    const carOptions = ['benz', 'volvo', 'toyota', 'nissan'];
    const [check, setCheck] = useState(false);
    const [multiCheck, setMultiCheck] = useState([]);
    const checkOptions = ['apple', 'banana', 'cherry'];

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
            <section id="select">
                <h1>下拉式選單</h1>
                <select
                    value={car}
                    onChange={(e) => {
                        setCar(e.target.value);
                    }}
                >
                    <option value="" disabled>
                        請選擇
                    </option>
                    {carOptions.map((v, i) => {
                        return (
                            <option key={i} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
            </section>
            <section id="checkbox-single">
                <h1>Checkbox-Single</h1>
                <input
                    type="checkbox"
                    value={check}
                    onChange={(e) => {
                        setCheck(e.target.checked);
                    }}
                ></input>
                <label>checkbox-Single</label>
            </section>
            <section id="checkbox-multiple">
                <h1>Checkbox-Multiple</h1>
                {checkOptions.map((v, i) => {
                    return (
                        <span key={i} className="mx-2">
                            <input
                                type="checkbox"
                                checked={multiCheck.includes(v)}
                                value={v}
                                onChange={(e) => {
                                    if (multiCheck.includes(e.target.value)) {
                                        const newmultiCheck = multiCheck.filter(
                                            (v, i) => {
                                                return v !== e.target.value;
                                            }
                                        );
                                        setMultiCheck(newmultiCheck);
                                    } else {
                                        const newmultiCheck = [
                                            ...multiCheck,
                                            e.target.value,
                                        ];
                                        setMultiCheck(newmultiCheck);
                                    }
                                }}
                            ></input>
                            <label>{v}</label>
                        </span>
                    );
                })}
            </section>
        </>
    );
}

export default Controlled;
