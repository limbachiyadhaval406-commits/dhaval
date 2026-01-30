import React from "react";
import { useTeam } from "./TeamContext";
import { Link } from "react-router-dom";

function Team() {
  const { team, removeFromTeam } = useTeam();

  return (
    <div className="team-container">
      <h2 className="team-title">My Marvel Team</h2>

      {team.length === 0 ? (
        <div className="empty-team">
          <h3>Your team is empty!</h3>
          <p>Go back and recruit some heroes.</p>
          <Link to="/" className="back-to-home">Back to Heroes</Link>
        </div>
      ) : (
        <div className="team-list">
          {team.map((hero) => (
            <div key={hero.id} className="team-item">
              <img src={hero.characterImage} alt={hero.heroName} className="team-item-img" />
              <div className="team-item-info">
                <h3 className="team-item-name">{hero.heroName}</h3>
                <p><strong>Real Name:</strong> {hero.realName}</p>
                <p><strong>Power:</strong> {hero.power}</p>
                <p>{hero.powerDescription}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromTeam(hero.id)}
              >
                Remove from Team
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;