import React from "react";
import {
  Content,
  ContentOverlay,
  ContentImage,
  ContentDetails,
  Title,
  BrotherName,
  TopText,
} from "./ Brothers.style";
import KudoBox from "../Kudo/KudoBox/";

export default function Brothers(props) {
  const {
    info,
  } = props;

  return (
    <Content>
      <ContentOverlay></ContentOverlay>
      <ContentImage src={info.img} style={{ width: "100%", height: "100%" }} />
      <ContentDetails>
        <TopText>
          <Title>Dê um kudo para</Title>
          <BrotherName>{info.name}</BrotherName>
        </TopText>
        <KudoBox
          style={{ justifyContent: "center" }}
          display="none"
        />
      </ContentDetails>
    </Content>
  );
}
