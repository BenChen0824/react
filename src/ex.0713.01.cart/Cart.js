import './Cart.css';
import OrderList from './components/OrderList';
import Payments from './components/Payments';
import { useState } from 'react';
import { products } from './components/data/products';

const initState = (productArray) => {
    const state = [];
    for (let i = 0; i < productArray.length; i++) {
        state.push({ ...productArray[i], count: 1 });
    }
    return state;
};

// 另一種短語句的技巧寫法
//const initState = (productArray) => Array(productArray.length).fill(1)

function OrderPage() {
    const [productsInOrder, setProductsInOrder] = useState(initState(products));
    const totalNum = () => {
        let total = 0;
        for (let i = 0; i < productsInOrder.length; i++) {
            total += productsInOrder[i].count;
        }
        return total;
    };
    const totalPrice = () => {
        let total = 0;
        for (let i = 0; i < productsInOrder.length; i++) {
            total += productsInOrder[i].count * productsInOrder[i].price;
        }
        return total;
    };
    return (
        <div className="card">
            <div className="row">
                <OrderList
                    productsInOrder={productsInOrder}
                    setProductsInOrder={setProductsInOrder}
                />
                <Payments totals={totalNum()} totalPrice={totalPrice()} />
            </div>
        </div>
    );
}

export default OrderPage;
