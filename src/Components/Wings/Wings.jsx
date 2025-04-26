import React from 'react'

function Wings() {
  const wings=[{
  id:'1',name:'Dynamite Wings',price:'RS 540',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxDSo04iXc4KHOoOuK4-K8pa8FhwQ5_FBJA&s'
  },{
  id:'2',name:'Red Hot',price:'RS 540',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813798.jpg??width=500'
  },{
  id:'3',name:'Spicy Wings',price:'RS 540',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813797.jpg??width=500'
  },{
  id:'4',name:'Jalapeno',price:'RS 540',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813799.jpg??width=500'
  },{
  id:'5',name:'Honey wings',price:'RS 540',img:'https://images.deliveryhero.io/image/fd-pk/Products/5813796.jpg??width=500'
  }]
  return (
    <>
    <main className='w-full  flex gap-24 flex-wrap'>
    {wings.map((deal)=>(
     <div key={deal.id} className="card p-10 h-auto border-2 border-cyan-50 rounded mt-2 ml-1 w-1/5 bg-cyan-50 " name='item' >
      <img src={deal.img} alt=""  className='h-56'  />
      <h1 className='capitalize font-bold pt-5'>{deal.name}</h1>
      <h1 className='font-bold pt-2 text-amber-500'>Rs{deal.price}</h1>
     </div>
    ))}
    </main>
    </>
  )
}

export default Wings