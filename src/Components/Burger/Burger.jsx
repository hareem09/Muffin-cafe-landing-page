import React from 'react'

function Burger() {
    const burger=[{
        id:1,name:'Club sandwich',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813664.jpg??width=500'
    },{id:2,name:'Grilled sandwich',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813660.jpg??width=500'},
    {id:3,name:'Red hot burger',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813650.jpg??width=500'},
{
    id:4,name:'Cheese attack',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813662.jpg??width=500'
},{
    id:5,name:'Club sandwich',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021547.jpg??width=500'
},{id:6,name:'Grilled sandwich',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021551.jpg??width=500'},
{id:7,name:'Red hot burger',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/2021547.jpg??width=500'},
{
id:8,name:'Cheese attack',price:'RS 550',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813646.jpg??width=500'
}]
  return (
    <>
    <main className='w-full  flex gap-24 flex-wrap'>
     {burger.map((deal)=>(
        <div key={deal.id} className="card p-10 h-auto border-2 border-cyan-50 rounded mt-2 ml-1 w-1/5 bg-cyan-50 " name='item'>
         <img src={deal.img} alt="" className='h-56' />
         <h1 className='capitalize font-bold pt-5'>{deal.name}</h1>
         <h1 className='font-bold pt-2 text-amber-500'>Rs{deal.price}</h1>
         {/* <button className='bg-pink-400 p-4 mt-2' onClick={() => addItems(deal)}>Add to Cart</button> */}
        </div>))}
    </main>
    </>
  )
}

export default Burger