import React from 'react';
import PropTypes from 'prop-types';
import { IconWithLabel } from 'components';
import styled from 'styled-components';

const NavigationStyled = styled.ul`
  display: flex;
  background: ${({ theme }) => theme.colors.greyDark};
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

const Navigation = (props) => {
  return (
    <NavigationStyled {...props}>
      {renderList(props.navList)}
    </NavigationStyled>
  );
};

Navigation.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string
  }))
};

export default Navigation;
