import React from 'react'

function Alert(props) {

    return (
        <div style={{height: '50px'}}>
         {// if props.alert is null then i dont get these below thing and vice-versa
        props.alert &&<div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong> {props.alert.type}</strong>:  {props.alert.msg}
  
</div>} 
</div>       
    )
}

export default Alert
