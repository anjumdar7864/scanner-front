import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {storeWallet} from "../../store/storewallet"

const Headerhome = () => {

    const { wallet } = useSelector(state => state);
    const dispatch = useDispatch();
    function isMobileDevice() {
      return 'ontouchstart' in window || 'onmsgesturechange' in window;
    }
    
    
    
  async function checkIfWalletIsConnected() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
    
        if (accounts.length > 0) {
          const account = accounts[0];
          dispatch(storeWallet(accounts))
          return;
        }
    
        if (isMobileDevice()) {
          await connect();
        }
      }
    }
    
    const connect = async(e) => {
      if (!window.ethereum) {
        alert("Get MetaMask!");
        return;
      }
  
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
  
      const balance = await window.ethereum.request({
        method: 'eth_getBalance', params: [accounts[0], 'latest']
      });
    
      dispatch(storeWallet(accounts))
    }
  
    useEffect(() => {
      checkIfWalletIsConnected();
    }, []);


    return (
       <React.Fragment>
        <div class="preloader">
          <span class="loader"></span>
        </div>
       
        <header class="header">
            <div class="header__content">
                <div class="header__logo">
                    <a href="index.html">
                        <img src="assets/img/logo/logo-light.png" alt=""/>
                    </a>
                </div>
                <div class="header__menu">
                    <ul class="header__nav">
                        <li class="header__nav-item">
                            <Link class="header__nav-link" to="/">Home</Link>
                        </li>
                        
                       
                    </ul>
                </div>
    
                <div class="header__actions">
                    {/* <div class="header__action header__action--search">
                        <button class="header__action-btn" type="button"><i class="far fa-search"></i></button>
                    </div> */}
    
                    <div class="header__action header__action--profile">
                        <button className='btn-success' onClick={connect}>Connect Wallet</button>
    
                        {/* <ul class="dropdown-menu header__profile-menu slideIn">
                            <li><Link to="/profile"><i class="far fa-user"></i> <span>Profile</span></Link></li>
                            <li><Link to="/profile"><i class="far fa-list-ul"></i> <span>Activity</span></Link></li>
                            <li><Link to="/create-nft"><i class="far fa-layer-plus"></i> <span>Add Item</span></Link></li>
                            <li><Link to="/profile"><i class="far fa-cog"></i> <span>Settings</span></Link></li>
                            <li><a href="#"><i class="far fa-sign-out-alt"></i> <span>Sign out</span></a></li>
                        </ul> */}
                    </div>
                </div>
    
                <button class="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
      </React.Fragment>
    );
};
export default Headerhome;