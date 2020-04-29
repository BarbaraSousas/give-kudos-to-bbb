import React from 'react';
import SlackContent from './SlackContent';
import { FooterContainer } from './Footer.style';
import EasyLinks from './LinksRapidos';
import SocialLinks from './SocialLinks';

export default function Footer () {
  return (
    <FooterContainer>
      <SlackContent />
      <EasyLinks />
      <SocialLinks />
    </FooterContainer>
  )
}