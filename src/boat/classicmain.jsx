import React from 'react'
import './CarouselBoat.css'
import './classic.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

import Img1 from './boatpics/carosel1.jpg'
import Img2 from './boatpics/carosel2.webp'
import Img3 from './boatpics/carosel3.jpg'
import Img4 from './boatpics/carosel4.jpg'

import Fullsleve1 from './boatpics/fullslevetshirt.webp'
import Fullsleve2 from './boatpics/fullslevetshirt2.webp'
import Fullsleve3 from './boatpics/fullslevetshirt3.webp'
import Fullsleve4 from './boatpics/fullslevetshirt4.webp'

import Vid1 from './boatpics/shoe1.avif'
import Vid2 from './boatpics/shoe2.avif'
import Vid3 from './boatpics/shoe3.avif'
import Vid4 from './boatpics/shoe4.avif'
import Vid5 from './boatpics/shoe5.avif'

import Combo1 from './boatpics/combo1.webp'
import Combo2 from './boatpics/combo2.webp'
import Combo3 from './boatpics/combo3.webp'
import Combo4 from './boatpics/combo4.webp'

import Ads1 from './boatpics/v1.mp4'
import Ads2 from './boatpics/v2.mp4'
import Ads3 from './boatpics/v3.mp4'
import Ads4 from './boatpics/v4.mp4'
import { TbMarquee } from 'react-icons/tb';

import Mar1 from './boatpics/margue1.jpeg'
import Mar2 from './boatpics/margue2.gif'
import Mar3 from './boatpics/margue3.webp'
import Mar4 from './boatpics/margue4.jpg'
import Mar5 from './boatpics/margue5.jpg'
import Mar7 from './boatpics/margue7.png'
import Mar8 from './boatpics/margue8.png'
import Mar10 from './boatpics/margue10.png'




const datas = [
    { pname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant', price: '₹499', del: '₹699', size: 'M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Combo1 ,              id:'1a'  },
    { pname: 'Men`s Stylish Printed Black T-Shirt and Track Pant', price: '₹499', del: '₹699', size: 'M  L', hour: '50%', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Combo2         ,                 id:'2a' },
    { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - LIGHT GREEN', price: '₹499', del: '₹699',size: 'S  M  L  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Combo3 , id:'3a' },
    { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - BLACK', price: '₹499', del: '₹699', size: 'M  XL', hour: '50%', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Combo4  ,           id:'4a' },

]
const datas1 = [
    { pname: 'Adidas', video1: Vid1, offer:'Start From ₹499 ' ,id:'s1'},
    { pname: 'Reebok', video1: Vid2,offer:'Start From  ₹499'  ,id:'s2'},
    { pname: 'Allbirds', video1: Vid3,offer:'Start From  ₹399',id:'s3'},
    { pname: 'Puma', video1: Vid4 ,offer:'Start From  ₹599'   ,id:'s4'},

]


    const datas2 = [
        { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - ASH',          price: '₹199', del: '₹399', size: 'M  L  XL', hour: '50%',              image1: Fullsleve1, id:"t1"},
        { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - WHITE',        price: '₹199', del: '₹399', size: 'M  L', hour: '50%',                  image1: Fullsleve2 , id:"t2"},
        { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - LIGHT GREEN',  price: '₹199', del: '₹399',size: 'S  M  L  XL', hour: '50%',            image1: Fullsleve3 , id:"t3"},
        { pname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - BLACK',        price: '₹199', del: '₹399', size: 'M  XL', hour: '50%', color1: 'red',  image1: Fullsleve4 , id:"t4"},

    ]


const datas3 = [
    { pname: 'Men`s Stylish Grey Printed T-Shirt and Black Cargo Pant', price: '₹700', del: '₹999', offer: '75% off', ads1: Ads1      ,id:'1a' },
    { pname: 'Men`s Stylish Skyblue Printed T-Shirt and Black Track Pant', price: '₹800', del: '₹999', offer: '27% off', ads1: Ads2   ,id:'2a' },
    { pname: 'Men`s Stylish Brown Printed T-Shirt and White Cargo Pant', price: '₹700', del: '₹999', offer: '69% off', ads1: Ads3     ,id:'3a' },
    { pname: 'Men`s Stylish Black Printed T-Shirt and Navy Blue Track Pant', price: '₹600', del: '₹990', offer: '70% off', ads1: Ads4 ,id:'4a' },
]




export default function boathome() {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/items/${id}`);
    };
  return (
    <div>
       

<div className="carouselmain" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img className="car" src={Img1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="car" src={Img2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="car" src={Img3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="car" src={Img4} />
                    </Carousel.Item>
                  
                </Carousel>
            </div>
      {/* --------------------------------------------------------------Combo Offers-------------------------------------------------------- */}



      <div className="container-Card">
        <h2>Available <span> </span><span className='rs'>Brands</span> </h2>
          <marquee behavior="alternate"  scrollamount='10'>
        <div className='marimgmain'>
            <img src={Mar1} className='marimg'alt="" />
            <img src={Mar2} className='marimg' alt="" />
            <img src={Mar3} className='marimg1'alt="" />
            <img src={Mar4} className='marimg1'alt="" />
            <img src={Mar5} className='marimg1'alt="" />
            <img src={Mar7} className='marimg1'alt="" />
            <img src={Mar8} className='marimg1'alt="" />
            <img src={Mar10} className='marimg1'alt="" />
        </div>
      </marquee>
      </div>



    {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="container-Card">
                <h2>Trending <span> </span><span className='rs'>Combo</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas3.map((data3) => {
                                return (
                                    <>
                                        <div className='video-box' onClick={() => handleCardClick(data3.id)}>
                                            <div onClick={data3.path} className="card-img">
                                                <video src={data3.ads1} autoPlay loop muted style={{ borderRadius: '10px' }} ></video>
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data3.pname}</h6>
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <h5>{data3.price} <del>{data3.del}</del> <span></span> </h5>
                                                <p className='size'>{data3.offer}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>










      {/* ----------------------------------------------------- */}


<div className="container-Card">
                <h2>Combo <span> </span><span className='rs'>Offers</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas.map((data) => {
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

{/* -------------------------------------------------------------Explore our Shoes--------------------------------------------------------------- */}
       

<div className="container-Card">
                <h2>Explore  <span> our </span><span className='rs'>Shoes</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas1.map((data1) => {
                                return (
                                    <>
                                        <div className='video-box' onClick={() => handleCardClick(data1.id)}>
                                            <div onClick={data1.path} className="card-img">
                                                <img src={data1.video1} />
                                            </div>
                                            <div className='videomain-name'>
                                                <div>
                                                    <h6 className="video-name">{data1.pname}<span>{data1.offer}</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>



{/* -------------------------------------------------------------------Full Sleve Tshirts----------------------------------------------------------- */}
  



<div className="container-Card">
                <h2>Full <span> Sleve</span><span className='rs'>Tshirts</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas2.map((data) => {
                                return (
                                    <>
                                        <div className='card-box'  onClick={() => handleCardClick(data.id)}>
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



{/* --------------------------------------------------------Trending Combo-------------------------------------------------------------- */}   
    







    </div>




  )
}
