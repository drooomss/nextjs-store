import { shopifyUrls } from "./urls"
import { env } from "../../../config/env"




export const getProduct = async () => {
    try {
      const responese = await fetch(shopifyUrls.products.all, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
  
        })
      })
      const { products } = await responese.json()
      return products
    } catch (error) {
      console.log(error)
    }
}
  