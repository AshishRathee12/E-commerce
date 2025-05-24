import React from 'react'
import './Productlist.css'
export default function NextButton({ data, page }) {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className="next-btn">
                {arr.map((elem, index) => {
                    return (
                        <button onClick={() => data(elem)} key={index} style={{ border: page == elem ? "1px solid blue" : "none", marginRight: "5px" }}>{elem}</button>
                    )
                })}
            </div>
        </div>
    )
}
