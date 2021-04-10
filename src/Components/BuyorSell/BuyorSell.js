import React from 'react'
import './BuyorSell.css'
import Buy from './buy.jpeg'
import Sell from './sell.jpeg'

import { useHistory } from 'react-router-dom'

const BuyorSell = () => {

    const history = useHistory();

    const buy = () => {
        history.push('/buy')
    }

    const sell = () => {
        history.push('/sell')
    }

    return (
        <div className='buyorsell'>

            <div className="buyorsell__heading">
                <h1 className='buyorsell__h1'>Welcome to <strong>Khet Market</strong></h1>
            </div>



            <div className="buyorsell__cards">
                <div className="card" onClick={buy}>
                    <img src={Sell} alt="Avatar" style={{ width: '100%', padding: '10px', height: "310px" }} />
                    <div className="container">
                        <h4><b>Buy Goods</b></h4>
                    </div>
                </div>

                <div className="card" onClick={sell}>
                    <img src={Buy} alt="Avatar" style={{ width: '100%', padding: '10px', height: "310px" }} />
                    <div className="container">
                        <h4><b>Sell Crops</b></h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BuyorSell
