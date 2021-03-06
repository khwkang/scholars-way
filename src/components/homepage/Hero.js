import React from 'react'
import logo from '../../img/sw_logo.png'
import { QuickAccessBar } from './QuickAccessBar'
import animation from './animation.js'
import {
  Container,
  Content,
  HeroLogo,
  HeroTitle,
  HeroSubTitle,
} from './Hero.styled'

export const Hero = () => (
  <Container id="home_hero">
    <Content>
      <img src={logo} alt="" className={HeroLogo} />
      <HeroTitle>Scholars Way</HeroTitle>
      <HeroSubTitle>Healing Arts</HeroSubTitle>
    </Content>
    <QuickAccessBar />
  </Container>
)
