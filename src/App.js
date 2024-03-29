import React from "react"
import Card from "./components/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://660580e02ca9478ea1807a75.mockapi.io/items").then(res => { return res.json() }).then(json => { setItems(json); })
  }, [])
  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  console.log(cartItems);
  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="search" ></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="cardInner">
          {items.map((item) => (
            <Card
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
