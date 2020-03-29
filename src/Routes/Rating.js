import React, { useState } from 'react';
import Rating from '../Components/Rate';

export default () => {
  const [categoryId, setCategoryId] = useState("");
  

  return(<Rating categoryId={categoryId} setCategoryId={setCategoryId} />);
}