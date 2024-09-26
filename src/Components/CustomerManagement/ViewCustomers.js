import React, { useState } from 'react';

const ViewCustomers = () => {
    
    const [customers, setCustomers] = useState([
        { name: 'Aman', gender: 'Male', contact: '123-456-7890', email: 'aman@gmail.com' },
        { name: 'Rushi gade', gender: 'Female', contact: '987-654-3210', email: 'rushi@gmail.com' },
        { name: 'kunal aaher', gender: 'Female', contact: '555-678-1234', email: 'akunal@gmail.com' }
    ]);

    const [showForm, setShowForm] = useState(false); 
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        gender: '',
        contact: '',
        email: ''
    });

    const toggleForm = () => {
        setShowForm(!showForm); 
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCustomer((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]); 
        setNewCustomer({ name: '', gender: '', contact: '', email: '' });
        setShowForm(false); 
    };

  
    console.log(customers);

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">View Customers</h3>

            <div className="d-flex justify-content-between mb-4">
                <button onClick={toggleForm} className='btn btn-primary'>
                    {showForm ? 'Hide Form' : 'Add Customer'}
                </button>
            </div>

            <div className="row">
               
                <div className={`col-md-${showForm ? '6' : '12'}`}>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center">No customers available.</td>
                                    </tr>
                                ) : (
                                    customers.map((customer, index) => (
                                        <tr key={index}>
                                            <td>{customer.name}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.contact}</td>
                                            <td>{customer.email}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

               
                {showForm && (
                    <div className="col-md-6">
                        <div className="container mt-5">
                            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                                <h3 className="text-center mb-4">Add Customer</h3>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        name="name" 
                                        placeholder="Name" 
                                        className="form-control" 
                                        value={newCustomer.name}
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select 
                                        name="gender" 
                                        className="form-control" 
                                        value={newCustomer.gender}
                                        onChange={handleInputChange} 
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact">Contact</label>
                                    <input 
                                        name="contact" 
                                        placeholder="Contact" 
                                        className="form-control" 
                                        value={newCustomer.contact}
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        name="email" 
                                        type="email" 
                                        placeholder="Email" 
                                        className="form-control" 
                                        value={newCustomer.email}
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewCustomers;
