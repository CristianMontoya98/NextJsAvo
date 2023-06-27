import React from 'react'
import { Header } from 'semantic-ui-react'

import { AvoDead } from '@components/SVGIcons'

const RottenHeader = () => (
  <Header size="huge" as="h1">
    Platzi
    <AvoDead size="58px" />
    Avo
  </Header>
)

export default RottenHeader
