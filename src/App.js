import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]); //useState for data load... useState এর মধ্যে useEffect থাকে
  const [cart, setCart] = useState([]);

  //useEffect for API call  //its structure= eseEffect(() => {fetch...}, [])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    // .then(data => setCountries(data))    //console log করে data দেখার জন্যে পরে লাইনের কাজ করা
    .then(data => {
      setCountries(data);
      // console.log(data);
    })
    .catch(error => console.log(error))  //কোনো error থাকলেও website crash খাবে না।
  }, [])

  //যেই country button এ click করবো ওইটাই open হবে
  // const handleAddCountry = (country) => {console.log('add handleAddCountry', country);}
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country: {countries.length}</h1>
        <h5>Country Added: {cart.length}</h5>
        <Cart cart={cart}></Cart>
        <ul>
          {
            //country={country} দিয়ে country.js এ country গুলো send করছে  //key added by unique id for remove some error
            countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
