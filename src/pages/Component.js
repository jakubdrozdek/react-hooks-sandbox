import React from "react";

// Functional PureComponent = React.memo
const Component = React.memo(({ name, onChange }) => {
  return (
    <div>
      Component{" "}
      <button onClick={() => onChange(prev => prev + "1")}>{name}</button>
    </div>
  );
});

export default Component;
