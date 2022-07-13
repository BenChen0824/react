import React from 'react';
import products from './data/products.json';
import './MapDemo.css';

function table() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>picture</th>
                        <th>stock</th>
                        <th>price</th>
                        <th>tag</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((v, i) => {
                        return (
                            <tr key={v.id}>
                                <td>{v.name}</td>
                                <td>
                                    <img src={v.picture} alt="" />
                                </td>
                                <td>{v.stock}</td>
                                <td>{v.price}</td>
                                <td>{v.tags}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default table;
