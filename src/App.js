import React from "react"
import Card from "./components/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import axios from "axios"


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get("https://660580e02ca9478ea1807a75.mockapi.io/items").then(res => {
      setItems(res.data);
    });
    axios.get("https://660580e02ca9478ea1807a75.mockapi.io/cart").then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://660580e02ca9478ea1807a75.mockapi.io/cart", obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://660580e02ca9478ea1807a75.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }



  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="search" ></img>
            {searchValue && <img onClick={() => setSearchValue('')} className="input_remove" src="/img/btn-remove.svg" alt="close"></img>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="cardInner">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}

            />))}

        </div>
      </div>
    </div >
  );
}

export default App;
