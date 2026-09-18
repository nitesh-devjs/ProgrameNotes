import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('INR');
  const toggle = () => setCurrency(c => c === 'INR' ? 'USD' : 'INR');

  const format = (product) => {
    if (currency === 'INR') return `₹${product.price}`;
    return `$${product.usdPrice}`;
  };

  const formatOriginal = (product) => {
    if (currency === 'INR') return product.originalPrice ? `₹${product.originalPrice}` : null;
    return product.usdOriginalPrice ? `$${product.usdOriginalPrice}` : null;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggle, format, formatOriginal }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
