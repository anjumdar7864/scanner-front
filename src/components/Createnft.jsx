import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logger from "../Logs/logger";
import toast, { Toaster } from "react-hot-toast";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
import NTFsha from "../artifacts/contracts/NTFsha.sol/NTFsha.json";
var QRCode = require('qrcode.react');

var axios = require('axios');
var FormData = require('form-data');

require("dotenv").config()

function Createnft() {
  
  const { library, account } = useWeb3React();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [API_URL,setAPI_URL] = useState(process.env.API_URL)
  const [itemname, setItemName] = useState("");
  const [itemdescription, setItemDescription] = useState("");
  const [itemFile, setItemFile] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const { wallet } = useSelector(state => state);
  const [PUBLIC_KEY, setWalletaddress] = useState("");
  const [nftResponse, setNftresponse] = useState("");
  const [baseurl, setBaseurl] = useState("http://localhost:3001/itemdetails/");

  const limit = 12;
  //const PUBLIC_KEY = "0xDf26e11916aeE3BE457FcB98956304d15fc3E407"
  const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/NuomHcyU1hTb_Yq4XSmPqHYb2CuA-VOA")
  const PRIVATE_KEY = "ddc40d31fc12febf1c7010f428fcba741738291f559a9d27488bd688e5fcb3a3"
  const contractAddress = "0x15350dC9e0FF98c2cB702841dE50a27f9CcAC163";
  const nftContract = new web3.eth.Contract(NTFsha.abi, contractAddress)

  useEffect(() => {
    try {
      console.log(wallet.walletdetails);
      if(wallet.walletdetails){
        setWalletaddress(wallet.walletdetails[0])
      }
    } catch (error) {
      logger.error(error);
    }
  }, [wallet]);

  async function mintNFT(tokenURI) {
  
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    }   
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              )
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              )
            }
          }
        )
      })
      .catch((err) => {
        console.log("Promise failed:", err)
      })
  }

  const submitButton = async(e) => {
   
    var data = new FormData();
    data.append('file', itemFile);
    
    var config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: { 
        'pinata_api_key': '8f083e568565d420a818', 
        'pinata_secret_api_key': '95066398e090165b485d54031e8dc0750a97dabcdd8a6904bf7635ea1e94fc8d'
      },
      data : data
    };
    
   const dataupload =  await axios(config);
   if(dataupload){
    //await pinmetajson(itemname,itemdescription,"https://gateway.pinata.cloud/ipfs/"+dataupload.data.IpfsHash)
    const respnftData = await savenftdata(itemname,itemPrice,itemdescription,"https://gateway.pinata.cloud/ipfs/"+dataupload.data.IpfsHash,PUBLIC_KEY);
    setNftresponse(respnftData)
   }
   
   //await mintNFT("https://gateway.pinata.cloud/ipfs/QmfNGBBV9BK8q96gMkJkws5Q12QY7LuzNt5cX6s8R3PCKz");
  }
  
  function pinmetajson(name,description,imagePath){

    var data = JSON.stringify({
      "description": description,
      "image": imagePath,
      "name": name
    });
    
    var config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: { 
        'pinata_api_key': '8f083e568565d420a818', 
        'pinata_secret_api_key': '95066398e090165b485d54031e8dc0750a97dabcdd8a6904bf7635ea1e94fc8d', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
    
      mintNFT("https://gateway.pinata.cloud/ipfs/"+response.data.IpfsHash);

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  async function savenftdata(name,price,description,imageurl,address){
   var result = "";
    var data = JSON.stringify({
      "name": name,
      "price": price,
      "description": description,
      "imageUrl": imageurl,
      "userAddress": address
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/create',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
   const nftresp = await  axios(config);
   return nftresp;

  }
  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
      <main className="main">
        <div className="main__author"  style={{backgroundImage: `url("img/authors/banner.jpg")`}} />
        <div className="container">
          <div className="row row--grid">
            { PUBLIC_KEY ?
              
                <div className="col-12 col-xl-9">
                  <div className="main__title main__title--create">
                    <h2>Create New Item</h2>
                  </div>
                  <form  className="sign__form sign__form--create">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="sign__title">Upload file</h4>
                      </div>
                      <div className="col-12">
                        <div className="sign__file">
                          <label id="file1" htmlFor="sign__file-upload"> <i className="far fa-upload" /> Upload File (e. g. Image, Audio, Video) </label>
                          <input data-name="#file1" id="sign__file-upload" name="file" onChange={e => setItemFile(e.target.files[0])} className="sign__file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" />
                        </div>
                      </div>
                      <div className="col-12">
                        <h4 className="sign__title">Item details</h4>
                      </div>
                      <div className="col-12">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="itemname">Item name</label>
                          <input id="itemname" type="text" name="itemname"  value={itemname} onChange={e => setItemName(e.target.value)}  className="sign__input" placeholder="e. g. 'Fantacy Flower'" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="description">Description</label>
                          <textarea id="description" name="description"  onChange={e => setItemDescription(e.target.value)} className="sign__textarea" placeholder="Description of the NFT" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="price">Price</label>
                          <input type="text" id="price" name="price"  onChange={e => setItemPrice(e.target.value)} className="sign__input" placeholder="Price" />
                        </div>
                      </div>

                      <div className="col-12 col-xl-3">
                        <button type="button" className="sign__btn" onClick={submitButton}>Create item</button>
                      </div>
                    </div>
                  </form>
                </div>
                
                  : 
                <div className="col-12 col-xl-9">
                    <h2> Connect Your wallet</h2>
                </div>
              }
          </div>
          {nftResponse!=="" ?
            <div>
            <QRCode
              id="123456"
              value={baseurl+nftResponse.data.data._id}
              size={290}
              level={"H"}
              includeMargin={true}
            />
            <a onClick={downloadQR}> Download QR </a>
          </div>:<></>
          }
        </div>
      </main>
      );
    }
    
export default Createnft;