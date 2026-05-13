"use client";

import { useState } from "react";

export const HomeClient = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Home page</h1>
            <button
            onClick={() => setCount(count+1)}
            >
                Click Me! count:{count}
            </button>
        </div>
    )
}