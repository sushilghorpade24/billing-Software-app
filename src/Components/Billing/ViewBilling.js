import React, { useState } from 'react';

const ViewBilling = () => {
    const initialBillings = [
        { id: 1, customer: 'Ramesh', products: [{ name: 'Laptop', quantity: 2, totalAmount: 55555 }] },
        { id: 2, customer: 'Sham', products: [{ name: 'Mobile', quantity: 5, totalAmount: 1999 }] },
        { id: 3, customer: 'Amin', products: [{ name: 'Pendrive', quantity: 3, totalAmount: 570 }] },
    ];

    const [billings, setBillings] = useState(initialBillings);
    const [billing, setBilling] = useState({
        customer: '',
        products: [{ name: '', quantity: 1, totalAmount: 0 }],
    });
    const [showForm, setShowForm] = useState(false);
    const [selectedBilling, setSelectedBilling] = useState(null);

    const customers = ['Ramesh', 'Sunil', 'Amit', 'Parth'];
    const productsList = ['Headphones', 'Phone', 'Laptop', 'Pendrive'];

    const readForm = (event, index) => {
        const { name, value } = event.target;
        const parsedValue = name === 'quantity' || name === 'totalAmount' ? Number(value) : value;
        if (name === 'customer') {
            setBilling(prev => ({ ...prev, customer: parsedValue }));
        } else {
            const updatedProducts = [...billing.products];
            updatedProducts[index] = { ...updatedProducts[index], [name]: parsedValue };
            setBilling(prev => ({ ...prev, products: updatedProducts }));
        }
    };

    const addProductField = () => {
        setBilling(prev => ({
            ...prev,
            products: [...prev.products, { name: '', quantity: 1, totalAmount: 0 }],
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newBilling = {
            id: billings.length + 1,
            ...billing,
        };
        setBillings(prev => [...prev, newBilling]);
        alert('Bill Added Successfully');
        setBilling({ customer: '', products: [{ name: '', quantity: 1, totalAmount: 0 }] });
        setShowForm(false);
    };

    const onPrint = () => {
        const lastBilling = billings[billings.length - 1];
        setSelectedBilling(lastBilling);
        window.print();
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">View Billings</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Products</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {billings.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center">No billings available.</td>
                                    </tr>
                                ) : (
                                    billings.map((billing, index) => (
                                        <tr key={index}>
                                            <td>{billing.id}</td>
                                            <td>{billing.customer}</td>
                                            <td>
                                                {billing.products.map((product, idx) => (
                                                    <div key={idx}>
                                                        {product.name} (x{product.quantity}) - ${product.totalAmount.toFixed(2)}
                                                    </div>
                                                ))}
                                            </td>
                                            <td>
                                                ${billing.products.reduce((sum, product) => sum + product.totalAmount, 0).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-md-6">
                    <button 
                        className="btn btn-success mb-4"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'Hide Form' : 'Add Billing'}
                    </button>

                    {showForm && (
                        <form onSubmit={onSubmit} className="border p-4 rounded shadow">
                            <h3 className="text-center">Add Billing</h3>
                            
                            <div className="form-group">
                                <label htmlFor="customer">Customer</label>
                                <select 
                                    name="customer" 
                                    className="form-control" 
                                    onChange={readForm} 
                                    required
                                    value={billing.customer}
                                >
                                    <option value="">Select Customer</option>
                                    {customers.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {billing.products.map((product, index) => (
                                <div key={index} className="mb-3">
                                    <h5>Product {index + 1}</h5>
                                    <div className="form-group">
                                        <label htmlFor="product">Product</label>
                                        <select 
                                            name="name" 
                                            className="form-control" 
                                            onChange={(e) => readForm(e, index)}
                                            required
                                            value={product.name}
                                        >
                                            <option value="">Select Product</option>
                                            {productsList.map((item, idx) => (
                                                <option key={idx} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input 
                                            name="quantity" 
                                            type="number" 
                                            className="form-control" 
                                            onChange={(e) => readForm(e, index)} 
                                            value={product.quantity} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="totalAmount">Total Amount</label>
                                        <input 
                                            name="totalAmount" 
                                            type="number" 
                                            className="form-control" 
                                            onChange={(e) => readForm(e, index)}
                                            value={product.totalAmount} 
                                            required 
                                        />
                                    </div>
                                </div>
                            ))}

                            <button type="button" className="btn btn-secondary mb-3" onClick={addProductField}>
                                Add Another Product
                            </button>

                            <button type="submit" className="btn btn-primary btn-block">
                                Save Billing
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-info" onClick={onPrint} disabled={!billings.length}>
                    Print Bill
                </button>
            </div>

            {selectedBilling && (
                <div className="print-preview" style={{ display: 'none' }}>
                    <h3>Billing Details</h3>
                    <p>Customer: {selectedBilling.customer}</p>
                    <p>Products:</p>
                    <ul>
                        {selectedBilling.products.map((product, index) => (
                            <li key={index}>
                                {product.name} (x{product.quantity}) - ${product.totalAmount.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <p>Total Amount: ${selectedBilling.products.reduce((sum, product) => sum + product.totalAmount, 0).toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default ViewBilling;
