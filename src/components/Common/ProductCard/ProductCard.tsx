import React from 'react';
import DefaultImg from '../../../assets/productImage.png';
import Icon from '../Icon';

import './ProductCard.css';
export interface ProductCardProps {
  productImg: any;
  price: number;
  label: string;
  tag: 'New' | 'Restored';
}

const ProductCard = ({
  productImg = DefaultImg,
  price = 0,
  label = 'No Label',
  tag = 'Restored',
}: ProductCardProps) => {
  return (
    <div className="productCard" tabIndex={0}>
      <img className="productCard-image" src={productImg} alt={`${label} product image`} />
      <div className="productCard-info">
        <span className="productCard-info-section">
          <p className="productCard-priceTag">${price}</p> <div className={`productCard-tag-${tag}`}>{tag}</div>
        </span>
        <span className="productCard-info-section">
          <h2 className="productCard-label">{label}</h2>
          <Icon name="favorite-linear" />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
