import React from 'react';
import { Loader, Image } from './LoadingPage.style';

const LoadingPage = () => (
  <Loader>
    <Image src={require('../../images/loader.gif')} alt="loader" />
  </Loader>
);

export default LoadingPage;
