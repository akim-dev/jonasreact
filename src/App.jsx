/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Piiiza </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* rendereing list */}
      {/* conditionial rendering */}
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine .6 creative sidher to chooese form All
            form our stone oven, all organic all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <div>
          <p>
            No pizza available, we still work on new pizza, please come later
          </p>
        </div>
      )}

      {/* <Pizza
        name="Pizza Spinnaci"
        inggredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        inggredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

// untuk mengeluarkan object ke dalam array harus di kasih kurung kurawal lagi.ini yang di sebut destructiing
function Pizza({ pizzaObject }) {
  //   console.log({ pizzaObject });

  //   menghilangkan pizza yang soldout
  //   if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="" />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>
          {pizzaObject.soldOut ? (
            <span style={{ color: "red" }}>SOLD OUT</span>
          ) : (
            "$" + pizzaObject.price
          )}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {/* <h2>Footer </h2> */}
      {/* {new Date().toLocaleString()}. We are currently open */}
      {/* {isOpen === closeHour ? "We are open " : "we are closed"} */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className="order">
          <p>Come visit or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} until {closeHour}:00
      </p>
    </div>
  );
}
