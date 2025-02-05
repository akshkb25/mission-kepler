import { profiles } from '../../assets/json/profiles.js';
import Card from "../Card/Card.jsx";
import './CardContainer.css';

export default function CardContainer() {
    return (
      <div className="profile-wrapper">
        {profiles && profiles?.map((profile) => {
            return (
              <Card
                {...profile}
                key = {profile.id}
              />
            );
          })}
      </div>
    );
  }