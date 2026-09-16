

import { useEffect } from 'react'
import { fetchProducts } from '../store/productSlice'
import { addItem} from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Products() {

    const dispatch = useDispatch();

    const {products,loading,error } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if(loading) return <p>products are loading..</p>
    if (error) return <p>{error} </p>
    if (!products.length) return <p>No products available.</p> 
    //if everything is ok 
    return (
        <div>
            <h1>Products.</h1>
            {
                products?.map(product=>(
                    <div key={product.id} className='productCard'>
                        <p>{product.title} </p>
                        <button onClick={()=>dispatch(addItem(product))}>Add to Cart</button>
                    </div>

                ))
            }
        </div>
    )
}
