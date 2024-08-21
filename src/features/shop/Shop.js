import React, { useState } from "react";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

export default function Shop() {
    const products = useSelector(state => state.backend.products)
    let highestPrice = 0
    products.map(p => {
        if (p.price > highestPrice) {
            highestPrice = p.price
        }
    })

    const allProducts = products.map(prod => (<ProductCard product={prod} key={prod.id} />))

    const [filteredProducts, setFilterProducts] = useState([])

    function sortProducts(data) {
        if (data.sortBy === 'Price: Low -> High') {
            return [...data.products].sort((a, b) => a.price - b.price)
        } else if (data.sortBy === 'Relevance') {
            return data.products
        } else if (data.sortBy === 'Price: High -> Low') {
            return [...data.products].sort((a,b) => b.price - a.price)
        }
    }


    function filterProducts(filterData) {
        const priceFilter = (filterData.pricePercent / 100) * highestPrice

        const filters = products.filter((prod) => {
            if (filterData.checked.includes(prod.product_type) && prod.price <= priceFilter) {
                return prod
            } else if (filterData.checked.includes(prod.product_type) && priceFilter === 0) {
                return prod
            } else if (filterData.checked.length === 0 && prod.price <= priceFilter) {
                return prod
            }
        })

        let cards = []
        if (filterData.sort && filters.length > 0) {
            const data = {
                sortBy: filterData.sort,
                products: filters
            }
            cards = sortProducts(data)
        } else if (filterData.sort && filters.length === 0){
            const data = {
                sortBy: filterData.sort,
                products: products
            }
            cards = sortProducts(data)
        }

        const v = cards.length > 0 ? cards : filters
        const returnValue = v.map((product) => <ProductCard product={product} key={product.id} />)

        setFilterProducts(returnValue)
    }

    const display = filteredProducts.length > 0 ? filteredProducts : allProducts

    return (
        <div>
            <Container className="productDisplayContainer">
            <Typography variant="h5" sx={{position:"relative", top:'5vh', left:'5%'}}>Displaying Results: {display.length}</Typography>
                {display}
            </Container>
            <Filters filterProducts={filterProducts} highestPrice={highestPrice} />
        </div>
    )
}
