import React from 'react'

const getProduct = async () => {
    try {
        const responese = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: new Headers({ 
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            
        })
    })
    const {products} = await responese.json()
    return products
    } catch (error) {
        console.log(error)
    }
    

    const {products} = await responese.json()
    return products
}

const MainProducts = async () => {
    const products = await getProduct() 
    console.log(products)
  return (
    <div>
      <div>
        <h1 className='text-white'>Main Products</h1>
      </div>
    </div>
  )
}

export default MainProducts
