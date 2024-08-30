
import React, { useState } from 'react';
import Img1 from './boatpics/fullslevetshirt2.webp';
import './items.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './boatpics/payment.png';
import { IoEyeSharp } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import { IoArrowBackCircle } from "react-icons/io5";


import Combo1 from './boatpics/combo1.webp'
import Combo2 from './boatpics/combo2.webp'
import Combo3 from './boatpics/combo3.webp'
import Combo4 from './boatpics/combo4.webp'
import Fullsleve1 from './boatpics/fullslevetshirt.webp'
import Fullsleve2 from './boatpics/fullslevetshirt2.webp'
import Fullsleve3 from './boatpics/fullslevetshirt3.webp'
import Fullsleve4 from './boatpics/fullslevetshirt4.webp'

import Vid1 from './boatpics/shoe1.avif'
import Vid2 from './boatpics/shoe2.avif'
import Vid3 from './boatpics/shoe3.avif'
import Vid4 from './boatpics/shoe4.avif'

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
import { FavoriteSharp } from '@mui/icons-material';


const datas = [
  
  { img: Combo1,iname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lace - BLACK',del: '399', price: '₹200',size: 'X L XL',id:'1a'},
  { img: Combo2,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'2a'},
  { img: Combo3,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'3a'},
  { img: Combo4,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'4a'},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - ASH',        price: '₹199', del: '₹399', size: 'M  L  XL',     img: Fullsleve1,id:"t1"},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - WHITE',      price: '₹199', del: '₹399', size: 'M  L',         img: Fullsleve2,id:"t2"},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - LIGHT GREEN',price: '₹199', del: '₹399',size: 'S  M  L  XL',   img: Fullsleve3,id:"t3"},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - BLACK',      price: '₹199', del: '₹399', size: 'M  XL',        img: Fullsleve4,id:"t4"},
  { img: Vid1,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'s1'},
  { img: Vid2,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'s2'},
  { img: Vid3,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'s3'},
  { img: Vid4,iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',del: '399', price: '₹200',size: 'X L XL',id:'s4'},
  { iname: 'Men`s Stylish Grey Printed T-Shirt and Navy Blue Track Pant',            price: '₹499', del: '₹699', size: 'M  L  XL',  hour: '50%',   id:'h1',     img: Hoodie5 },
  { iname: 'Men`s Stylish Printed Black T-Shirt and Track Pant',                     price: '₹499', del: '₹699', size: 'M  L', hour: '50%',        id:'h2',     img: Hoodie6},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - LIGHT GREEN', price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%', id:'h3',     img:Hoodie7},
  { iname: 'Men`s Classy Full Sleeve Round Neck Text Printed T-Shirt - BLACK',       price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',       id:'h4',     img: Hoodie8},
  { iname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - GREY',       price: '₹499', del: '₹699', size: 'M  L  XL',  hour: '50%',   id:'h5',     img: Hoodie1 },
  { iname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - NAVY BLUE',  price: '₹499', del: '₹699', size: 'M  L', hour: '50%',        id:'h6',     img: Hoodie2},
  { iname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - BLACK',      price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%', id:'h7',     img:Hoodie3},
  { iname: 'Men`s Stylish Printed Zipper Pull Over Hoodies - MAROON',     price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',       id:'h8',     img: Hoodie4},
  { iname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - DARK GREY',   price: '₹499', del: '₹699', size: 'M  L  XL',  hour: '50%',   id:'h9',     img: Hoodie9},
  { iname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - GREY',        price: '₹499', del: '₹699', size: 'M  L', hour: '50%',        id:'h10',     img: Hoodie10},
  { iname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - LIGHT GREY',  price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%', id:'h11',     img:Hoodie11},
  { iname: 'Men`s Stylish Anime Printed Pullover Full Sleeve Hoodie - NAVY BLUE',   price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',       id:'h12',     img: Hoodie12},

  { iname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - PETROL BLUE',    price: '₹499', del: '₹699', size: 'M  L  XL', hour: '50%',     img: Tshirt1,id:'ts1' },
  { iname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - DRAK GREY',      price: '₹499', del: '₹699', size: 'M  L', hour: '50%',         img: Tshirt2,id:'ts2'},
  { iname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - NAVY BLUE',      price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%',  img: Tshirt3,id:'ts3'},
  { iname: 'Men`s Stylish Five Sleeve Oversize Printed Round Neck T-Shirt - ASH',            price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',        img: Tshirt4,id:'ts4'},
  { iname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lace - BLACK',  price: '₹499', del: '₹699', size: 'M  L  XL', hour: '50%',     img: Tshirt5,id:'ts5' },
  { iname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lite - GREEN',  price: '₹499', del: '₹699', size: 'M  L', hour: '50%',         img: Tshirt6,id:'ts6'},
  { iname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with Lace - PINK',   price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%',  img: Tshirt7,id:'ts7'},
  { iname: 'Men`s Stylish Five Sleeve Oversize Anime Printed T-Shirt with PETROL - BLUE', price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',        img: Tshirt8,id:'ts8'},
  { iname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - PETROL BLUE', price: '₹499', del: '₹699', size: 'M  L  XL', hour: '50%',     img: Tshirt9,id:'ts9' },
  { iname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - RED',         price: '₹499', del: '₹699', size: 'M  L', hour: '50%',         img: Tshirt10,id:'ts10'},
  { iname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - BLACK',       price: '₹499', del: '₹699', size: 'S  M  L  XL', hour: '50%',  img: Tshirt11,id:'ts11'},
  { iname: 'Men`s Five Sleeve Oversize Printed Dane Brown T-Shirts - PURPLE',      price: '₹499', del: '₹699', size: 'M  XL', hour: '50%',        img: Tshirt12,id:'ts12'},

  { iname: 'Cargo Pant in Green for Mens with double pocket',                        price: '₹499', del: '₹699', size: 'M  L  XL',   hour: '50%',                    img:Track1,id:'tr1'},
  { iname: 'Regular Fit Men`s Solid 400 Lycra Pant - LIGHT GREY',                    price: '₹499', del: '₹699', size: 'M  L',       hour: '50%', color1: 'grey',                 img:Track2,id:'tr2'},
  { iname: 'Regular Fit Men`s Solid 400 Lycra Pant - LIGHT GREEN',                   price: '₹499', del: '₹699',size: 'S  M  L  XL', hour: '50%',       img:Track3,id:'tr3'},
  { iname: 'Regular Fit Men`s Solid 400 Lycra Pant - ICE BLUE',                      price: '₹499', del: '₹699', size: 'M  XL',      hour: '50%', color1: 'red',   img:Track4,id:'tr4'},
  { iname:  'Men`s Stylish Regular Fit Cargo Pant - OLIVE GREEN',                    price: '₹499', del: '₹699', size: 'M  L  XL',   hour: '50%',                    img:Track5,id:'tr5'},
  { iname:  'Men`s Stylish Regular Fit Cargo Pant - BOTTOL GREEN',                   price: '₹499', del: '₹699', size: 'M  L',       hour: '50%', color1: 'grey',                 img:Track6,id:'tr6'},
  { iname:  'Men`s Stylish Regular Fit Cargo Pant -  MEHANDHI GREEN',                price: '₹499', del: '₹699',size: 'S  M  L  XL', hour: '50%',       img:Track7,id:'tr7'},
  { iname:  'Men`s Stylish Regular Fit Cargo Pant - PISTA GREEN',                    price: '₹499', del: '₹699', size: 'M  XL',      hour: '50%', color1: 'red',   img:Track8,id:'tr8'},
  { iname:  'Men`s Casual Daily Wear Track Pant - Blue',                             price: '₹499', del: '₹699', size: 'M  L  XL',   hour: '50%',                    img:Track9,id:'tr9'},
  { iname:  'Men`s Casual Daily Wear Track Pant - Green',                            price: '₹499', del: '₹699', size: 'M  L',       hour: '50%', color1: 'grey',                 img:Track10,id:'tr10'},
  { iname:  'Men`s Casual Daily Wear Track Pant - Black',                            price: '₹499', del: '₹699',size: 'S  M  L  XL', hour: '50%',       img:Track11,id:'tr11'},
  { iname:  'Men`s Casual Daily Wear Track Pant - White',                            price: '₹499', del: '₹699', size: 'M  XL',      hour: '50%', color1: 'red',   img:Track12,id:'tr12'},
  { iname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Blue',            price: '₹499', del: '₹1,199', size: '9 10', hour: '50%',                 id:'sh1', img: Shoes1 },
  { iname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Black',           price: '₹499', del: '₹1,199', size: '8 9 10',     hour: '50%', color1: 'grey',              id:'sh2', img: Shoes2 },
  { iname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy White',           price: '₹499', del: '₹1,199',size: '9 10',      hour: '50%',    id:'sh3', img: Shoes3},
  { iname: 'Printed Men`s Lace-Up Regular Fit Casual Shoes in Navy Ash',             price: '₹499', del: '₹1,199', size: '10',    hour: '50%', color1: 'red',id:'sh4', img: Shoes4},
  { iname: 'Lace Up Mens and Boys Boot Shoe in Brown',                               price: '₹999', del: '₹1,999', size: '7 8 10', hour: '50%',                 id:'sh5', img: Shoes5 },
  { iname: 'Boot shoe for mens with lace',                                           price: '₹999', del: '₹1,999', size: '8 9', hour: '50%', color1: 'grey',              id:'sh6', img: Shoes6 },
  { iname: 'Brown Boot Shoe with Zip Lock for Mens',                                 price: '₹999', del: '₹1,999',size: '9 10', hour: '50%',    id:'sh7', img:Shoes7},
  { iname: 'Boot Shoe for Mens and Boys with Zip Lock',                              price: '₹999', del: '₹1,999', size: '8 9', hour: '50%', color1: 'red',id:'sh8', img: Shoes8},
  { iname:  'Lace Up Solid Sneakers Shoe for Mens',                                  price: '₹1,199', del: '₹1,999', size: '8 9 10', hour: '50%',                 id:'sh9', img: Shoes9},
  { iname:  'Sneakers Shoe for boys and mens with Lace Up',                          price: '₹1,199', del: '₹1,999', size: '7 8 9 10', hour: '50%', color1: 'grey',              id:'sh10', img: Shoes10 },
  { iname:  'Stylish Sneakers Shoe for Boys and Mens',                               price: '₹1,199', del: '₹1,999',size: '8 9 10', hour: '50%',    id:'sh11', img:Shoes11},
  { iname:  'Sneakers Shoe for mens with Lace Tie Up GREEN' ,                        price: '₹1,199', del: '₹1,999', size: '8 9 10', hour: '50%', color1: 'red',id:'sh12', img: Shoes12},
];



export default function Items() {

  const { id } = useParams();
  const navigate = useNavigate();
  const data = datas.find((data) => data.id === id);


    const [count,setcount]=useState(0);
  
     function increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount(count-1)
    }

const deli=()=>{
  swal("Any problem?", {
    content: "input",  
})
  .then(() => {
    swal('Your problem was submitted', 'Our team will contact you in few minutes!');
  });
}


const buynow=()=>{
  swal({
    title: "Are you sure?",
    text: "Once you confirm your Order, you will not be able to cancel the order upto delivery!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your order is confirmed!", {
        icon: "success",
      });
    } else {
      swal("Your order is cancelled!");
    }
   });
   }

   const Favorite=()=>{
    swal("", "Added to your Favorite", "success");
   }

   const Favorite1=()=>{
    swal("", "", "success");
   }
   

   const Askclick =()=>{
    swal("Delivery and Return Info !", "Return Policy: We will gladly accept returns for any reason within 30 days of receipt of delivery.Processing Time will Allow 3-4 business days processing time for your order to ship.");
   }

   

 


  return (<>
   <button className='backbutton' onClick={() => navigate(-1)}><IoArrowBackCircle /></button>
 
    <div className="item-box">
       
     
        <div className="item"  data-aos="fade-down" >
          <div className="card-open">
            <img src={data.img} alt={data.iname} data-aos="zoom-in-down" />
          </div>
          <div className="details">
            <h1>{data.iname}</h1>
            <h5>
              <del>{data.del}</del> {data.price}
            </h5>
            <p><MdVerified className='verify'/>In Stock</p>
            <p><BsFire className='fire' />39 sold in the last 6 hours</p>
            <p><IoEyeSharp className='ieye' />38 people are viewing this right now</p>

            <h2>Size: {data.size}</h2>
            <p className='onlyleft'>Only 14 items left in stock !!</p>
               
      <div className='plus-minus'>
      <button className='plus' onClick={decrement}>-</button>
      <span>{count}</span>
      <button className='plus' onClick={increment}>+</button>
      

            <button className="add-cart" onClick={Favorite1} >ADD TO CART</button>
            <button className='fav' onClick={Favorite}><IoMdHeartEmpty /></button>
            
            </div>
            <div className="buttons">
              <button onClick={buynow} className="buy">Buy it Now</button>
            </div>
              <ul className="options">
                <li><LuArrowDownUp className='updown'/>< button className='askbtn' >Compare</button></li>
                <li><a><FaRegQuestionCircle className='updown' /> <button className='askbtn'onClick={deli} >Ask a question</button></a></li>
                <li ><a><TbTruckDelivery className='updown'/><button className='askbtn'  onClick={Askclick}>Delivery & Return</button></a></li>
                <li><a ><IoShareSocialSharp className='updown' /><button className='askbtn'>Share</button></a></li>
              </ul>
              <div className='paymemtdiv' data-aos="zoom-in">
              <img src={Payment} className="payment" alt="Payment options" /></div>
            </div>
          </div>
      
      </div>  
    </>
  );
}

