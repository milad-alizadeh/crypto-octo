import React from 'react';
import { IconWithLabel } from 'components';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

let navListData = [
  {
    label: 'Dashboard',
    icon: 'monitor',
    to: '/',
    exact: true,
    activeClassName: 'current'
  },
  {
    label: 'Watchlist',
    icon: 'list',
    to: '/watchlist',
    activeClassName: 'current'
  },
  {
    label: 'Settings',
    icon: 'cog',
    to: '/settings',
    activeClassName: 'current'
  }
];

const NavigationStyled = styled.ul`
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;

  ${breakpoint('xlarge')`
    grid-auto-flow: row;
  `}
`;

const NavigationItem = styled.li``;

const renderList = (navList) => {
  return navList.map((item) => {
    return (
      <NavigationItem key={item.icon}>
        <IconWithLabel {...item} />
      </NavigationItem>
    );
  });
};

const Navigation = () => {
  return (
    <NavigationStyled>
      {renderList(navListData)}
    </NavigationStyled>
  );
};

export default Navigation;
