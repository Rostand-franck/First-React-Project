import first from "../../image/confettiball.png"
import second from "../../image/Ring1.jpg"
import third from "../../image/headstone.jpg"


const DifferentPlans2 = () => {
  const service1 = ["service", "service", "service", "service"]

  const services = [
    { 
      title: "Website",
      img: first,
      service: service1,
      price: '150,000'
    },
    { 
      title: "Blockchain",
      img: "second",
      service: service1,
      price: '450,000'
    },
    { 
      title: "mobile dev",
      img: third,
      service: service1,
      price: '650,000'
    }
  ];

  const Box = (title, img, service, price) => {
    return (
      <div className="Box1">
        <h2>
          {title} <img src={img} height="25px"/>
        </h2>

        <ul>
        {service.map(elt=>{
            return (
          <li>
            <img src={img}  height="25px" className="icon"/> 
            <a href="/">{elt}</a>
          </li>)
        })} 
        </ul>

        <span>{price}Frs</span>
      </div>
    )
  };

  return (
    <div className="containerPlans1">
      <h3>
        <span>Ours plans</span>
      </h3>

      <div className="differentPlans1">  
        {services.map(service=>{
          return Box(service.title, service.img, service.service, service.price)
        })}
      </div>

    </div>   
  )
}
  
  export default DifferentPlans2


  // return (
  //   <div className="containerPlans">
  //       <h3><span>Ours plans</span></h3>
  //     <div className="differentPlans">   
  //       <div className="box1">
  //           <h2>Website <img src="/image/confettiball.png" alt="Not Found" height="25px"/></h2>
  //           <ul>
  //             {offer1.map(elt=>{
  //              return <li> <img src={first} alt="Not Found" height="25px" className="icon"/> <a href="/">{elt}</a></li>

  //             })} </ul>
  //           <span>150,000Frs</span>
  //       </div>

  //       <div className="box2">
  //           <h2>Blockchain <img src="/image/Ring1.jpg" height="25px"/></h2>
  //           <ul>
  //               <li> <img src="/image/Ring1.jpg" alt="Not Found" height="25px"/> <a href="/">offers</a></li>
  //               <li><img src="/image/Ring1.jpg" alt="Not Found" height="25px"/><a href="/"> offers</a></li>
  //               <li><img src="/image/Ring1.jpg" alt="Not Found" height="25px"/> <a href="/">offers</a></li>
  //               <li><img src="/image/Ring1.jpg" alt="Not Found" height="25px"/> <a href="/">offers</a></li>
  //           </ul>
  //           <span>450,000Frs</span>
  //       </div>

  //       <div className="box3">
  //           <h2> Mobile dev  <img src="/image/headstone.jpg" height="25px"/></h2>
  //           <ul>
  //               <li><img src="/image/headstone.jpg" alt="Not Found" height="25px"/><a href="/"> offers</a></li>
  //               <li><img src="/image/headstone.jpg" alt="Not Found" height="25px"/> <a href="/">offers</a></li>
  //               <li><img src="/image/headstone.jpg" alt="Not Found" height="25px"/> <a href="/">offers</a></li>
  //               <li><img src="/image/headstone.jpg" alt="Not Found" height="25px"/><a href="/"> offers</a></li>
  //           </ul>
  //           <span>650,000Frs</span>
  //       </div>
  //     </div>

  //   </div>
   

  // )