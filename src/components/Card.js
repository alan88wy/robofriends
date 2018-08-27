// @ts-ignore
import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {

  return (

    <div className='Card'>
      <img alt='Robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div >
    </div>
  )
}

// const Card = (props) => {

//   return (
//     //  <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//     // @ts-ignore
//     <div className='Card'>
//       <img alt='Robot' src={`https://robohash.org/${props.id}?200x200`} />
//       <div>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//       </div >
//     </div>
//   )
// }

// The above can be written as the following as well:

// const Card = (props) => {
//   const { id, name, email } = props;
//   return (

//     <div className='Card'>
//       <img alt='Robot' src={`https://robohash.org/${id}?200x200`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div >
//     </div>
//   )
// }

// or the following. We restructure props into {id,name,email}
//
// const Card = ({id, name, email}) => {
//  
//   return (
//
//     <div className='Card'>
//       <img alt='Robot' src={`https://robohash.org/${id}?200x200`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div >
//     </div>
//   )
// }

export default Card;
