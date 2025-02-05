import "./Card.css";
import { v4 as uuidv4 } from "uuid";

export default function Card({ id, name, location, image, tags}) {
  return (
        <div className={'profile-card'} key={id} >
          <div className='profile-image'>
            <img src={image} alt={name}/>
          </div>
          <div className='profile-details'>
            <p className='profile-name'>{name}</p>
            <p className='profile-location'>{location}</p>
            <div className='tag-wrapper'>
              {tags?.map((tag) => {
                return <p className='tag' key={uuidv4()}>{tag}</p>;
              })}
            </div>
          </div>
      </div>
      
  );
}
