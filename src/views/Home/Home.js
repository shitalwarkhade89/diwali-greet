import { useSearchParams } from "react-router-dom";
import React from "react";
import './Home.css';

 const GREETING =[
    "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत,आई जगदंब देवीच्या क्रुपेने, तुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा!",
    "उटण्याचा सुगंध, रांगोळीचा थाट, दिव्यांची आरास, फराळाचे ताट, फटाक्यांची आतिषबाजी, आनंदाची लाट, नूतन वर्षाची चाहूल दिवाळी पहाट.शुभ दीपावली!",
    "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख,लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक,सारे रोजचे तरीही भासे नवा सहवास, सोन्यासारख्या लोकांसाठी खास,दिवाळीच्या हार्दिक शुभेच्छा!",
    "आनंद घेऊन येतेच ती नेहमीसारखी आताहीआली तिच्या येण्याने मने आनंदाने आनंदमय झालीसर्व मित्र-मैत्रीणीना मनापासून आनंदाची शुभ दिपावली.",
    "दिवाळीचा पहिला दिवा लागता दारी,सुखाचे किरण येती घरी,पुर्ण होवोत तुमच्या सर्व ईच्छा,आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा!"
 ]
 function Home() {
    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber= searchParams.get("g") >= GREETING.length ? 0 : searchParams.get("g") || 0;
    
     return(
        <>
    <div className="greet-container">
    <h4 className="to-text">To {to} </h4>
  <p> 
   {GREETING[greetingNumber]}
</p>
<h4 className="from-text">from {from}</h4>
    </div>

     
    
        </>
    )
}
export default Home

