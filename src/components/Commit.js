import React from "react";

const Commit = ({ commit, user, date }) => {
    const modifiedDate = date.slice(0, 10);

    return (
        <div
            className="list-group bg-dark text-white"
            id="commit"
        >
            <div className="d-flex w-100 justify-content-between">

                <h5 className="mb-1">
                    Commit:
                </h5>
                <small>
                    {modifiedDate}
                </small>

            </div>

            <p className="mb-1">
                "{commit}"
            </p>

            <small>
                User: {user}
            </small>

        </div>
    )
}

export default Commit;