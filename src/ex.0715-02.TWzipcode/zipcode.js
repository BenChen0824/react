import { useState } from 'react';
import { countries, townships, postcodes } from './data/townships';
function TWZipCode() {
    // 範例資料

    const [countryIndex, setCountryIndex] = useState(-1);
    const [townShipIndex, setTownShipIndex] = useState(-1);
    return (
        <>
            <h1>台灣鄉鎮市區域連動</h1>
            <select
                value={countryIndex}
                onChange={(e) => {
                    setCountryIndex(+e.target.value);

                    // 重置townshipIndex的值為-1
                    setTownShipIndex(-1);
                }}
            >
                <option value={-1}>--請選擇--</option>
                {countries.map((v, i) => {
                    return (
                        <option value={i} key={i}>
                            {v}
                        </option>
                    );
                })}
            </select>
            <select
                value={townShipIndex}
                onChange={(e) => {
                    setTownShipIndex(+e.target.value);
                }}
            >
                <option value={-1}>--請選擇--</option>
                {countryIndex !== -1 &&
                    townships[countryIndex].map((v, i) => {
                        return (
                            <option key={i} value={i}>
                                {v}
                            </option>
                        );
                    })}
            </select>
            <p>
                郵遞區號:
                {countryIndex > -1 &&
                    townShipIndex > -1 &&
                    postcodes[countryIndex][townShipIndex]}
            </p>
        </>
    );
}

export default TWZipCode;
