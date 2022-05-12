import React from 'react'

const UserRanking = () => {
  return (
    <div>
        <div className='UserRankingRow'>
            <div className="UserRankingName">
            </div>
            <div className="UserRankingRating2">
                <p>Niveaux</p>
                <p>Badges</p>
                <p>Questions</p>
                <p>Missions</p>
            </div>
        </div>

        <div className='UserRankingRow'>
            <div className="UserRankingName">
                <h2>Martin</h2>
            </div>
            <div className="UserRankingRating">
                <p className='niveau'>13</p>
                <p className="badges">24</p>
                <p className="questions">26</p>
                <p className="missions">5</p>
            </div>
        </div>
    </div>
  )
}

export default UserRanking