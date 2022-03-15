import { Intro } from '../components/Intro'
import { Bio } from '../components/Bio'
import { Stack } from '../components/Stack'
import { Footer } from "../components/Footer"
import { Contact } from "../components/Contact"
import { Works } from "../components/Works"

const First = () => {
  return (
      <div>
          <Intro/>
          <Bio/>
          <Stack/>
          <Works/>
          <Contact/>
          <Footer/>
      </div>

    )
}

export default First