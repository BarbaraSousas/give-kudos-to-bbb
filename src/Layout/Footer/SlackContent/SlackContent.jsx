import React from 'react';
import slackLogo from '../../../assets/slack-logo.png';
import maleStudent from "../../../assets/male-student.png";
import clapping from "../../../assets/clapping.png";
import grateful from "../../../assets/grateful.png";
import { SlackLogo, SlackContainer, HowToSendSlackMsg, Emojis } from './SlackContent.style';

export default function SlackContent () {
  return (
    <div>
      <SlackContainer>
        <SlackLogo src={slackLogo} alt="Slack" />
        <div  style={{marginLeft: "8px"}}>
          <p className="slack-title">Reconheça seu colega pelo Slack!</p>
          <span className="slack-txt">Mande um kudo pelo nosso canel #paredãodobem</span>
        </div>
      </SlackContainer>
      <HowToSendSlackMsg>
        <p>/kudo <em>#doekudo @nomedocolega</em> Seguido de um comentário!</p>
      </HowToSendSlackMsg>
      <Emojis>
        <img src={clapping}  alt="emoji"/> 
          <em>#foitop</em>
        <img src={grateful}  alt="emoji"/>
          <em>#gratidao</em>
        <img src={maleStudent} alt="emoji"/>
          <em>#aprendi</em>
      </Emojis>
    </div>
  )
}