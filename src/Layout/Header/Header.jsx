import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import { NavBarStyle, LinkStyle, LogoStyle, UserImg, UserContent } from './Header.style';
import novaticsLogo from '../../assets/novatics-logo.png'
import tiago from '../../assets/tiago-leifert.jpg';

export default function Header () {
  return (
    <NavBarStyle>
      <div>
        <LinkStyle href="https://www.novatics.com.br/" className="logo">
          <LogoStyle src={novaticsLogo} alt='Novatics' />
        </LinkStyle>
        <LinkStyle href="google.com" className="btn">Dê um kudo</LinkStyle>
        <LinkStyle href="google.com" className="btn">Timeline</LinkStyle>
        <LinkStyle href="google.com" className="btn">Meus kudos</LinkStyle>
      </div>

      <UserContent>
        <HelpIcon />
        <UserImg src={tiago} alt="user" />
        <LinkStyle style={{marginLeft: '8px'}}>Tiago Leifert</LinkStyle>
      </UserContent>
    </NavBarStyle>
  )
}