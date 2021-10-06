import React from 'react';
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles'

export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/45953201?v=4' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Thiago</UserName>
            </User>
          </UserInfo>
          <Feather name="power"/>
        </UserWrapper>
      </Header>
    </Container>
  )
}