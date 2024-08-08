import React from 'react'
import  './classic.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


import Hoodie1 from './boatpics/hoodie1.webp'
import Hoodie2 from './boatpics/hoodie2.webp'
import Hoodie3 from './boatpics/hoodie3.webp'
import Hoodie4 from './boatpics/hoodie4.webp'

import Hoodie5 from './boatpics/hoodie5.webp'
import Hoodie6 from './boatpics/hoodie6.webp'
import Hoodie7 from './boatpics/hoodie7.webp'
import Hoodie8 from './boatpics/hoodie8.webp'

import Hoodie9 from './boatpics/hoodie9.webp'
import Hoodie10 from './boatpics/hoodie10.webp'
import Hoodie11 from './boatpics/hoodie11.webp'
import Hoodie12 from './boatpics/hoodie12.webp'

const data2=[
    { pname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - GREY',       price: '₹299', del: '₹599', size: 'M  L  XL',  hour: '50%',   id:'h5',     image1: Hoodie1 },
    { pname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - NAVY BLUE',  price: '₹299', del: '₹599', size: 'M  L', hour: '50%',        id:'h6',     image1: Hoodie2},
    { pname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - BLACK',      price: '₹299', del: '₹599', size: 'S  M  L  XL', hour: '50%', id:'h7',     image1:Hoodie3},
    { pname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - MAROON',     price: '₹299', del: '₹599', size: 'M  XL', hour: '50%',       id:'h8',     image1: Hoodie4},

]


const data1=[
    { pname: 'Five Sleeve Over Size Printed Men`s Black Pull Over Hoodie',  price: '₹299', del: '₹599', size: 'M  L  XL',  hour: '50%',   id:'h1',     image1: Hoodie5 },
    { pname: 'Five Sleeve Over Size Printed Men`s Marron Pull Over Hoodie', price: '₹299', del: '₹599', size: 'M  L', hour: '50%',        id:'h2',     image1: Hoodie6},
    { pname: 'Five Sleeve Over Size Printed Men`s Purple Pull Over Hoodie', price: '₹299', del: '₹599', size: 'S  M  L  XL', hour: '50%', id:'h3',     image1:Hoodie7},
    { pname: 'Five Sleeve Over Size Printed Men`s Pull Over Hoodie',        price: '₹299', del: '₹599', size: 'M  XL', hour: '50%',       id:'h4',     image1: Hoodie8},

]


const data3=[
    { pname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - DARK GREY',  price: '₹299', del: '₹599', size: 'M  L  XL',  hour: '50%',   id:'h9',     image1: Hoodie9},
    { pname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - GREY',       price: '₹299', del: '₹599', size: 'M  L', hour: '50%',        id:'h10',     image1: Hoodie10},
    { pname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - LIGHT GREY', price: '₹299', del: '₹599', size: 'S  M  L  XL', hour: '50%', id:'h11',     image1:Hoodie11},
    { pname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - NAVY BLUE',  price: '₹299', del: '₹599', size: 'M  XL', hour: '50%',       id:'h12',     image1: Hoodie12},
]

export default function hoodie() {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/items/${id}`);
    };
  return (
    <div>


<div className="container-Card">
                <h2>Printed<span> OffSleave </span><span className='rs'> Hoodies</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'data-aos="fade-right">
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
                <h2>Printed<span> FullSleave </span><span className='rs'>Hoodies</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            data2.map((data) => {
                                return (
                                    <>
                                        <div className='card-box'onClick={() => handleCardClick(data.id)}>
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
                <h2>Printed<span> FullSleave </span><span className='rs'> Hoodies</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            data3.map((data) => {
                                return (
                                    <>
                                        <div className='card-box'onClick={() => handleCardClick(data.id)}>
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
