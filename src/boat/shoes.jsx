import React from 'react'
import './classic.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
// import { swal } from '@sweetalert/with-react'


import Shoes1 from './boatpics/shoes1.avif'
import Shoes2 from './boatpics/shoes2.avif'
import Shoes3 from './boatpics/shoes3.avif'
import Shoes4 from './boatpics/shoes4.avif'

import Shoes5 from './boatpics/shoes5.avif'
import Shoes6 from './boatpics/shoes6.avif'
import Shoes7 from './boatpics/shoes7.avif'
import Shoes8 from './boatpics/shoes8.avif'

import Shoes9 from './boatpics/shoes9.avif'
import Shoes10 from './boatpics/shoes10.avif'
import Shoes11 from './boatpics/shoes11.avif'
import Shoes12 from './boatpics/shoes12.avif'


const data1=[
    { pname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Blue',  price: '₹499', del: '₹1,199', size: '8 9 10', hour: '50%',                 id:'sh1', image1: Shoes1 },
    { pname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Black', price: '₹499', del: '₹1,199', size: '9 10', hour: '50%', color1: 'grey',              id:'sh2', image1: Shoes2 },
    { pname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy White', price: '₹499', del: '₹1,199',size: '7 8 9 10', hour: '50%',    id:'sh3', image1:Shoes3},
    { pname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Ash',   price: '₹499', del: '₹1,199', size: '8 9 ', hour: '50%', color1: 'red',id:'sh4', image1: Shoes4},

]

const data2=[
    { pname: 'Lace Up Mens and Boys Boot Shoe in Brown',   price: '₹999', del: '₹1,999', size: '8 9 10 ', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Shoes5               ,id:'sh4'  },
    { pname: 'Boot shoe for mens with lace',               price: '₹999', del: '₹1,999', size: '8 9 10',    hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1:Shoes6                           ,id:'sh5'  },
    { pname: 'Brown Boot Shoe with Zip Lock for Mens',     price: '₹999', del: '₹1,999',size: '7 8 ', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Shoes7  ,id:'sh6'  },
    { pname: 'Boot Shoe for Mens and Boys with Zip Lock',  price: '₹999', del: '₹1,999', size: '9 10', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Shoes8             ,id:'sh7'  },

]

const data3=[
    { pname: 'Lace Up Solid Sneakers Shoe for Mens',                price: '₹1,199', del: '₹1,999', size: '8 10', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Shoes9              ,id:'sh9'},
    { pname: 'Sneakers Shoe for boys and mens with Lace Up',        price: '₹1,199', del: '₹1,999', size: '7 8 9 10',    hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Shoes10                        ,id:'sh10'},
    { pname: 'Stylish Sneakers Shoe for Boys and Mens',             price: '₹1,199', del: '₹1,999',size: '8 9 10', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Shoes11,id:'sh11'},
    { pname: 'Sneakers Shoe for mens with Lace Tie Up GREEN' ,      price: '₹1,199', del: '₹1,999', size: '8 9 10', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Shoes12           ,id:'sh12'},

]

export default function shoes() {
    const navigate = useNavigate();


    const handleCardClick = (id) => {
      navigate(`/items/${id}`);
    };
  return (
    <div>


<div className="container-Card">
                <h2>Printed<span> Off Sleave</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'data-aos="fade-right">
                        {
                            data1.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img"  >
                                                <img src={data.image1} />
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>

                                            </div>
                                            <div className='product-price'>
                                                <h5> <del>{data.del}</del> {data.price}  </h5>
                                                <h5 className='size'></h5>
                                                <p>Size: {data.size}</p>
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
                                                <h5 className='size'></h5>
                                                <p>Size: {data.size}</p>
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
                                                <h5 className='size'></h5>
                                                <p>Size: {data.size}</p>
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
