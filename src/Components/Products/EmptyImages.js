const EmptyImages = () => {
  return (
    <div className="emptyimages">
      <h3>Our services</h3>
      <div className="main-emptyimages">

        <div className="emptyimages-container1">
        <img src="./image/Vector.svg" alt="Not Found"/>
          <h1><span>Website development</span></h1>
        </div>
        
        <div className="emptyimages-container2">
          <img src="./image/Vector.svg" alt="Not Found"/>
        <h1><span>Mobile app dev</span></h1>
        </div>

        <div className="emptyimages-container3">
        <img src="./image/Vector.svg" alt="Not Found"/>
        <h1><span>Blockchain</span></h1>
        </div>
      </div>
    </div>

  )
}

export default EmptyImages