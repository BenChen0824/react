import React, { useState } from 'react';

const objArray = [
    {
        id: 1,
        text: 'a',
    },
    {
        id: 2,
        text: 'b',
    },
    {
        id: 3,
        text: 'c',
    },
    {
        id: 4,
        text: 'aa',
    },
];

function App() {
    const [data, setData] = useState(objArray);

    return (
        <>
            <h1>物件陣列的各種操作</h1>
            <p>呈現資料</p>
            <table border="1">
                {data.map((v, i) => {
                    return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.text}</td>
                        </tr>
                    );
                })}
            </table>
            <hr />
            <button
                onClick={() => {
                    // 先寫出要新增的物件值
                    const newObj = { id: 99, text: 'xxx' };

                    // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                    // 2. 在新的變數值(陣列/物件)上作處理
                    // 3. 設定回原本的狀態中

                    //1 //2
                    const newData = [newObj, ...data];

                    //3
                    setData(newData);
                }}
            >
                陣列最前面新增一個物件值id為99與文字為xxx的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const newObj = { id: 88, text: 'yyy' };

                    //1 //2
                    const newData = [...data, newObj];

                    //3
                    setData(newData);
                }}
            >
                陣列最後面新增一個物件值id為88與文字為yyy的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const newData = data.filter(function (e) {
                        return e.text.indexOf('a') > -1;
                    });
                    setData(newData);
                }}
            >
                尋找(過濾)只呈現所有文字有a字母的
            </button>
            <br />
            <button
                onClick={() => {
                    const newData = data.filter(function (e) {
                        return e.text.indexOf('b') === -1;
                    });
                    setData(newData);
                }}
            >
                刪除文字為b的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const newData = data.filter((v) => {
                        return v.id !== 99;
                    });
                    setData(newData);
                }}
            >
                刪除id為99的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const newObj = { id: 5, text: 'bbb' };
                    const index = data.findIndex((v) => v.id === 2);
                    if (index > -1) {
                        const aArray = data.slice(0, index + 1);
                        const bArray = data.slice(index + 1);
                        const newData = [...aArray, newObj, ...bArray];
                        setData(newData);
                    }
                }}
            >
                在id為2後面插入id為5與文字為bbb的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const index = data.findIndex((v) => v.id === 3);
                    if (index > -1) {
                        const newData = data.map((v) => {
                            return { ...v };
                        });
                        newData[index].text = 'cccc';
                        setData(newData);
                    }
                }}
            >
                取代id為3的文字為cccc
            </button>
            <br />
            <button
                onClick={() => {
                    const ids = data.map((v) => v.id);
                    const index = Math.max(...ids) + 1;
                    const newObj = { id: index, text: 'xxx' };
                    const newData = [newObj, ...data];
                    setData(newData);
                }}
            >
                陣列最前面新增一個物件值id不重覆與文字為xxx的物件
            </button>
            <br />
            <button
                onClick={() => {
                    const ids = data.map((v) => v.id);
                    const index = Math.max(...ids) + 1;
                    const newObj = { id: index, text: 'yyy' };
                    const newData = [...data, newObj];
                    setData(newData);
                }}
            >
                陣列最後面新增一個物件值id不重覆與文字為yyy的物件
            </button>
        </>
    );
}

export default App;
