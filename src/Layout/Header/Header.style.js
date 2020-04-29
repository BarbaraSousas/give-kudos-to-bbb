import styled from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  padding: 10px 20px 0;
`;

export const LinkStyle = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 25px;
  font-weight: 700;
  &.logo {
    filter: invert(100%) sepia(100%) saturate(3207%) hue-rotate(130deg)
      brightness(0%) contrast(100%);
    margin-left: 0;
    &:before {
      content: " ";
      position: absolute;
      left: 96px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: black;
      height: 15px;
    }
  }
  &.btn {
    &:hover {
      border-bottom: 1px solid black;
    }
  }
  &:first-child {
    width: 85px;
  }
  & .user-name {
    margin-left: 3px;
  }
`;

export const LogoStyle = styled.img`
  width: 85px;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-left: 25px;
`;