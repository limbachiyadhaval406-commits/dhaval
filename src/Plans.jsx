
import React, { useState, useEffect } from 'react';
import './main.css';
import { Link } from 'react-router-dom';


export default function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        // Ensure data is an array before processing
        const categories = Array.isArray(data) ? data : (data.categories || []);
        const allHeroes = categories.flatMap(cat =>
          (cat.heroes || []).map(hero => ({ ...hero, categoryName: cat.category }))
        );
        setProducts(allHeroes);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="plans-wrapper">
      <div style={{ background: '#ca191fff', color: 'white', padding: '15px', textAlign: 'center' }}>
        <h2>Our Products</h2>
      </div>

      <div className="product-display-section">
        <div className="cards-wrapper">  
          {products.map((item) => (
            <div className="single-card" key={item.id}>
              <div className="card-img-container">
                <img src={item.actorImage} alt={item.heroName} />
              </div>
              <div className="card-details">
                <h4>{item.heroName}</h4>
                <p className="price-tag">{item.realActor}</p>
                <Link to={`/product/${item.id}`} className="action-btn">
                  view details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}