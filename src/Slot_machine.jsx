import React from "react";


const SlotM =(props) =>{

    
    // let x=props.x;
    // let y =props.y;
    // let z=props.z;

    let {x,y,z}=props;

    
    if(props.x===props.y && props.y===props.z){
        return(
            <>
                <div>
                    <h1>{x} {y} {z}</h1>
                    <h1>This is matching</h1>
                    <hr/>
                </div>
            </>
            
        )
    }else{
        return(
        <>
        <div>
            <h1>{x} {y} {z}</h1>
            <h1>This is not matching</h1>
            <hr/>
        </div>
        </>
        )
    }

}

export default SlotM;