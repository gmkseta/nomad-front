import React from 'react';
import { Page, ListItem, List, BlockTitle, Swiper, SwiperSlide } from 'framework7-react';
import { BookFeed } from '../Components/Book';

export default () => {
  return(
    <Page className="page-home">
      <List>
        <ListItem title="Page Transitions" link="/page-transitions/"></ListItem>
        <ListItem title="Routable Modals" link="/routable-modals/"></ListItem>
        <ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/"></ListItem>
        <ListItem title="Master-Detail (Split View)" link="/master-detail/"></ListItem>
      </List>
      <BlockTitle>북챠 추천 책</BlockTitle>
        <Swiper params={{speed:500, slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true}}>
          {
            [1,2,3,4,5].map((i)=>(
                <SwiperSlide key={i} className="book-swiper-slide">
                  <BookFeed/>
                </SwiperSlide>
              )
            )
          }
          
        </Swiper>
        
    </Page>
  )
}