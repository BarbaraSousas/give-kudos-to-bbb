import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Title, Container } from '../LinksRapidos/EasyLinks.style';
import { Credits } from './SocialLinks.style';

export default function EasyLinks () {
  return (
    <Container>
      <Title>Nossos canais</Title>
      <div>
        <a href="google.com" style={{color: 'black'}}><FacebookIcon style={{ fontSize: 30 }} /></a>
        <a href="google.com" style={{color: 'black'}}><LinkedInIcon style={{ fontSize: 30 }} /></a>
        <a href="google.com" style={{color: 'black'}}><TwitterIcon style={{ fontSize: 30 }} /></a>
        <a href="google.com" style={{color: 'black'}}><InstagramIcon style={{ fontSize: 30 }} /></a>
      </div>
      <Credits>Novatics @2020</Credits>
    </Container>
  )
}