import ProductItem from './ProductItem';
// import { products } from '../data/products';

function OrderList(props) {
    const { productsInOrder, setProductsInOrder } = props;
    return (
        <>
            <div className="col-md-8 cart">
                <div className="title">
                    <div className="row">
                        <div className="col">
                            <h4>
                                <b>訂購單</b>
                            </h4>
                        </div>
                        <div className="col align-self-center text-right text-muted">
                            {productsInOrder.length}種商品項目
                        </div>
                    </div>
                </div>
                {productsInOrder.map((v, i) => {
                    /*{ const { id, category, imgURL, name, price } = v; }*/
                    return (
                        <ProductItem
                            key={v.id}
                            // count={v.count} 因為v裡已有count屬性
                            {...v}
                            removeItem={() => {
                                const newProductsInOrder =
                                    productsInOrder.filter((v2, i2) => {
                                        return v.id !== v2.id;
                                    });
                                setProductsInOrder(newProductsInOrder);
                            }}
                            //這邊會傳輸一個參數是newCount是子層回傳回來的 利用解構附值定義一個新的陣列變數為newCounts
                            //將裡面每個值做確認如果<1讓他留在1

                            //確認完後將整個陣列作為設定值丟回去給setTotals
                            setTotal={(newCount) => {
                                const newProductsInOrder = productsInOrder.map(
                                    (v2, i2) => {
                                        return { ...v2 };
                                    }
                                );
                                newProductsInOrder[i].count =
                                    newCount < 1 ? 1 : newCount;

                                setProductsInOrder(newProductsInOrder);
                            }}
                        />
                        // -------------------
                        // 也可以用map寫 和上面同功能
                        // const newCounts = counts.map((v2, i2) => {
                        //   if (i2 === i) return newCount < 1 ? 1 : newCount
                        //   return v2
                        // })

                        // setCounts(newCounts)

                        // --------------------
                        // 也可以寫一整句，非常難以閱讀的程式碼
                        // setCounts(
                        //   counts.map((v2, i2) =>
                        //     i2 === i ? (newCount < 1 ? 1 : newCount) : v2
                        //   )
                        // )
                    );
                    /*return (
                        <ProductItem
                            key={id}
                            id={id}
                            category={category}
                            imgURL={imgURL}
                            name={name}
                            price={price}
                        />
                    );*/
                })}

                <div className="back-to-shop">
                    <a href="#/">←</a>
                    <span className="text-muted">回到商品頁</span>
                </div>
            </div>
        </>
    );
}

export default OrderList;
