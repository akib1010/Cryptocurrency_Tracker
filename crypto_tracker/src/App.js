import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {
 //State to contain the coins
 const [coins, setCoins]= useState([]);
 //State used to search
 const [search, setSearch]= useState('');

 useEffect(() => {
   //Using axios and promises to retreive the data from the API
   //Post an alert if there is an error
   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(res => {
     setCoins(res.data);
   }).catch(error => alert("There was an error while retreving the Data."));
 }, []);

 //To get the coin that is to be searched
 const handleChange = e => {
   setSearch(e.target.value);
 }

 //Function to filter the coins
 //Filter(show) coins according to the input in the search bar, if there is no input display everything
 const filteredCoins= coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className='coin-app'>
      <div className= "coin-search"> 
        <h1 className="coin-text">Search a currency </h1>
        <form> 
          <input type="text" placeholder="Search" className="coin-input" 
          onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin=> {
        return (
          <Coin key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
      })}
      
    </div>
  );
}

export default App;
