// import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LaunchCard = ({ LaunchData }) => {
    const LaunchDate = {
        year: LaunchData.date_local.split('-')[0],
        month: LaunchData.date_local.split('-')[1],
        day: LaunchData.date_local.split('-')[2].split('T')[0],
        time: LaunchData.date_local.split('-')[2].split('T')[1],
    }
    
  return (



<LaunchCardContainer>
<LaunchCardHeader>
    <p>
        {LaunchDate.day}/{LaunchDate.month}/{LaunchDate.year}
    </p>
    <p>
        {LaunchData.flight_number}
    </p>
</LaunchCardHeader>
<LaunchCardBody>
    <h2>{LaunchData.name}</h2>

    <p>{LaunchDate.time} Local Time</p>
</LaunchCardBody>

</LaunchCardContainer>
)
}

export default LaunchCard;

const LaunchCardContainer = styled.div`
color: #fff;
text-align: left;
margin:0 10px;
margin-bottom: 20px;
background-color: #fff;
background: #262626;
box-shadow:  20px 20px 40px #202020,
             -20px -20px 40px #2c2c2c;
border-radius: 10px;
`;

const LaunchCardHeader = styled.div`
    // background-color: #000;
    padding: 1px 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
`;

const LaunchCardBody = styled.div`
    padding: 10px;
`;
