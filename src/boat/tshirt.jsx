import React from 'react'
import './CarouselBoat.css'
import './classic.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



import Tshirt1 from './boatpics/oversize1.webp'
import Tshirt2 from './boatpics/oversize2.webp'
import Tshirt3 from './boatpics/oversize3.webp'
import Tshirt4 from './boatpics/oversize4.webp'


import Tshirt5 from './boatpics/oversize5.webp'
import Tshirt6 from './boatpics/oversize6.webp'
import Tshirt7 from './boatpics/oversize7.webp'
import Tshirt8 from './boatpics/oversize8.webp'

import Tshirt9 from './boatpics/oversize9.webp'
import Tshirt10 from './boatpics/oversize10.webp'
import Tshirt11 from './boatpics/oversize11.webp'
import Tshirt12 from './boatpics/oversize12.webp'



const datas = [
    { pname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - PETROL BLUE',  price: '₹299', del: '₹599', size: 'M  L  XL', hour: '50%',     image1: Tshirt1,id:'ts1' },
    { pname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - DRAK GREY',    price: '₹299', del: '₹599', size: 'M  L', hour: '50%',         image1: Tshirt2,id:'ts2'},
    { pname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - NAVY BLUE',    price: '₹299', del: '₹599', size: 'S  M  L  XL', hour: '50%',  image1: Tshirt3,id:'ts3'},
    { pname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - ASH',          price: '₹299', del: '₹599', size: 'M  XL', hour: '50%',        image1: Tshirt4,id:'ts4'},
    // { pname: 'Airdopes 141', price: '₹1,299', del: '₹4,499', size: 'M L XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Fu,id:'ts1'llsleve5},/
]
const data1=[
    { pname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lace - BLACK', price: '₹299', del: '₹599', size: 'M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Tshirt5             ,id:'ts5'},
    { pname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lite - GREEN', price: '₹299', del: '599', size: 'M  L', hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Tshirt6                        ,id:'ts6'},
    { pname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lace - PINK',  price:  '₹299', del: '₹599',size: 'S  M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Tshirt7,id:'ts7'},
    { pname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with PETROL - BLUE', price:'₹299', del: '₹599', size: 'M  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Tshirt8           ,id:'ts8'},

]

const data2=[
    { pname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - PETROL BLUE', price: '₹299', del: '₹599', size: 'M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Tshirt9              ,id:'ts9'},
    { pname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - RED',         price: '₹299', del: '₹599', size: 'M  L', hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Tshirt10                        ,id:'ts10'},
    { pname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - BLACK',       price: '₹299', del: '₹599',size: 'S  M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Tshirt11,id:'ts11'},
    { pname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - PURPLE',      price: '₹299', del: '₹599', size: 'M  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Tshirt12           ,id:'ts12'},

]
export default function tshirt() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/items/${id}`);
    };
  return (
    <div>
    
      
      <div className="container-Card" >
                <h2>Printed<span> </span>Over size <span className='rs'>Tshirts</span> </h2>
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
                                            {/* <div className="yellow-box-main">
                                                <div className="yellow-box1">
                                                    <div className="yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div> */}
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






            <div className="container-Card" >
                <h2>Printed<span> Off Sleave</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1" data-aos="fade-right">
                    <div className='main-box'>
                        {
                            datas.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            {/* <div className="yellow-box-main">
                                                <div className="yellow-box1">
                                                    <div className="yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div> */}
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
                <h2>printed<span> Oversize Dane</span><span className='rs'>Tshirt</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'data-aos="fade-right">
                        {
                            data2.map((data) => {
                                return (
                                    <>
                                        <div className='card-box' onClick={() => handleCardClick(data.id)}>
                                            <div className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            {/* <div className="yellow-box-main">
                                                <div className="yellow-box1">
                                                    <div className="yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div> */}
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
