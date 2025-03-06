import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/Card'
import axiosInstance from '../axios/axiosInstance'

function HomePage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosInstance.get("/product/get-products").then((res) => {
            console.log(res);
            setProducts(res.data)
        }).catch((err) => {
            alert("something went wrong")
        })
    }, [])
    return (
        <div>
            <Header />

            <div className="container">
                <div className="row mt-2 g-1">
                    {
                        products.map((product) => (
                            <div className="col-md-4">
                                <ProductCard item={product} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
