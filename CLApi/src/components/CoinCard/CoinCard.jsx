import { useNavigate } from "react-router-dom"

const CoinCard = ({ symbol, price_usd, percent_change_24h, nameid }) => {
    const navigate = useNavigate()

    return (
        <div className="crypto-card">
            <img src={`https://cryptologos.cc/logos/${nameid}-${symbol.toLowerCase()}-logo.png`}
                alt={symbol} className="crypto-icon" />
            <h3>{symbol}</h3>
            <p className="crypto-price">{price_usd}</p>
            <p className="crypto-change positive">{percent_change_24h}</p>
        </div>
    )
}

export default CoinCard