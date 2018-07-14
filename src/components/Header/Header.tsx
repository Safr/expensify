import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { startLogout } from '../../actions';
import { Button, HeaderContainer, HeaderTag, Title } from './Header.style';

interface Props {
  onStartLogout: () => Promise<object>;
}

export const Header: React.SFC<Props> = ({ onStartLogout }) => (
  <HeaderTag>
    <HeaderContainer>
      <Title>
        <Link to="/dashboard">Expensify</Link>
      </Title>
      <Button onClick={onStartLogout}>Logout</Button>
    </HeaderContainer>
  </HeaderTag>
);

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onStartLogout: () => dispatch(startLogout()),
});

export default connect(null, mapDispatchToProps)(Header);
