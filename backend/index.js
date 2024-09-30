const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Base URL for Dummy JSON API
const API_BASE_URL = 'https://dummyjson.com';

app.get('/api/categoryList', async (req, res) => {
    try {
        // ('https://dummyjson.com/products/category-list')
        const response = await axios.get(`${API_BASE_URL}/products/category-list`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products' });
    }
});



// 2. Fetch products
app.get('/api/products', async (req, res) => {
    const {limit , offset} = req.query;
    // console.log(limit)
    try {
        const response = await axios.get(`${API_BASE_URL}/products?limit=${limit}&offset=${offset}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// 3. Fetch product categories
app.get('/api/pro/:product', async (req, res) => {
    const { product } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/products/search?q=${product}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Error fetching categories' });
    }
});

// fetch('https://dummyjson.com/products/category-list')     --- for whole list of categories


app.get('/api/cat/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const response = await axios.get(`${API_BASE_URL}/products/category/${category}?limit=0`);

        const products = response.data.products;
        // Calculate the products to return based on limit and offset

        // const paginatedProducts = products.slice(offset, offset + limit);

        // res.json({
        //     products: paginatedProducts,
        //     total: products.length, // Send total count for frontend use
        // });
        
        res.json(response.data);

    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Error fetching categories' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});