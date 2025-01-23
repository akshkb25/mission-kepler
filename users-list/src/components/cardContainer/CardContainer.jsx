import { profiles } from '../../assets/json/profiles.js';
import Card from "../Card/Card.jsx";
import './CardContainer.css';

export default function CardContainer() {
    return (
      <div className="profile-wrapper">
        {profiles && profiles.map((profile, index) => {
          return (  
           <Card image={profile.image} name={profile.name} location={profile.location} tags={profile.tags} active = {index == 1 ? ' active' : ''} />
          );
        })}
      </div>
    );
  }