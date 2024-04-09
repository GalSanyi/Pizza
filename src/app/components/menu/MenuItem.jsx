import React from 'react'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all'>
            <div className='tetx-center '>
                <img className='max-h-auto max-h-24 block mx-auto' src="/pizza.png" alt="pizza" />
            </div>
            <h4 className='font-semibold py-2 tetx-xl '>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm'>
                Pepperoni pizza is an Italian dish consisting of dough, tomato sauce, cheese, and pepperoni. It's baked until the crust is golden and the cheese is melted, resulting in a flavorful meal or snack.</p>
            <button className=' mt-4 bg-primary text-white px-6 py-2 rounded-full'>Add to card $12</button>
        </div>
    )
}

export default MenuItem
