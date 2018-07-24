import React from 'react'
import { Container } from './styled'


function StatsView(props) {
  return (
    <Container>
      {JSON.stringify(props.data, null, 2)}
    </Container>
  )
}

export default StatsView