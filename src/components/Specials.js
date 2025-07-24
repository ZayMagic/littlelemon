import React from 'react';
import SpecialCard from './SpecialCard';
import greekSalad from './assets/greek salad.jpg';
import bruschetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';

const specialsData = [
  {
    title: "Greek Salad",
    price: "12.99",
    image: greekSalad,
    description: "The famous greek salad of crispy lettuce, peppers, olives and feta cheese..."
  },
  {
    title: "Bruschetta",
    price: "5.99",
    image: bruschetta,
    description: "Our Bruschetta is made from grilled bread rubbed with garlic..."
  },
  {
    title: "Lemon Dessert",
    price: "5.00",
    image: lemonDessert,
    description: "This comes straight from grandma’s recipe book, authentic and delicious."
  }
];

const Specials = () =>{
    return(
        <section className ="specials">
            <div className ="specials-header">
                <h2>This week's specials!</h2>
                <button className="menu-btn">Online Menu</button>
            </div>
            <div className='special-cards'>
                {specialsData.map((item,index) => (
                    <SpecialCard 
                    key={index}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Specials;