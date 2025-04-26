import React from 'react'

function Pizza() {
    const pizza=[{
        id:1,name:'Muffins Nawabi Pizza',price:'RS 380',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021619.jpg??width=500'
    },{id:2,name:'Muffins Special Pizza',price:'RS 380',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021620.jpg??width=500'},
    {id:3,name:'Chicken Fajita Pizza',price:'RS 350',img:'https://images.deliveryhero.io/image/fd-pk/Products/7035526.jpg??width=500'},
{
    id:4,name:'Bonfire Pizza',price:'RS 450',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021618.jpg??width=500'
},{
    id:5,name:'Peri Peri Pizza',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/7035527.jpg??width=500'
},{id:6,name:'Malia Pizza',price:'RS 380',img:'https://images.deliveryhero.io/image/fd-pk/Products/7035525.jpg??width=500'},
{id:7,name:'Chicken Fajita Pizza',price:'RS 350',img:'https://images.deliveryhero.io/image/fd-pk/Products/7035525.jpg??width=500'},
{
id:8,name:'Extreme Pizza',price:'RS 450',img:'https://images.deliveryhero.io/image/fd-pk/Products/20697444.jpg??width=500'
},{
id:9,name:'Kebab Pizza',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021617.jpg??width=500'
}]
  return (

    <>
     <main className='w-full  flex gap-20 flex-wrap'>
   {pizza.map((deal)=>(
        <div key={deal.id} className="card p-10 h-auto border-2 border-cyan-50 rounded mt-2 ml-2 w-1/5 bg-cyan-50" name='item'>
         <img src={deal.img} alt="" className='h-56' />
         <h1 className='capitalize font-bold pt-5'>{deal.name}</h1>
         <h1 className='font-bold pt-2 text-amber-500'>Rs{deal.price}</h1>
         {/* <button className='bg-pink-400 p-4 mt-2' onClick={() => addItems(deal)}>Add to Cart</button> */}
        </div>))}
   </main>
    </>
  )
}

export default Pizza