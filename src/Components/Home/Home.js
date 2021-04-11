import React from 'react'
import './css/Home.css'

const Home = () => {

    return (
        <div className='Home'>

            <div className="home__nav">
                <h3><a href="/login" style={{ color: 'black' }}>Login</a></h3>
                <h3><a href="/register" style={{ color: 'black' }}>Register</a></h3>
            </div>


            <div id="header">
                <i class="fas fa-tractor fa-4x"></i>
                <h1>Welcome to Khet Market.</h1>
                <p>Khet Market – a one step solution for farmers
				<br /> to buy goods and sell crops.</p>
            </div>


            <div id="main" style={{ backgroundColor: "#EF8172" }}>

                <header className="major container medium">
                    <h2 style={{ color: 'black' }}>Khet Market is a webapp through which farmers can sell crops to and buy
                    equipment directly from other merchants without any third-party mediation. To avoid price inflation
                    and maintain regularised selling, the app validates any purchase through the use of MSP for pricing
                    and the buyer must adhere to it. The app also incorporate payment authentication which help both
                    parties avoid extra middleman costs and helps in creating of a completely self – independent virtual
                    market space to empower both the buyer and seller.
					</h2>

                </header>

                <div className="box alt container">

                    <section className="feature left">
                        <a href="/buy" className="image icon solid fa-shopping-cart"><img src="images/pic01.jpg" alt="" /></a>
                        <div className="content">
                            <h3>Buy Goods</h3>
                            <p>We provide all essential equipments, fertilizers, pesticides, and varieties of seeds
							  crucial for a productive output.</p>
                        </div>
                    </section>

                    <section className="feature right">
                        <a href="#" className="image icon solid fa-handshake"><img src="images/pic02.jpg" alt="" /></a>
                        <div className="content">
                            <h3>Sell Crops</h3>
                            <p>We help you get best value for your crops by ensuring prices with Minimum Support Price.</p>
                        </div>
                    </section>

                </div>


                <footer className="major container medium">
                    <h3>How are we different</h3>
                    <p>We are creating a safe, regulated and fully virtual platform which acts as a self-
                    independent marketplace exclusively for farmers. Through the use of MSP, we are making farmers
                    aware of the true market value for their goods and help him/her in creating a stronger negotiating
					position for self.</p>

                </footer>

            </div>

        </div>
    )
}

export default Home
