import { useState } from 'react';

function Bmi() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const bmiAns = (height, weight) => {
        const ans = weight / (height * height);
        const answer = Math.round(ans * 1000000);
        return answer / 100;
    };
    return (
        <>
            <h1>BMI計算機</h1>
            <div>身高 (公分)</div>
            <input
                type="number"
                value={height}
                onChange={(e) => {
                    setHeight(e.target.value);
                }}
            />
            <div>體重 (公斤)</div>
            <input
                type="number"
                value={weight}
                onChange={(e) => {
                    setWeight(e.target.value);
                }}
            />

            <div>您的BMI數值為:{+bmiAns(height, weight)}</div>
        </>
    );
}

export default Bmi;
