import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import ViewCustomers from './Components/CustomerManagement/ViewCustomers';
import ViewProducts from './Components/InventoryManagement/ViewProducts';
import BillingWindow from './Components/Billing/BillingWindow';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<ViewCustomers />} />
                <Route path="/products" element={<ViewProducts />} />
                <Route path="/billing" element={<BillingWindow />} />
            </Routes>
        </Router>
    );
};

export default App;
