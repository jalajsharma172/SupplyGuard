import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Optional: For styling
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <p className='head'>Welcome to the SupplyGuard!</p>
        <p className='subhead'>Let's get you started with marketing</p>
        <div className="manu">
          <p className="manu-head ">Start your journey by exploring our community spaces.</p>
          <div className="account">
      
            <Link to="/create/Manu_account" className ='Manu-acc'>Create Manufacturer Account</Link>
            <Link to="/create/User_account" className ='User-acc'>Create User Account</Link>
            </div>
        </div>
        <div class="container">
        <h1>How It Works</h1>
        <div class="steps">
            <div class="step step-1">
                <div class="icon">👥</div>
                <h2>Step 1</h2>
                <p>Create a Space</p>
                <p>Create a SpaceCreate a SpaceCreate a SpaceCreate a SpaceCreate a SpaceCreate a Space</p>
            </div>
            {/* <div class="step step-2">
                <div class="icon">🔒</div>
                <h2>Step 2</h2>
                <p>Setup Market</p>
                <p>Setup MarketSetup MarketSetup MarketSetup MarketSetup MarketSetup MarketSetup Market</p>
            </div> */}
            {/* <div class="step step-3">
                <div class="icon">🔒</div>
                <h2>Step 2</h2>
                <p>Setup Market</p>
                <p>Setup MarketSetup MarketSetup MarketSetup MarketSetup MarketSetup MarketSetup Market</p>
            </div> */}
       
        </div>
      </div>

   
    </div>

      
    </div>  
  );
};

export default Dashboard;