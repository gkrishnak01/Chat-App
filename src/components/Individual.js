import React from "react"
import "./style.css"

function Individual(props)
{
    const firstPerson = {
        backgroundColor:"rgb(255,105,180)",
        textAlign : "right",
        borderRadius : "10px",
        padding:"10px",
    }

    const secondPerson = {
        backgroundColor:"rgb(70,70,70)",
        color :"white",
        borderRadius : "10px",
        padding:"10px",
        
    }

    const element = (
        <div>
            {props.item.name}
            <br />
        </div>
    )
    return(
        <div className={props.uname === props.item.name ? "container3" : "container2"}>
            <div style={props.uname === props.item.name ? firstPerson : secondPerson}>
                {props.uname !== props.item.name ? element : null}
                {props.item.message}
            </div>
        </div>
    );
    
}

export default Individual;