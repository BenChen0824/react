import React from 'react';
import { data } from './data/student';

//注意! 這邊的名稱一定是大寫開頭 不然會報錯

function MapDemo() {
  return (
    <>
      <h1>Map Demo</h1>
      <ul>
        {/* key的選擇 (一定要記得放key)*/
        /* 資料有id用id */
        /* 沒id用uuid或nanoid */
        /* 完全不會再變動才能用索引值 */}
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>

      <h2>Table Demo</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MapDemo;
