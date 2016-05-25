import React from "react";
import {SharedResourceList} from "./presentation/SharedResourceList.jsx";

const SharedResourceContainer = ({
  state,
  listeners
}) => (
<div className="react-container">
<h5>SharedResourceContainer</h5>
<SharedResourceList />
</div>
)

export {SharedResourceContainer};