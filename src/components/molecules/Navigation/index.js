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
  display: flex;
  justify-content: center;

  ${breakpoint('xlarge')`
    flex-direction: column;
    justify-content: flex-start;
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
