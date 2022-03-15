import { ContainerCard,H2} from './style'
import  { Card1 }  from '../Card/Card1'
import  { Card2 }  from '../Card/Card2'
import  { Card3 }  from '../Card/Card3'
import  { Card4 }  from '../Card/Card4'
import  { Card5 }  from '../Card/Card5'
import  { Card6 }  from '../Card/Card6'

export const Works = () => {
  return (
    <div data-aos="fade-left" id='works'>
      <H2>
        <h2>
          Works & Projects
        </h2>
      </H2>
      <ContainerCard>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
      </ContainerCard>  
    </div>
  )
}

