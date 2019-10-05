import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';
const App=()=>{
    
    return (
        <div className="ui container comments">
        <ApprovalCard><div><h4>Warning!</h4>
        Are you sure you want to do this?</div></ApprovalCard>
        
         <ApprovalCard>
         <CommentDetail 
         name="Omkar" 
         content="I like fucking!" 
         time="3:45 PM"
          avatar={faker.image.avatar()}>   
          </CommentDetail>
          </ApprovalCard>
         <ApprovalCard><CommentDetail name="Rocky" content="I like fighting!" time="6:45 PM" avatar={faker.image.avatar()}></CommentDetail></ApprovalCard>

        </div>
         
            
  
    );
};
ReactDOM.render(<App/>,document.querySelector("#root"));