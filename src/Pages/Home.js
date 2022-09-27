import React from 'react'
import DifferentPlans from '../Components/Home/DifferentPlans'
import EmptySpace from '../Components/Home/EmptySpace'
import Plan from '../Components/Home/Plan'
import Pseudo from '../Components/Home/Pseudo'



const Home = () => {
  return (
    <div className='home'>
      <Pseudo/>
      <Plan/>
      <DifferentPlans/>
      <EmptySpace/>
    </div>
  )
}

export default Home