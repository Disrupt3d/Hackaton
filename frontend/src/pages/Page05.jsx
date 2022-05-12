import React from "react";
import Header from "@components/Header";
import UserRanking from "@components/UserRanking";

import "../styles/Page05.css";
import "../styles/UserRanking.css";


function Page05() {
    // const [userRanking, setUserRaking] = useState([]);

    return (
        <div>
        <Header />
        <h1>Classement</h1>
        <UserRanking />
        </div>
    );
}

export default Page05;