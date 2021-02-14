import React from 'react'
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body
} from './styles/accordion'

const ToggleContext = React.createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = React.useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = React.useContext(ToggleContext)

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = React.useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
