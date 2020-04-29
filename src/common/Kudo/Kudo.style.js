import styled from "styled-components";

export const KudoContainer = styled.div`
  margin-right: 10px;
`;

export const Brooche = styled.img`
  width: 32px;
  background: ${(props) => props.color};
  border-radius: 50px;
  padding: 6px;
  cursor: pointer;
`;

export const AvailableBrooches = styled.div`
  text-align: center;
  width: 10px;
  position: absolute;
  margin-top: -8px;
  margin-left: 15px;
  font-size: 9px;
  background: black;
  color: white;
  border-radius: 50%;
  padding: 2px;
  display: ${props => props.display}
`;
