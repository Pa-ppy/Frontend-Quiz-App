import React from "react";

export const ScoreListPage: React.FC<{ title: string ,length:number, score:number | 0 }> = (props) => {

  return (
    <div>
        
        <h1>ScoreListPage</h1>
        
       <h2>Title : {props.title}</h2> 
        
       <h1>Score : {props.score} out of {props.length}</h1> 
        </div>
  )
}
