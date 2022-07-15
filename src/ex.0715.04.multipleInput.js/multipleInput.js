import { useState } from 'react';

function MultipleInput() {
    const [userData, setUserData] = useState({
        myname: '',
        phone: '',
        email: '',
        gender: '',
        car: '',
        likeList: [],
    });
    const genderOptions = ['男', '女', '不提供'];
    const carOptions = ['Benz', 'BMW', 'Toyota'];
    const fruitOptions = ['西瓜', '芒果', '蘋果'];
    const handleData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <h1>多重欄位</h1>
            <label>姓名</label>
            <input
                name="myname"
                type="text"
                value={userData.myname}
                onChange={handleData}
            />
            <br />
            <label>電話</label>
            <input
                name="phone"
                type="text"
                value={userData.phone}
                onChange={handleData}
            />
            <br />
            <label>email : </label>
            <input
                name="email"
                type="text"
                value={userData.email}
                onChange={handleData}
            />
            <br />
            <label>性別</label>
            {genderOptions.map((v, i) => {
                return (
                    <span key={i}>
                        <input
                            name="gender"
                            type="radio"
                            checked={userData.gender === v}
                            value={v}
                            onChange={handleData}
                        />
                        <label>{v}</label>
                    </span>
                );
            })}
            <br />
            <label>喜好車子品牌</label>
            <select value={userData.car} name="car" onChange={handleData}>
                <option value="">請選擇</option>
                {carOptions.map((v, i) => {
                    return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                    );
                })}
            </select>
            <br />
            <label>喜好水果品牌</label>
            {fruitOptions.map((v, i) => {
                return (
                    <div key={i}>
                        <input
                            type="checkbox"
                            checked={userData.likeList.includes(v)}
                            name="likeList"
                            value={v}
                            onChange={(e) => {
                                //先判斷是否有在likeList狀態陣列中
                                if (
                                    userData.likeList.includes(e.target.value)
                                ) {
                                    // if有 -> 移出陣列
                                    const newLikeList =
                                        userData.likeList.filter((v, i) => {
                                            return v !== e.target.value;
                                        });

                                    setUserData({
                                        ...userData,
                                        likeList: newLikeList,
                                    });
                                } else {
                                    // else -> 加入陣列
                                    const newLikeList = [
                                        ...userData.likeList,
                                        e.target.value,
                                    ];

                                    setUserData({
                                        ...userData,
                                        likeList: newLikeList,
                                    });
                                }
                            }}
                        />
                        <label>{v}</label>
                    </div>
                );
            })}
        </>
    );
}

export default MultipleInput;
