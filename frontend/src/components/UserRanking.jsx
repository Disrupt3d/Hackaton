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
                <p className='niveau'>58</p>
                <p className="badges">12</p>
                <p className="questions">50</p>
                <p className="missions">25</p>
            </div>
        </div>
        <div className='UserRankingRow'>
            <div className="UserRankingName">
                <h2>Papa</h2>
            </div>
            <div className="UserRankingRating">
                <p className='niveau'>50</p>
                <p className="badges">11</p>
                <p className="questions">46</p>
                <p className="missions">20</p>
            </div>
        </div>

        <div className='UserRankingRow'>
            <div className="UserRankingName">
                <h2>Dorian</h2>
            </div>
            <div className="UserRankingRating">
                <p className='niveau'>48</p>
                <p className="badges">10</p>
                <p className="questions">42</p>
                <p className="missions">15</p>
            </div>
        </div>

        <div className='UserRankingRow'>
            <div className="UserRankingName">
                <h2>Tonton</h2>
            </div>
            <div className="UserRankingRating">
                <p className='niveau'>36</p>
                <p className="badges">6</p>
                <p className="questions">35</p>
                <p className="missions">10</p>
            </div>
        </div>

        <div className='UserRankingRow'>
            <div className="UserRankingName">
                <h2>Papy</h2>
            </div>
            <div className="UserRankingRating">
                <p className='niveau'>23</p>
                <p className="badges">3</p>
                <p className="questions">21</p>
                <p className="missions">5</p>
            </div>
        </div>





    </div>
  )
}

export default UserRanking