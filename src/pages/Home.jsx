import React from 'react'


const Home = () => {
  return (
    <div className='min-h-80vh flex flex-col justify-between'>
       
        <main className='container mx-auto px-4 py-16'>
            <h1 className='text-5xl font-bold text-center mb-8'>Welcome to Goliath Bungoma</h1>
            <p className='text-xl text-center mb-8'>Your one-stop solution for
                all your needs. We offer a wide range of services to cater to your requirements.</p>
            <div className='flex justify-center'>
                <a href="/services" className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'>Explore Services</a>
            </div>
        </main>
       
        
    </div>
  )
}

export default Home