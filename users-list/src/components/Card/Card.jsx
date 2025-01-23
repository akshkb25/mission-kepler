import "./Card.css";

export default function Card({image, name, location, tags, active}) {
  return (
      <div className={"profile-card" + (active)}>
        <div className="profile-image">
          <img src={image} />
        </div>
        <div className="profile-details">
          <p className="profile-name">{name}</p>
          <p className="profile-location">{location}</p>
          <div className="tag-wrapper">
            {tags && tags.map((tag) => {
              return <p className="tag">{tag}</p>;
            })}
          </div>
        </div>
      </div>
  );
}
