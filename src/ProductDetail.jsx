import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTeam } from './TeamContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToTeam } = useTeam();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const categories = Array.isArray(data) ? data : (data.categories || []);
        const hero = categories.flatMap(cat =>
          (cat.heroes || []).map(h => ({ ...h, categoryName: cat.category }))
        ).find(h => String(h.id) === String(id));
        setProduct(hero);
      })
      .catch((err) => console.error("Error fetching hero details:", err));
  }, [id]);

  const handleAddToTeam = () => {
    addToTeam(product);
    navigate('/team');
  };

  if (!product) return <h2 className="loading-text">Loading Details...</h2>;

  return (
    <div className="product-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-card">
        <div className="detail-image-sec">
          <img src={product.characterImage} alt={product.heroName} />
        </div>
        <div className="detail-info-sec">
          <h1 className="detail-title">{product.heroName}</h1>
          <p className="detail-category">Category: {product.categoryName}</p>
          <p className="detail-description">{product.powerDescription}</p>
          <h2 className="detail-price">Real Name: {product.realName}</h2>
          <p><strong>Power:</strong> {product.power}</p>
          <button className="add-to-cart-btn" onClick={handleAddToTeam}>Add to Team</button>
        </div>
      </div>
    </div>
  );
}