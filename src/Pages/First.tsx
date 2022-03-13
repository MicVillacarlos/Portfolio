import { Intro } from '../components/Intro'
import { Bio } from '../components/Bio'
import { Stack } from '../components/Stack'
import { Footer } from "../components/Footer"
import { Contact } from "../components/Contact"

const First = () => {
  return (
      <div>
          <Intro/>
          <Bio/>
          <Stack/>
          <Contact/>
          <Footer/>
      </div>

    )
}

export default First