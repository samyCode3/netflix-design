import React from "react";

function Propularity(props)
{
     return (
        <div className="flex-img">
            {porp.map((item)=><img src={item.img}  key="item.img"/>)}
        </div>

     )
}

export const porp=[
    {
        key : 1,
        img : "./Images/Rectangle 6.png"
    },
    {
        key : 2,
        img : "./Images/Rectangle 10.png"
    },
    {
        key : 3,
        img : "./Images/Rectangle 7.png"
    },
    {
        key : 4,
        img : "./Images/Rectangle 8.png"
    },
    {
        key : 5,
        img : "./Images/Rectangle 9.png"
    },
    {
        key : 6,
        img : "./Images/Rectangle 11.png"
    },
]
export default Propularity