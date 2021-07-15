/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" />

                <div className="home_row">
                    <Product
                        id="2202"
                        title="The lean startup: How Constant innovation creates radically successful business paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />

                    <Product
                        id="22022"
                        title="A mixer for baking , Stylish Kitchen Mixer with k-beater, dough Hook and whisk, 5 litre Glass Bowl"
                        price={239.99}
                        image="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-KSM150PSER.tif?id=W22mx1&fmt=jpg&fit=constrain,1&wid=300&hei=291"
                        rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="2022"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images.samsung.com/is/image/samsung/sg-curved-c49j89-lc49j890dkexxs-frontblack-101633149?$720_576_PNG$"
                        rating={5}
                    />
                    <Product
                        id="2122"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric"
                        price={99.99}
                        image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg"
                        rating={5}
                    />
                    <Product
                        id="2112"
                        title="New Apple iPad Pro (12.9-inch, wifi, 128gb) - Silver(4th Generation)"
                        price={599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81bFlyDPHkL._AC_SY450_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="2322"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super ultra wide Dual WQHD 5120 x 1440"
                        price={199.99}
                        image="https://assets2.rockpapershotgun.com/g9.jpg/BROK/resize/660%3E/format/jpg/quality/80/g9.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
