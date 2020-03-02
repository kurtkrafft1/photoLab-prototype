import React, {useState, useEffect} from "react";
import ScottManager from "../../modules/ScottManager";

const ScottCard= () => {
    // const [randomQoute, setRandomQoute] = useState([])
    let randomQoute = "";
    const getRandomQoute= () => {
        ScottManager.get().then(qoute=> {
            randomQoute = qoute.qoute
        })
    }
    
    // useEffect(()=> {
    //     getRandomQoute
    // }, [])
    getRandomQoute()
    return(

        <div className="qouteBox">
            <h1>{randomQoute}</h1>
            <h3>-Michael Scott</h3>
        </div>
    )

}

export default ScottCard;