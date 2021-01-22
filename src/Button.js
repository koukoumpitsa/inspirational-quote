import React from "react";

export default function Button(props) {
  return (
    <div className="btn">
      <button onClick={props.onClickChange} className="btn-small">
        Press me!
      </button>
    </div>
  );
}
