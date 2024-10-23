// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import topi from './assets/topi.png'
import './App.css'
import nonveg from './assets/nonveg.png'
import veg from './assets/veg.png'

function App() {

  return (
    <>
      <div>
<header >
  <img src={topi} alt="topi vappa icon" />

<h1 className="text-xl font-bold  text-black ml-2">
      Topi vappa Biriyani salem
    </h1>
    <h2 className='ml-2'>PARTY ORDER AVAILABLE</h2>
    <h2 className="font-bold ml-2"> Contact:7305748889</h2>

</header>
<body>
  {/* non veg soup */}
<div className="flex m-2 ">
  <h2 className="my-1  font-bold">NON VEG SOUPS</h2>  
  <img src={nonveg} alt="non veg" className="w-8 h-auto" />
</div>
<div className="ml-2">
  <ul>
    <li className="flex justify-between mr-2">
      <p>Hot and Sour Chicken Soup</p>
      <p>₹100</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Chicken Clear Soup</p>
      <p>₹90</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Pepper Chicken Soup</p>
      <p>₹100</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Cream of Chicken Soup</p>
      <p>₹90</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Mutton Pepper Soup</p>
      <p>₹120</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Sweet Corn Chicken Soup</p>
      <p>₹100</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Chicken Noodles Soup</p>
      <p>₹100</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Hot and Sour Mutton Soup</p>
      <p>₹120</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Mutton Nalli Soup</p>
      <p>₹120</p>
    </li>
    <li className="flex justify-between mr-2">
      <p>Crab Pepper Soup</p>
      <p>₹120</p>
    </li>
  </ul>
</div>
{/* veg soup */}

<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>VEG SOUPS</h2>  
    <img src={veg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Hot and Sour Veg Soup</p>
      <p>₹100</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Veg Clear Soup</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom Pepper Soup</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Sweet Corn Veg Soup</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Sweet Corn Mushroom</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Baby Corn Soup</p>
      <p>₹80</p>
    </div>
  </li>
</ul>

</div>

{/*Topi vappa biriyani  */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>TOPI VAPPA BRIYANI</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Chicken Biriyani</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Biriyani</p>
      <p>₹260</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken 65 Biriyani</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Lollipop Biriyani</p>
      <p>₹290</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken BBQ Biriyani</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Grill Biriyani</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Tandoori Biriyani</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Egg Biriyani</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Plain Biriyani(Khuska)</p>
      <p>₹120</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Nattu Kozhi Biriyani</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Kushka</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Tikka Biriyani</p>
      <p>₹230</p>
    </div>
    
  </li>
</ul>
<div className="flex justify-between mr-2">
      <p>Chicken BBQ Biriyani</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Grill Biriyani</p>
      <p>₹230</p>
    </div>
</div>
{/* Topi vappa Bucket Biriyani */}
{/*Topi vappa biriyani  */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>TOPI VAPPA BUCKET BRIYANI</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-end mr-2">
      <p className='mr-2'>3 MEMBERS</p>
      <p>5 MEMBERS</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Bucket Biriyani</p>
      <p>₹600</p>
      <p>₹900</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Bucket BIRIYANI</p>
      <p>₹800</p>
      <p>₹1300</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Bucket Biriyani</p>
      <p>₹600</p>
      <p>₹950</p>
    </div>
  </li>
</ul>
</div>

{/*Non  veg chinese fried rice */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>NON VEG CHINESE FRIED RICE</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[FOR SCHEZWAN RS 10 EXTRA]</h4>  
  </div>

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Egg Fried Rice</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Fried Rice</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Fried Rice</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mixed Non-veg Fried Rice</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Singapore Chicken Fried Rice</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Prawn Fried Rice</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Howkar Chicken Fried Rice</p>
      <p>₹180</p>
    </div>
  </li>
</ul>
</div>

{/* veg chinese fried rice */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'> VEG CHINESE FRIED RICE</h2>  
    <img src={veg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[FOR SCHEZWAN RS 10 EXTRA]</h4>  
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Gobi Fried Rice</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Veg Fried Rice</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom Fried Rice</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Fried Rice</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Singapore Veg Fried Rice</p>
      <p>₹170</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mixed Veg Fried Rice</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kashmiri Veg Pulao </p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p> Veg Pulao </p>
      <p>₹150</p>
    </div>
  </li>
</ul>

</div>
{/* Non veg Chinese Noodles */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>NON VEG CHINESE NOODLES</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[FOR SCHEZWAN RS 10 EXTRA]</h4>  
  </div>

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Egg Fried Noodles</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Fried Noodles</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Fried Noodles</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mixed Non-veg Fried Noodles</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>American Saucy Non veg Noodles</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Prawn Fried Noodles</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Condinal Fried Noodles</p>
      <p>₹160</p>
    </div>



    
  </li>
</ul>
</div>
{/* Veg Chinese Noodles */}

<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'> VEG CHINESE NOODLES</h2>  
    <img src={veg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[FOR SCHEZWAN RS 10 EXTRA]</h4>  
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Gobi Fried Noodles</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Veg Fried Noodles</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom Fried Noodles</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Fried Noodles</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chinese Saucy VEg Noodles</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mixed Veg Noodles</p>
      <p>₹150</p>
    </div>
  </li>
</ul>
</div>
{/* Non veg Starters */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>NON VEG STARTERS</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>  

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Mutton Pepper Fry</p>
      <p>₹270</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken 777</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken 555</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Lamp</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Grill Pepper Fry</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Bhuhari</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Uppu Curry</p>
      <p>₹250</p>
      </div>
      <div className="flex justify-between mr-2">
      <p>Crispy Fish</p>
      <p>₹300</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Kola</p>
      <p>₹300</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Kola</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Leg Pepper Fry</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Lemon Chicken Dry</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Honey Saucy Tandoori Chicken</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Eggy Chicken Fry</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Nalli Pepper Fry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Stips</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kaadai 65</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Garlic Chicken Dry</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Ginger Chicken Dry</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Ball Manchurian</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper Chicken Dry</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chashewnuts Chicken Dry</p>
      <p>₹210</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Nattu Kozhi Pepper Fry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kaadai Pepper Fry</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Ball Machurian</p>
      <p>₹280</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Pallipalayam</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Drumstick (2pcs) Saucy </p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Chicken Dry</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Manchurian</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken 65 (Boneless) (8pcs)</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Lollipop(5pcs)</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Pepper Fry</p>
      <p>₹210</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Dragon Chicken Dry</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Crispy Fish Finger(6 pcs)</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Chukka</p>
      <p>₹210</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Crab Lollipop(5 pcs)</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Chukka</p>
      <p>₹270</p>
    </div>
   

    



    
  </li>
</ul>
</div>
{/*veg Starters */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'> VEG STARTERS</h2>  
    <img src={veg} alt="non veg" className="w-8 h-auto " />
  </div>
  
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Chilli Gobi Dry</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Gobi Manchurian</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Gobi 65</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Mushroom Dry
      </p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Panner Dry
      </p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom Manchurian</p>
      <p>₹170</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom 65</p>
      <p>₹160</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Manchurian</p>
      <p>₹160</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner 65</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Baby Corn Dry
      </p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Golden Fried Baby Corn</p>
      <p>₹170</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Golden Fried Panner</p>
      <p>₹180</p>
    </div>
  </li>
</ul>
</div>
{/* Tandoori */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>TANDOORI</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>  

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Tandoori Chicken Quarter</p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Chicken Half</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Chicken Full</p>
      <p>₹400</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Topi Kebab</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tangiri Kebab</p>
      <p>200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Tikka</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Spicy Tikka</p>
      <p>₹200</p>
      </div>
      <div className="flex justify-between mr-2">
      <p>Reshmi Kebab</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Seekh Kebab</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Malai Chicken Tikka</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Hariyali Chicken Tikka</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Tikka</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Seekh Kebab</p>
      <p>₹270</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fish Tikka</p>
      <p>₹240</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Malabar Tikka</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Garlic Kebab</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Anghari Kebab </p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kali Mirchi Kebab</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Hariyali Panner Tikka</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Cheese Kebab</p>
      <p>₹210</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Honey Chicken Kebab</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Platter</p>
      <p>₹599</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Family Kebab Platter</p>
      <p>₹699</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Fish</p>
      <p>₹280</p>
    </div>
    
    {/* Non Veg Indian Curries */}

    



    
  </li>
</ul>
</div>
{/* Non veg Indian Curries */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>NON VEG INDIAN CURRIES</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>  

<div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Chicken Chettinad</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Pepper Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Butter Chicken Masala</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kadai Chicken</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Andhra Chicken Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Hyderabadi Chicken Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Mughalai</p>
      <p>₹230</p>
      </div>
      <div className="flex justify-between mr-2">
      <p>Kadai Mutton</p>
      <p>₹260</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Chettinad</p>
      <p>₹270</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mutton Pepper Masala</p>
      <p>₹260</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Tikka Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Curry</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Tikka Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Curry</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kerala Chicken Masala</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Nattu Kozhi Pepper Masala </p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Nattu Kozhi Chukka</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kaadai Pepper Masala</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kadai Cukka </p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Punjabi Chicken Masala</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Kolapuri</p>
      <p>₹230</p>
    </div>
    {/*VEG INDIAN CURRIES */}
    
   
    
  

    
  </li>
</ul>
</div>

{/* veg Indian Curries */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>VEG INDIAN CURRIES</h2>  
    <img src={veg} alt="non veg" className="w-8 h-auto " />
  </div>  

<div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Gobi Masala</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mushroom Masala</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Butter Masala</p>
      <p>₹190</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kadai Panner</p>
      <p>₹200</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Veg Chetinadu</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Tikka Masala</p>
      <p>₹200</p>
      </div>
      <div className="flex justify-between mr-2">
      <p>Mix Veg Gravy</p>
      <p>₹170</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Green Peas Masala</p>
      <p>₹140</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kadai Veg</p>
      <p>₹160</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Veg Kolapuri</p>
      <p>₹150</p>
    </div>
    </li>
</ul>
</div>
    
    {/*EGG DISHES  */}
{/* Non veg Indian Curries */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>EGG DISH</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>  

<div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Boiled Egg</p>
      <p>₹10</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Egg Masala</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Egg Burgi</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Egg 65</p>
      <p>₹100</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Egg Podimas</p>
      <p>₹50</p>
    </div>
    </li>
</ul>
</div>
  
  {/*SEA FOODS */}
  <div className="flex items-center ml-2 ">
    <h2 className='my-1 font-bold'>SEA FOODS</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>  

<div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Vanjaram Fish Tawa Fry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fish Masala</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fish Munchurian</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Nethili Fish Fry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fish 65</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Fish Fry</p>
      <p>₹240</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Schezwan Fish Fry</p>
      <p>₹250</p>
      </div>
      <div className="flex justify-between mr-2">
      <p>Crab Lollipop(5 pcs)</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Prawn 65</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Prawn Manchurian</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilli Prawn Dry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Schezwan Prawn</p>
      <p>₹260</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Prawn Chettinadu</p>
      <p>₹260</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Sheela Fish Fry</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Glass Para Fish Full(Tawa or Oil Fry)</p>
      <p>₹550</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Crab Pepper Fry </p>
      <p>₹300</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Dragon Fish Fry</p>
      <p>₹250</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>BBQ Fish(3 Flawars)</p>
      <p>₹300</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Dragon Prawn Strips </p>
      <p>₹350</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Golden Fry Prawns</p>
      <p>₹280</p>
    </div>
   
  </li>
</ul>
</div>

    {/* INDIAN BREADS */}
    <div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>INDIAN BREADS</h2>  
    {/* <img src={nonveg} alt="non veg" className="w-8 h-auto " /> */}
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[EXTRA BUTTER RS10 IF APPLICABLE]</h4>  
  </div>

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Plain Naan</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Roti</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kulcha</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Garlic Naan</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Stuffed Naan</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Parotta</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Kashmiri Naan</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Phulka (2pcs)</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Family Naan</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Family Butter Naan</p>
      <p>₹100</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Cheese Naan</p>
      <p>₹70</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Masala Kulcha</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Panner Kulcha</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Aloo Parotta</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Methi Parotta</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Latcha Parotta</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chicken Keema Naan</p>
      <p>₹140</p>
    </div>
   
    
  </li>
</ul>
</div>
    {/* Grill */}
<div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>GRILL(Chicken)</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Grill Quarter</p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper Grill Quarter</p>
      <p>₹120</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Grill Half</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper Grill Half</p>
      <p>₹230</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Grill Full</p>
      <p>₹400</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper Grill Full</p>
      <p>₹420</p>
    </div>
  </li>
</ul>
</div>

    {/* BBQ*/}
    <div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>BBQ(Chicken)</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Pepper BBQ Quarter</p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilly BBQ Quarter</p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Afghan BBQ Quarter </p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper BBQ Half</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilly BBQ Half</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Afghan BBQ Half</p>
      <p>₹220</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pepper BBQ Full</p>
      <p>₹400</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Chilly BBQ Full</p>
      <p>₹400</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Afghan BBQ Full</p>
      <p>₹400</p>
    </div>
  </li>
</ul>
</div>

 {/* SHAWARMA */}
 <div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>SHAWARMA(Chicken)</h2>  
    <img src={nonveg} alt="non veg" className="w-8 h-auto " />
  </div>
  <div className="flex items-center ml-2">
    <h4 className='text-sm font-bold'>[FOR EXTRA KUBOOS-10 MAYONNAISE -20]</h4>  
  </div>

  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
  <div className="flex justify-end mr-2 ">
      <p className='mr-14'>ROLL</p>
      <p className='justify-end'>PLATE</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Shawarma</p>
      <p className='ml-10'>₹100</p>
      <p>₹150</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mexican Shawarma</p>
      <p className='mr-6'>₹120</p>
      <p>₹170</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Tandoori Shawarma</p>
      <p className='mr-8'>₹130</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Special Shawarma</p>
      <p className='mr-4'>₹120</p>
      <p>₹170</p>

    </div>
    <div className="flex justify-between mr-2">
      <p>Peri Peri Shawarma</p>
      <p className='mr-6'>₹120</p>
      <p>₹180</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Topi Special Shawarma</p>
      <p className='mr-12'>₹130</p>
      <p>₹190</p>
    </div>
  </li>
</ul>
</div>
  {/* FRESH JUICE */}
  <div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>FRESH JUICE</h2>  
    {/* <img src={nonveg} alt="non veg" className="w-8 h-auto " /> */}
  </div>
 
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Apple</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pomegranate</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Pineapple</p>
      <p>₹70</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Orange</p>
      <p>₹70</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Mosambi</p>
      <p>₹70</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Water Melon</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Muskmelon</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Lemon Mint Cooler</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Lemon Juice</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Graps</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Choice of Mojito</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Lemon Soda</p>
      <p>₹50</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Water Bottle</p>
      <p>₹20</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Goli soda</p>
      <p>₹30</p>
    </div>
  </li>
</ul>
</div>
 {/* ICE CREAM & MILKSHAKE*/}
 <div className="flex items-center ml-2">
    <h2 className='my-1 font-bold'>ICE CREAM & MILKSHAKE</h2>  
    {/* <img src={nonveg} alt="non veg" className="w-8 h-auto " /> */}
  </div>
 
  <div className='ml-2'>
  <ul>
  <li className="flex flex-col">
    <div className="flex justify-between mr-2">
      <p>Ice Cream (2 Scoops)</p>
      <p>₹70</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Choice of Ice Cream</p>
      <p>₹40</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Choice of Milkshake</p>
      <p>₹80</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Milkshake With Ice Cream</p>
      <p>₹100</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fruit Salad</p>
      <p>₹60</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Fruit Salad With Ice Cream </p>
      <p>₹90</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Royal Falooda(Fruits)</p>
      <p>₹110</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Dry Nuts Falooda</p>
      <p>₹130</p>
    </div>
    <div className="flex justify-between mr-2">
      <p>Choice of Falooda</p>
      <p>₹100</p>
    </div>
    
    
  </li>
</ul>
</div>






</body>
 
    </div>
    </>
  )
}

export default App
