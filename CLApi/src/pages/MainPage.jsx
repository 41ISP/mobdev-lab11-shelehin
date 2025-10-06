import './MainPage.css'


const MainPage = () => {
    return (
        <div className="main-page">
            
            <header className="header">
                <h1>CryptoTracker</h1>
                <p>Отслеживай курс популярных криптовалют в реальном времени</p>
            </header>

            
            <section className="search-section">
                <input type="text" placeholder="🔍 Найди свою монету..." className="search-input" />
            </section>

           
            <section className="top-crypto">
                <h2>🔥 Топ криптовалют за сегодня</h2>
                <div className="crypto-grid">
                    <div className="crypto-card">
                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="crypto-icon" />
                        <h3>Bitcoin (BTC)</h3>
                        <p className="crypto-price">$68,120</p>
                        <p className="crypto-change positive">+2.4%</p>
                    </div>

                    <div className="crypto-card">
                        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH" className="crypto-icon" />
                        <h3>Ethereum (ETH)</h3>
                        <p className="crypto-price">$3,250</p>
                        <p className="crypto-change negative">-1.1%</p>
                    </div>

                    <div className="crypto-card">
                        <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="SOL" className="crypto-icon" />
                        <h3>Solana (SOL)</h3>
                        <p className="crypto-price">$150</p>
                        <p className="crypto-change positive">+4.7%</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainPage