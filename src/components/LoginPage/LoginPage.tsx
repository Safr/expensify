import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { startLogin } from '../../actions';
import { Button } from '../../components/ExpenseForm/ExpenseForm.style';
import { LoginWrapper, LoginInnerBox, Title, P } from './LoginPage.style';
import StoreState from '../../types';

interface Props {
  onStartLogin: () => Promise<object>;
  error: string;
}

export const LoginPage: React.SFC<Props> = ({ onStartLogin, error }) => (
  <LoginWrapper>
    <LoginInnerBox>
      <Title className="box-layout__title">Expensify App</Title>
      <P>{'It\'s time to get your expenses under control.'}</P>
      <Button red onClick={onStartLogin}>Login with Google</Button>
      {error && <P>{error}</P>}
    </LoginInnerBox>
  </LoginWrapper>
);

const mapStateToProps = (state: StoreState) => ({
  error: state.async.error,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onStartLogin: () => dispatch(startLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
