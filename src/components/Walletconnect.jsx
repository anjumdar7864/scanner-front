import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {storeWallet} from "../store/storewallet"


function Walletconnect () {
  
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

  // useEffect(() => {
  //   onAddressChanged(userAddress);
  // }, [userAddress]);


    return (
      <main className="main">
        {/* breadcrumb */}
        <div className="breadcrumb-area" style={{backgroundImage: `url("img/bg/page-title.jpg")`}}>
          <div className="container">
            <div className="breadcrumb-wrapper">
              <h1>Wallet Connect</h1>
              <div>
                <ul className="breadcrumb">
                  <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb__item breadcrumb__item--active">Wallet Connect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}
        {/* wallet-connect */}
        <div className="wallet-connect">
          <div className="container">
            <div className="row row--grid">
              {/* title */}
              <div className="col-12 col-xl-8">
                <div className="main__title">
                  <h2>Available Wallet Providers</h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                  </p>
                </div>
              </div>
              {/* end title */}
              <div className="row row--grid mt-4">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/06.png" alt="" />
                    <h3 className="wallet__title"><a onClick={connect}>Meta Mask</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/07.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Binance</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/08.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Formetic</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/01.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Autherum</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/02.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Bitski</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/03.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Coinbase</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/04.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Dapper</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="wallet__single">
                    <img src="img/wallet-icon/05.png" alt="" />
                    <h3 className="wallet__title"><a href="#">Portis</a></h3>
                    <p className="wallet__text">
                      It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end wallet-connect */}
      </main>
      );
    };

function Address({ userAddress }) {
  return (
    <span >{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
  );
  
}
export default Walletconnect;