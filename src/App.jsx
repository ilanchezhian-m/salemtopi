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



    
  </li>
</ul>
</div>







</body>
 
    </div>
    </>
  )
}

export default App
