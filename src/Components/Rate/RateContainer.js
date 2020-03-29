import React, { useState, useEffect, useCallBack } from "react";
import { Page, List, Block, Navbar, NavTitle, NavTitleLarge } from 'framework7-react';
import RatePresenter from "./RatePresenter";
import Loader from "../Loader";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  RANDOM_BOOKS
} from "./RateQueries";

export default ( { categoryId }) => {
  const [infiState, setInfiState] = useState(true);
  const [preloader, setPreloader] = useState(true);
  const [items, setItems] = useState([]);
  const [after, setAfter] = useState(null);
  const [ loadBooks, { called, loading, data }] = useLazyQuery(RANDOM_BOOKS, {
    variables: {
      categoryId: '',
      afterId: after
    }
  })
  
  const loadMore = (e) => {
    if (!infiState) return; 
    setInfiState(false);
    setAfter((items[items.length-1]||{id: null}).id)
    loadBooks()
    if (items.length >= 200) {
      setPreloader(false);
      return;
    }
  };
  
  useEffect(()=>{
    if(loading===false&&called===true&&infiState===false){
      setItems([...items, ...data.randomBooks])
      setInfiState(true);
      if(data.randomBooks.length === 0){
        setPreloader(false)
      }
    }
  }, [loading])

  return (
      <Page className="page-rating" onPageInit={loadMore} infinite onInfinite={loadMore} infiniteDistance={20} infinitePreloader={preloader} >
        <Navbar large innerClass="no-hairline">
          <NavTitleLarge>132</NavTitleLarge>
          <div className="navbar-bg"></div>
        </Navbar>
          <Block>
          <List medial-list className="rate-list">
            {
              items &&
              items.map((book, i) => (
                <RatePresenter author={book.author} title={book.title} id={book.id} key={i}/>
              ))
            }
          </List>
        </Block>
      </Page>
    )

};
    


