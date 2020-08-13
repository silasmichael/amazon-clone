import React, { useState } from 'react'
import Product from'./Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home-img" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
            alt=""/>
            <div className="home-row">
                <Product
                id='1'
                title='Phone Solar Charger,Yelomin 20000mAh Portable Outdoor Mobile Power Bank,Camping External Backup Battery Pack Dual USB 5V 1A/2A Outputs 2 Led Light Flashlight with Compass'
                price={22.99}
                rating={4}
                image='https://m.media-amazon.com/images/I/61T9axfV1EL._AC_UY218_.jpg'
                />
                <Product
                id='2'
                title='ONXE USB LED Clock Fan with Real Time Display Function,USB Clock Fans,Silver,1 Year Warranty (Clock)'
                price={14.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/51-BKDLr9oL._AC_UY218_.jpg" class="s-image" 
                />
            </div>
            <div className="home-row">
                <Product
                id='3'
                title='SIMREX X300C 8816 Mini Drone with Camera WiFi HD FPV Foldable RC Quadcopter Rtf 4CH 2.4Ghz Remote Control Headless [Altitude Hold] Super Easy Fly for Training - Yellow'
                price={39.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/616jD4KT5tL._AC_UY218_.jpg"
                />
                <Product
                id='7'
                title='Apple iPad Pro 2018 (11-inch, Wi-Fi, 256GB) - Space Gray (Renewed)'
                price={799.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61is5y-+MeL._AC_UY218_.jpg"
                />
                <Product
                id='5'
                title='Gadget Guard Black Ice Tempered Glass Screen Guard Apple iPhone XR - Clear'
                price={19.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/51hMWuQwtUL._AC_UY218_.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                id='8'
                title="Sony KDL32W600D 32 720p Smart LED TV - Black"
                price={298.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/81kezz4E4oL._AC_UY218_.jpg"
                />
            </div>
            
            
        </div>
        
    )
}

export default Home
