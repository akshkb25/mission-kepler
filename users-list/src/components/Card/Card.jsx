import { profiles } from "../../assets/Data.js";
import "./Card.css";

export default function Card() {
  return (
    <div className="profile-wrapper">
      {profiles.map((profile, index) => {
        return (
          <div className={"profile-card" + (index == 1 ? ' active' : '')}>
            <div className="profile-image">
              <img src={profile.image} />
            </div>
            <div className="profile-details">
              <p className="profile-name">{profile.name}</p>
              <p className="profile-location">{profile.location}</p>
              <div className="tag-wrapper">
                {profile.tags.map((tag) => {
                  return <p className="tag">{tag}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
