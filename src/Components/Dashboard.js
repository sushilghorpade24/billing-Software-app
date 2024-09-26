import React from 'react';

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Billing Dashboard</h2>
            
            {/* Welcome Message */}
            <div className="alert alert-info text-center" role="alert">
                Welcome to the Billing Dashboard! Here you can find an overview of your sales performance and customer metrics.
            </div>

            <div className="row">
                {/* Total Sales Card */}
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-success shadow-sm h-100"> {/* Changed to bg-success */}
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <h5 className="card-title">Total Sales</h5>
                                <h3 className="card-text">5,432,876</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Revenue Card */}
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-primary shadow-sm h-100"> {/* Changed to bg-primary */}
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <h5 className="card-title">Total Revenue</h5>
                                <h3 className="card-text">8,721,300</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Customers Card */}
                <div className="col-md-4 mb-4">
                    <div className="card text-white bg-info shadow-sm h-100"> {/* Changed to bg-info */}
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                                <h5 className="card-title">Global Customers</h5>
                                <h3 className="card-text">1,235,678</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center">Quick Stats</h5>
                            <p className="text-center">Here are some quick stats about your recent performance:</p>
                            <ul>
                                <li><strong>New Customers Today:</strong> 250</li>
                                <li><strong>Orders Completed Today:</strong> 120</li>
                                <li><strong>Average Order Value:</strong> $100.50</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
