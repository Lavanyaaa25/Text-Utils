import React from 'react'

function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  
}
  return(
// props.alert is checked first if it is false next div is not returned
props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{capitalize(props.alert.type)}</strong>{capitalize(props.alert.msg)}
</div>

  )
}

export default Alert