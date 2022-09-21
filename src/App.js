import React from 'react';
import { Title, Button, SectionBar, Container } from './styles'

function App() {

  return (
    <Container>

      <SectionBar>
        <Title>Never Stop Learning</Title>
      </SectionBar>

      <SectionBar>
        <Button>Projetos</Button>
        <Button>Redes Sociais</Button>
        <Button>Contato</Button>
        <Button>Sobre</Button>
      </SectionBar>
      
      

    </Container>

  )
}

export default App;

