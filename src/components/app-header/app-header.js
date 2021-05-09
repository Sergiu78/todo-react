import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex; 
  align-items: flex-end;
  justify-content: space-between;
`

const AppHeader = ({liked, allPosts}) => {
  return (
    <Header>
      <h1>Ivan Ivanov</h1>
      <h2>{allPosts} записей, из них понравилось {liked} </h2>
    </Header>
  )
}

export default AppHeader;
