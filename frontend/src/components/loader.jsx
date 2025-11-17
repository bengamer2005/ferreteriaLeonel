import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderStyle>
      <div className="card">
        <div className="card__skeleton card__title" />
        <div className="card__skeleton card__description">       </div>
      </div>
    </LoaderStyle>
  )
}

export const LoaderEngranaje = () => {
  return (
    <LoaderEngranajeStyle>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="loader" />
      </div>
    </LoaderEngranajeStyle>
  )
}

const LoaderEngranajeStyle = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    background: #353535;
    display: block;
    margin: 20px auto;
    position: relative;
    box-sizing: border-box;
    animation: rotationBack 1s ease-in-out infinite reverse;
  }

  .loader::before {
    content: '';
    box-sizing: border-box;
    left: 0;
    top: 0;
    transform: rotate(45deg);
    position: absolute;
    width: 48px;
    height: 48px;
    background: #2e2e2e;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .loader::after {
    content: '';
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgb(0, 0, 0);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }`;

const LoaderStyle = styled.div`
  .card {
    width: 18rem;
    padding: 1rem;
    text-align: center;
    border-radius: .8rem;
    background-color: white;
  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#ccc 0px,
  		rgb(229 229 229 / 90%) 40px,
  		#ccc 80px
  	);
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }

  .card__title {
    height: 15px;
    margin-bottom: 15px;
  }

  .card__description {
    height: 100px;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }`;

export default Loader;
