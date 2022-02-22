import "survey-react/modern.min.css";
import * as Survey from "survey-react";



function Surveys(){
    var json = {
        pages: [
          {
            name: "customerContact", elements: [
              { type: "text", name: "name", title: "Please enter your name:" },
              { type: "text", name: "email", title: "Please enter your e-mail:" }
            ]
          }
        ]
        };

    return <Survey.Survey model={json} />;    
}

export default Surveys;