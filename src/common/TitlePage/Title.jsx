import React from 'react';
import { TitleStyle, Section } from './Title.style';

export default function Title (props) {
  const { title } = props;

  return (
    <Section>
      <TitleStyle>{title}</TitleStyle>
    </Section>
  )
}