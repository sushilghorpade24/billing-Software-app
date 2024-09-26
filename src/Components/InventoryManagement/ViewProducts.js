import React, { useState } from 'react';


const ViewProducts = () => {
    const [showForm, setShowForm] = useState(false); // State to toggle the form
    const [products, setProducts] = useState([ // Pre-populated with dummy data
        {
            name: 'Laptop',
            price: 1000,
            quantity: 10,
            brand: 'Dell',
            supplier: 'TechSupplier Inc.',
            oldStock: 5,
            category: 'Electronics'
        },
        {
            name: 'Smartphone',
            price: 500,
            quantity: 25,
            brand: 'Samsung',
            supplier: 'MobileWare',
            oldStock: 10,
            category: 'Electronics'
        },
        {
            name: 'Desk Chair',
            price: 150,
            quantity: 50,
            brand: 'Ikea',
            supplier: 'FurnitureDepot',
            oldStock: 20,
            category: 'Furniture'
        }
    ]); // State to manage the list of products
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        brand: '',
        supplier: '',
        oldStock: '',
        category: ''
    });

    // Toggle form visibility
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Handle input changes in the form
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle form submission and add product to the list
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add the new product to the products state
        setProducts([...products, { ...product, price: parseFloat(product.price), quantity: parseInt(product.quantity) }]);

        // Reset the form after submission
        setProduct({
            name: '',
            price: '',
            quantity: '',
            brand: '',
            supplier: '',
            oldStock: '',
            category: ''
        });

        setShowForm(false); // Hide form after submission
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">View Products</h3>

            <div className="d-flex justify-content-between mb-4">
                <button onClick={toggleForm} className="btn btn-primary">
                    {showForm ? 'Hide Form' : 'Add Product'}
                </button>
            </div>

            <div className="row">
                <div className={`col-md-${showForm ? '6' : '12'}`}>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Brand</th>
                                    <th>Supplier</th>
                                    <th>Old Stock</th>
                                    <th>Category</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="text-center">No products available.</td>
                                    </tr>
                                ) : (
                                    products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>${product.price.toFixed(2)}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.brand}</td>
                                            <td>{product.supplier || 'N/A'}</td>
                                            <td>{product.oldStock || 'N/A'}</td>
                                            <td>{product.category || 'N/A'}</td>
                                            
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {showForm && (
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                            <h3 className="text-center mb-4">Add Product</h3>

                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input 
                                    name="name" 
                                    value={product.name}
                                    placeholder="Product Name" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input 
                                    name="price" 
                                    type="number" 
                                    value={product.price}
                                    placeholder="Price" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    value={product.quantity}
                                    placeholder="Quantity" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="brand">Brand</label>
                                <input 
                                    name="brand" 
                                    value={product.brand}
                                    placeholder="Brand" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="supplier">Supplier</label>
                                <input 
                                    name="supplier" 
                                    value={product.supplier}
                                    placeholder="Supplier" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="oldStock">Old Stock</label>
                                <input 
                                    name="oldStock" 
                                    type="number" 
                                    value={product.oldStock}
                                    placeholder="Old Stock" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input 
                                    name="category" 
                                    value={product.category}
                                    placeholder="Category" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Save</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewProducts;
