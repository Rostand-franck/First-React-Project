import EmptySpace3 from "../Components/About/EmptySpace3"
import Team from "../Components/About/Team"
import Backends from "../Components/About/Backends"
import Frontends from "../Components/About/Frontends"


const About = () => {
  return (
    <div className='products'>
      <Team />
      <Frontends/>
      <Backends />
      <EmptySpace3 />
    </div>
  )
}

export default About