import { env } from "process"



export const shopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`

    }
 }