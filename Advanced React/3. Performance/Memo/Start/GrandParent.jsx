import React from "react"
import Parent from "./Parent"

export default function GrandParent() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component. Count: {count}</p>
            <Parent />
            <Parent />
        </div>
    )
}

React.memo()

/*

After

import React from "react"
import Parent from "./Parent"

function GrandParent() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div className="grandparent">
            <p>GrandParent Component.</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default React.memo(GrandParent)

*/