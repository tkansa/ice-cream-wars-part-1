import React, { useState } from 'react';
import './Votes.css';


function Votes() {

    const [chocolateVotes, setChocolateVotes] = useState<number>(0);
    const [vanillaVotes, setVanillaVotes] = useState<number>(0);
    const [strawberryVotes, setStrawberryVotes] = useState<number>(0);

    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;

    let chocolatePercentage = (chocolateVotes / totalVotes * 100).toFixed(2);
    let vanillaPercentage = (vanillaVotes / totalVotes * 100).toFixed(2);
    let strawberryPercentage = (strawberryVotes / totalVotes * 100).toFixed(2);

    let chocolateBarStyle = {
        height: 25 + "px",
        width: chocolatePercentage + "%",
        backgroundColor: "#4f2c2c",
        borderRadius: 5 + "px"
    }

    let vanillaBarStyle = {
        height: 25 + "px",
        width: vanillaPercentage + "%",
        backgroundColor: "#cbc0ac",
        borderRadius: 5 + "px"
    }
    let strawberryBarStyle = {
        height: 25 + "px",
        width: strawberryPercentage + "%",
        backgroundColor: "#de8c91",
        borderRadius: 5 + "px"
    }
    return (
        <div className="Votes">
            <h1>Vote here</h1>
            <div>
                <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
                <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
                <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
            </div>
            <div>{totalVotes > 0 ?
                <div>
                    <div>
                        <p>Chocolate: {chocolateVotes} ({chocolatePercentage}%)</p>
                        <div style={chocolateBarStyle}></div>
                    </div>
                    <div>
                        <p>Vanilla: {vanillaVotes} ({vanillaPercentage}%)</p>
                        <div style={vanillaBarStyle}></div>
                    </div>
                    <div>
                        <p>Strawberry: {strawberryVotes} ({strawberryPercentage}%)</p>
                        <div style={strawberryBarStyle}></div>
                    </div>
                </div> :
                <div>No Votes yet!</div>
            }

            </div>
        </div>
    );
}

export default Votes;
