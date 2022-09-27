import Confettiball from "../../image/confettiball.png";
import ring1 from "../../image/Ring1.jpg";
import Headstone from "../../image/headstone.jpg";

const DifferentPlans = () => {

  const offer1 = [ "offers", "offers", "offers", "offers"];

  const offers = [
    {
      title: "Birthday",
      img: Confettiball, 
      offer: offer1,
      price: '150,000'
    },
    {
      title: "Wedding",
      img:ring1, 
      offer: offer1,
      price: '450,000'
    },
    {
      title: "Beriais",
      img:Headstone, 
      offer: offer1,
      price: '650,000'
    }
  ];

  const box = (title, img, offer, price) => {
    return (
      <div className="box2">
        <h2>
          {title} <img src={img} height="25px"/>
        </h2>

        <ul>
        {offer.map(elt=>{
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
  } 

  return (
    <div className="containerPlans">
      <h3>
        <span>Ours plans</span>
      </h3>

      <div className="differentPlans">  
        {offers.map( offer => {
          return box(offer.title, offer.img, offer.offer, offer.price)
        })}
      </div>

    </div>   
  )  
}

export default DifferentPlans

//     <div className="box2">

//         <h2>Weddings <img src="/image/Ring1.jpg" height="25px"/></h2>
//         <ul>
//             <li><a href="#"> <img src="/image/Ring1.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/Ring1.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/Ring1.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/Ring1.jpg" height="25px"/> offers</a></li>
//         </ul>
//         <span>450,000Frs</span>
//     </div>

//     <div className="box3">
//         <h2> Beriais  <img src="/image/headstone.jpg" height="25px"/></h2>
//         <ul>
//             <li><a href="#"><img src="/image/headstone.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/headstone.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/headstone.jpg" height="25px"/> offers</a></li>
//             <li><a href="#"><img src="/image/headstone.jpg" height="25px"/> offers</a></li>
//         </ul>
//         <span>650,000Frs</span>
//     </div>
//   </div>

// </div>
  

  


