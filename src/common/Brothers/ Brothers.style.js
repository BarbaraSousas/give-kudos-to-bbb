import styled from "styled-components";

export const BrotherImgStyle = styled.img`
  width: 100%;
  height: 100%;
`;

export const BrotherContainerStyle = styled.div`
  font-size: 30px;
  text-align: center;
`;

export const ContentOverlay = styled.div`
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`;


export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;

  &.fadeIn {
    top: 80%;
  }
`;

export const BrotherName = styled.p`
  color: #fff;
  font-size: 0.8em;
  font-weight: 900;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 0.3em;
  font-weight: lighter;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100%;

  &.${ContentOverlay} {
    background: rgba(0,0,0,0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover ${ContentOverlay} {
    opacity: 1;
  }
  
  &:hover ${ContentDetails} {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
`;

export const TopText = styled.div`
  margin-bottom: 60px;
`;