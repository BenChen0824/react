//18年的微秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000 = 568036800000
// 使用者選了年月日後的微秒值
//new Date('2002/07/12') // 1026403200000
// 目前(現在)的微秒值
//new Date()
//568036800000
//1026403200000

// 2022年7月有幾天
import { useState } from 'react';

function Datecheck() {
    const [year, setYear] = useState('');
    let yearAR = [];
    for (let i = 1960; i <= 2022; i++) {
        yearAR.push(i);
    }

    const [month, setMonth] = useState('');
    let monthAR = [];
    for (let i = 1; i <= 12; i++) {
        monthAR.push(i);
    }
    const [date, setDate] = useState('');
    let dateAR = [];
    // if (month === '' || year === '') return [];
    for (let i = 1; i <= 31; i++) {
        dateAR.push(i);
    }

    const newdate = (a, b, c) => {
        const now = new Date();
        const datetime = `${a}/${b}/${c}`;
        const date = new Date(datetime);
        if (now - date > 568036800000) {
            console.log(now);
            console.log(now - date > 568036800000);
            return '大於18歲';
        } else {
            console.log(now);
            console.log(date);
            return '小於18歲';
        }
        // return <p>{date}</p>;
    };

    return (
        <>
            <div className="row">
                <section id="select" className="mx-3">
                    <select
                        value={year}
                        onChange={(e) => {
                            setYear(e.target.value);
                        }}
                    >
                        <option value="" disabled>
                            請選擇
                        </option>
                        {yearAR.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                    <span>年</span>
                </section>
                <section id="select" className="mx-3">
                    <select
                        value={month}
                        onChange={(e) => {
                            setMonth(e.target.value);
                        }}
                    >
                        <option value="" disabled>
                            請選擇
                        </option>
                        {monthAR.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                    <span>月</span>
                </section>
                <section id="select" className="mx-3">
                    <select
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    >
                        <option value="" disabled>
                            請選擇
                        </option>
                        {dateAR.map((v, i) => {
                            return (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            );
                        })}
                    </select>
                    <span>日</span>
                </section>
            </div>
            <div>{newdate(year, month, date)}</div>
        </>
    );
}

export default Datecheck;
