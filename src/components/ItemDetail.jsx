import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logger from "../Logs/logger";
import toast, { Toaster } from "react-hot-toast";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
import NTFsha from "../artifacts/contracts/NTFsha.sol/NTFsha.json";
var QRCode = require('qrcode.react');

var axios = require('axios');
var FormData = require('form-data');

require("dotenv").config()

function ItemDetail() {
    const [itemname, setItemName] = useState("");
    const [itemdescription, setItemDescription] = useState("");
    const [itemFile, setItemFile] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const { id } = useParams();
 
    useEffect(() => {
        axios.get("http://localhost:5000/api/detailbyid/"+id).then((response) => {
          setItemName(response.data.data.name);
          setItemDescription(response.data.data.description);
          setItemFile(response.data.data.imageUrl);
          setItemPrice(response.data.data.price);
        });
      }, []);
  
 return(
    <main className="main">
    {/* breadcrumb */}
    <div className="breadcrumb-area" style={{backgroundImage: 'url(assets/img/bg/page-title.jpg)'}}>
    <div className="container">
        <div className="breadcrumb-wrapper">
        <h1>Item Single</h1>
        <div>
            <ul className="breadcrumb">
            <li className="breadcrumb__item"><a href="index.html">Home</a></li>
            <li className="breadcrumb__item breadcrumb__item--active">Item Single</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    {/* end breadcrumb */}
    {/* item single */}
    <div className="item-single pt-70">
    <div className="container">
        <div className="row">
        {/* content */}
        <div className="col-12 col-xl-8">
            <div className="asset__item">
            <img src={itemFile} alt="" />
            {/* share */}
            <div className="share share--asset">
                <a href="#" className="share__link share__link--fb"> <i className="fab fa-facebook-f" />
                <span>share</span></a>
                <a href="#" className="share__link share__link--tw"> <i className="fab fa-twitter" />
                <span>tweet</span></a>
                <a href="#" className="share__link share__link--link"> <i className="far fa-link" /> <span>copy
                    link</span></a>
            </div>
            {/* end share */}
            {/* likes */}
            <button className="asset__likes" type="button">
                <i className="far fa-heart" />
                <span>100k</span>
            </button>
            {/* end likes */}
            </div>
        </div>
        {/* end content */}
        {/* sidebar */}
        <div className="col-12 col-xl-4">
            <div className="asset__info">
            <div className="asset__desc">
                <h2>{itemname}</h2>
            </div>
            <ul className="asset__authors">
                <li>
                <div className="card__price">
                    <span>Sale price</span>
                    <span className="text-danger fw-bolder">{itemPrice} ETH</span>
                </div>
                </li>
                
            </ul>
            {/* tabs */}
            <ul className="nav nav-tabs asset__tabs" role="tablist">
                <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab-33" role="tab" aria-controls="tab-33" aria-selected="false">Details</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-22" role="tab" aria-controls="tab-22" aria-selected="false">Bids</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="true">History</a>
                </li> */}
            </ul>
            <div className="tab-content">
                {/* details tab */}
                <div className="tab-pane fade show active" id="tab-33" role="tabpanel">
                <div className="asset__desc--tab">
                    <p>
                     {itemdescription}
                    </p>
                    <div className="asset__desc--content">
                    
                    {/* <div className="asset__desc-list">
                        <span> <i className="far fa-clock" />Created </span>
                        <span> 25 Sep 2021 </span>
                    </div> */}
                    
                    </div>
                </div>
                </div>
                {/* bid tab */}
                <div className="tab-pane fade" id="tab-22" role="tabpanel">
                <div className="asset__actions">
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/8.jpg" alt="" />
                    <p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br />by <a href="author.html">@kimberly28</a></p>
                    </div>
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/9.jpg" alt="" />
                    <p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br />by <a href="author.html">@nessler520</a></p>
                    </div>
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/10.jpg" alt="" />
                    <p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br />by <a href="author.html">@kimberly120</a></p>
                    </div>
                </div>
                </div>
                {/* history tab */}
                <div className="tab-pane fade" id="tab-11" role="tabpanel">
                <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll">
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/8.jpg" alt="" />
                    <p>Bid placed for <b>12.00 ETH</b> 2 hours ago <br />by <a href="author.html">@kimberly28</a></p>
                    </div>
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/9.jpg" alt="" />
                    <p>Bid placed for <b>9.25 ETH</b> 3 hours ago <br />by <a href="author.html">@nessler520</a></p>
                    </div>
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/10.jpg" alt="" />
                    <p>Bid placed for <b>10.21 ETH</b> 4 hours ago <br />by <a href="author.html">@kimberly120</a></p>
                    </div>
                    <div className="asset__action asset__action--verified">
                    <img src="assets/img/avatars/11.jpg" alt="" />
                    <p>Bid placed for <b>12.21 ETH</b> 6 hours ago <br />by <a href="author.html">@humphrey124</a></p>
                    </div>
                </div>
                </div>
            </div>
            {/* end tabs */}
            {/* actions */}
            <div className="asset__btns">
                <button className="asset__btn" type="button">Buy - {itemPrice} ETH</button>
                {/* <a href="#modal-bid" className="asset__btn asset__btn2 open-modal">Place a bid</a> */}
            </div>
            {/* end actions */}
            </div>
        </div>
        {/* end sidebar */}
        </div>
       
    </div>
    </div>
    {/* end item single */}
    </main>
    )
}

export default ItemDetail;