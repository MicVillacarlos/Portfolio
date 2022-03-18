import { Container1 } from "./style"
import { Navbar } from "../Navbar"
import { Intro } from "../Intro"
import { Bio } from "../Bio"
import { Stack } from "../Stack"
import { Works } from "../Works"
import { Contact } from "../Contact"
import { Footer } from "../Footer"

export const Page1 = () => {
  return (
      <Container1>
        <Navbar/>
        <Intro/>
        <Bio/>
        <Stack/>
        <Works/>
        <Contact/>
        <Footer/>
      </Container1>
  )
}

