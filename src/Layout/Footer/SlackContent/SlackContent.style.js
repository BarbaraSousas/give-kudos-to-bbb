import styled from "styled-components";

export const SlackLogo = styled.img`
  width: 40px;
`;

export const SlackContainer = styled.div`
  display: flex;

  & .slack-title {
    font-weight: 900;
    margin-bottom: 8px;
  }

  & .slack-txt {
    font-weight: lighter;
    font-size: 12px;
  }
`;

export const HowToSendSlackMsg = styled.div`
  background: #f3f3f3;
  font-size: 14px;
  padding: 6px 10px;
  margin-top: 10px;
  border-radius: 3px;

  & em {
    color: #0064bd;
  }
`;

export const Emojis = styled.div`
  margin-top: 15px;
  display: flex;
  
  & img {
    width: 25px;
  }

  & em {
    font-size: 12px;
    color: #b5b5b5;
    margin: 10px 15px 0 5px;
  }
`;
