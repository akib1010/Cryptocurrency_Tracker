# Cryptocurrency_Tracker
Website to track the prices of cryptocurrency


### API 

The cryptocurrency information is being retrieved from the API of [Coin Gecko](https://www.coingecko.com/) 


API request URL 
```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false
```

**Axios** is used to implement GET requests in this project.

```
Axios is promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code.

You can also intercept and cancel requests, and there’s built-in client-side protection against cross-site request forgery.
```

### Implementation

Utilized useState() and useEffect() to retreive crypto information and map each individual currency into a list.

Added a search feature which returns a currency as desired by the user