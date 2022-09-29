import { useEffect, useState }  from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);
  const [btc, setBtc] = useState(0.00000000000000000);
  const [coinMoney, setCoinMoney] = useState(0.0);
  const [sbl, setSbl] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])

  const onMoneyChange = (event) => {
    setInputMoney(event.target.value);
    setBtc(event.target.value / coinMoney);
  }

  const onCoinChange = (event) => {
    const val = event.target.value.split(",");
    setCoinMoney(val[0]);
    setBtc(inputMoney / val[0]);
    setSbl(val[1]);
  }
  return (
    <div>
      <h1>The Coin List ({coins.length})</h1>
      <label>Money</label>
      <input type="number" value={inputMoney} onChange={onMoneyChange} />
      <label>{sbl}</label>
      <input type="number" value={btc} readOnly/>
      {loading ? <strong>Loading ...</strong> : 
      <select onChange={onCoinChange}>
        {
          coins.map((coin) => <option key={coin.id} value={[coin.quotes.USD.price, coin.symbol]}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)
        }
      </select>}
      
    </div>

  );
}

export default Coin;
