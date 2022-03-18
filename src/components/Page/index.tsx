import { Container1 } from "./style"
import { Navbar } from "../Navbar"
import { Intro } from "../Intro"
import { Bio } from "../Bio"
import { Stack } from "../Stack"
import { Works } from "../Works"
import { Contact } from "../Contact"
import { Footer } from "../Footer"
import { Curly } from '../Curly'

export const Page1 = () => {
  return (
      <Container1>
        <Navbar/>
        <Intro/>
        <Bio/>
        <Curly/>
        <Stack/>
        <Works/>
        <Contact/>
        <Footer/>
      </Container1>
  )
}

