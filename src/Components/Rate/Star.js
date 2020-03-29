import React, { useState } from 'react';
import { FontAwesomeIcon as FontAwesomeIconO } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';
import { useMutation } from "@apollo/react-hooks";
import {
  ADD_REVIEW
} from "./RateQueries";

const FontAwesomeIcon = styled(FontAwesomeIconO)`
  font-size: 42px;
  width: 1.125em!important;
`
const StarContainer = styled.div`
  width: 100%;
`

faStarO.className = "unfill"
faStar.className = "fill"
faStarHalfAlt.className = "fill"

export default ({id, rate}) => {
  const bookId = id;
  const [newRate, setNewRate] = useState(rate);
  const [ addReviewMutation ]= useMutation(ADD_REVIEW, {
    onError: (err)=>{
      console.log(err)
    }
  });

  const onDrag = (touch) => {
    // 아 좋은방법 없나요 .. ㅜㅜ .item-content padding-left = 16px
    // iten inner margin-left 16px
    // image 44px 
    let rate = Number.parseInt((touch.touches[0].pageX-(60+32))/21);
    setNewRate(
      rate < 10 ? rate : 10
    )
  }
  
  const getStarArr = ()=>{
    let result = [];
    let i = 1;
    for(;i<=newRate/2*1;i++){
      result.push(faStar);
    }
    if(i-newRate/2===0.5){
      result.push(faStarHalfAlt);
      i++
    }
    for(;i<=5;i++){
      result.push(faStarO)
    }
    return result;
  }
  
  return (
  <StarContainer onTouchStart={onDrag} onTouchEnd={()=>{addReviewMutation({variables: { bookId: id, rate: newRate }})}} onTouchMove={onDrag} className="star-container">
    {getStarArr().map((icon, index) => (
      <FontAwesomeIcon icon={icon} key={index} className={icon.className}/>
    ))}
  </StarContainer>)
}
  