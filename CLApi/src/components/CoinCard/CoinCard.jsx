import { useNavigate } from "react-router-dom"
import './CoinCard.css'

const CoinCard = ({ id, symbol, price_usd, percent_change_24h, nameid }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/coin/${id}`)
    }

    return (
        <div onClick={handleClick} className="coin-card">
            <div className="crypto-card">
                <img src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.png`}
                    alt={symbol} className="crypto-icon" />
                <h3>{symbol}</h3>
                <p className="crypto-price">{price_usd}$</p>
                <p className={`crypto-change ${percent_change_24h < 0 ? "negative" : "positive"}`}
                >
                    {percent_change_24h}%
                </p>
            </div>
        </div>
    )
}

export default CoinCard