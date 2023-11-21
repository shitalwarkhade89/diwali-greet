import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import './Home.css';
import lampimg from "./../../image/lamp.png";
import diva from "./../../image/diya.png";
const GREETING = [
    "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत,आई जगदंब देवीच्या क्रुपेने, तुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा!",
    "उटण्याचा सुगंध, रांगोळीचा थाट, दिव्यांची आरास, फराळाचे ताट, फटाक्यांची आतिषबाजी, आनंदाची लाट, नूतन वर्षाची चाहूल दिवाळी पहाट.शुभ दीपावली!",
    "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख,लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक,सारे रोजचे तरीही भासे नवा सहवास, सोन्यासारख्या लोकांसाठी खास,दिवाळीच्या हार्दिक शुभेच्छा!",
    "आनंद घेऊन येतेच ती नेहमीसारखी आताहीआली तिच्या येण्याने मने आनंदाने आनंदमय झालीसर्व मित्र-मैत्रीणीना मनापासून आनंदाची शुभ दिपावली.",
    "दिवाळीचा पहिला दिवा लागता दारी,सुखाचे किरण येती घरी,पुर्ण होवोत तुमच्या सर्व ईच्छा,आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा!"
]
function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo] = useState(searchParams.get("to"));
    const [from, setFrom] = useState(searchParams.get("from"));
    const [greetingNumber, setGreetingNumber] = useState(searchParams.get("g") >= GREETING.length ? 0 : searchParams.get("g") || 0);
    const [theamNumber, setTheamNumber] = useState(searchParams.get("t"));






    return (
        <>
        
            <div className={`greet-container ${`theam-${theamNumber}`}`}>
           <div className=" d-flex">
           <img src={ lampimg}  className="lamp-1"/>
            <img src={ diva}  className="lamp-3"/>
            <img src={ lampimg}  className="lamp-2"/>
           </div>
            
                <h4 className="to-text">प्रिय {to}💐 </h4>
                <p>
                    {GREETING[greetingNumber]}
                </p>
                <h4 className="from-text">तुमची {from}🙏</h4>
            </div>

            <p className="own-customize-url">
                Do you want to create your own Diwali Greeting ? customize it here 👇
            </p>
            <p className="url">{process.env.REACT_APP_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={theamNumber}</p>
            <div className="input-container">

                <input type="text"
                    className="input-box"
                    placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />

                <input type="text"
                    className="input-box"
                    placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />

                <select value={greetingNumber}
                    className="input-box"
                    onChange={(e) => {
                        setGreetingNumber(e.target.value)
                    }}>
                    <option value="0">Greeting 1</option>
                    <option value="1">Greeting 2</option>
                    <option value="2">Greeting 3</option>
                    <option value="3">Greeting 4</option>
                    <option value="4">Greeting 5</option>

                </select>

                <select value={theamNumber}
                    className="input-box"
                    onChange={(e) => {
                        setTheamNumber(e.target.value)
                    }}>
                    <option value="0">None</option>
                    <option value="1">Theam 1</option>
                    <option value="2">Theam 2</option>
                    <option value="3">Theam 3</option>
                    <option value="4">Theam 4</option>
                    <option value="5">Theam 5</option>

                </select>
            </div>


        </>
    )
}
export default Home

