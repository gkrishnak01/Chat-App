import React, { useState, useEffect } from "react"
import Individual from "./Individual"
import { Button} from '@material-ui/core';
import db from "../firebase"
import "./style.css"
import firebase from "firebase"


function Message()
{
    const [texts, setTexts] = useState([]);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    var temp;
    
    useEffect( () => {
        temp = prompt("Enter Your Username")
        if(!(temp.trim()))
        {
            setName(`Guest_${Math.floor(Math.random() * 1000)}`)
        }
        else
        {
            setName(`${temp.trim()}_${Math.floor(Math.random() * 1000)}`)
        }

        }
        ,[])
    
    useEffect( () => {
        db.collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot => 
            {
                setTexts(snapshot.docs.map(doc => ({id : doc.id, message:doc.data()})))
            })
            window.scrollBy(0, window.Innerheight+"px");
    },[])

    
    const addText = (event) => {
        event.preventDefault();
        db.collection("messages").add(
            {
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                name : name,
                message : message,
            }
        )
        setMessage("");
    }


const whole = texts.map((item) => <Individual key={item.id}  item={item.message}  uname={name}/>);
    return(
        <div>
            <form style={{textAlign:"center"}} className="form">
                    <input value={message} 
                    placeholder="Type a message"
                    onChange={event => event.target.value === " " ? null : setMessage(event.target.value)}
                    className="input"/> 
                    &ensp;&ensp;
                <Button type="submit" variant="contained" color="secondary" onClick={addText} disabled={!message}>Send</Button>
            </form>
            <br />
            <div className="container4">
                <span className="container">{whole}</span>
            </div> 
        </div>
    );
}

export default Message;