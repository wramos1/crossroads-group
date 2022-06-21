import React from "react";

const CommitList = ({ commits }) => {

    const renderedList = commits.map(c => {
        return (
            <li>
                {c.commit.message}
            </li>
        )
    })
    return (
        <div>
            {renderedList}
        </div>
    )
}

export default CommitList;