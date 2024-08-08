import React from 'react'
import  './classic.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import Track1 from './boatpics/tractpand1.webp'
import Track2 from './boatpics/tractpand2.webp'
import Track3 from './boatpics/tractpand3.webp'
import Track4 from './boatpics/tractpand4.webp'

import Track5 from './boatpics/tractpand55.webp'
import Track6 from './boatpics/tractpand6.webp'
import Track7 from './boatpics/tractpand7.webp'
import Track8 from './boatpics/tractpand8.webp'

import Track9 from './boatpics/tractpand9.webp'
import Track10 from './boatpics/tractpand10.webp'
import Track11 from './boatpics/tractpand11.webp'
import Track12 from './boatpics/tractpand12.webp'



const data1=[
    { pname: 'Cargo Pant in Green for Mens with double pocket',     price: '₹199', del: '₹399', size: 'M  L  XL', hour: '50%',                    image1:Track1,id:'tr1'},
    { pname: 'Regular Fit Men`s Solid 400 Lycra Pant - LIGHT GREY', price: '₹299', del: '₹799', size: 'M  L', hour: '50%', color1: 'grey',                 image1:Track2,id:'tr2'},
    { pname: 'Regular Fit Men`s Solid 400 Lycra Pant - LIGHT GREEN',price: '₹299', del: '₹799',size: 'S  M  L  XL', hour: '50%',       image1:Track3,id:'tr3'},
    { pname: 'Regular Fit Men`s Solid 400 Lycra Pant - ICE BLUE',   price: '₹299', del: '₹799', size: 'M  XL', hour: '50%', color1: 'red',   image1:Track4,id:'tr4'},

]
const data2=[
    { pname: 'Men`s Stylish Regular Fit Cargo Pant - OLIVE GREEN',     price: '₹199', del: '₹399', size: 'M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Track5            ,id:'tr5'},
    { pname: 'Men`s Stylish Regular Fit Cargo Pant - BOTTOL GREEN',    price: '₹199', del: '₹399', size: 'M  L', hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Track6                       ,id:'tr6'},
    { pname: 'Men`s Stylish Regular Fit Cargo Pant -  MEHANDHI GREEN', price: '₹199', del: '₹399',size: 'S  M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1:Track7,id:'tr7'},
    { pname: 'Men`s Stylish Regular Fit Cargo Pant - PISTA GREEN',     price: '₹199', del: '₹399', size: 'M  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1:Track8           ,id:'tr8'},

]
const data3=[
    { pname: 'Men`s Casual Daily Wear Track Pant - Blue',  price:  '₹199', del: '₹719', size: 'M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Track9              ,id:'tr9' },
    { pname: 'Men`s Casual Daily Wear Track Pant - Green', price: '₹199', del: '₹719', size: 'M  L', hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Track10                        ,id:'tr10' },
    { pname: 'Men`s Casual Daily Wear Track Pant - Black', price: '₹199', del: '₹719',size: 'S  M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1:Track11 ,id:'tr11' },
    { pname: 'Men`s Casual Daily Wear Track Pant - White', price: '₹199', del: '₹719', size: 'M  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Track12           ,id:'tr12' },

]
export default function track() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/items/${id}`);
    };
  return (
    <div>
      
      <div className="container-Card">
                <h2>Printed<span> Off Sleave</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1">
                    <div className='main-box' data-aos="fade-right">
                        {
                            data1.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>

                                            </div>
                                            <div className='product-price'>
                                                <h5> <del>{data.del}</del> {data.price}  </h5>
                                                <p className='size'>Size: {data.size}</p>
                                            </div>
                                            <div className="cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>



            <div className="container-Card">
                <h2>Printed<span> Off Sleave</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1">
                    <div className='main-box' >
                        {
                            data2.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>

                                            </div>
                                            <div className='product-price'>
                                                <h5> <del>{data.del}</del> {data.price}  </h5>
                                                <p className='size'>Size: {data.size}</p>
                                            </div>
                                            <div className="cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            <div className="container-Card">
                <h2>Printed<span> Off Sleave</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            data3.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>

                                            </div>
                                            <div className='product-price'>
                                                <h5> <del>{data.del}</del> {data.price}  </h5>
                                                <p className='size'>Size: {data.size}</p>
                                            </div>
                                            <div className="cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}
