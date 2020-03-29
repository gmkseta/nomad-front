import React from 'react';
import { Page, ListItem, List, BlockTitle } from 'framework7-react';


export default class extends React.Component{
  render() {
    return(
      <Page className="page-notification">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <List mediaList>
          <ListItem
            subtitle="Beatles"
            text="asd"
            >
            <img alt="" slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg" width="44" />
          </ListItem>
          <ListItem
            subtitle="전국민 대상, 왓챠플레이 3일 무료 이용권 증정! 모두 힘내세요."
            text="asd"
            >
            <img alt="" slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-3.jpg" width="44" />
          </ListItem>
        </List>
      </Page>
    )
  }
}