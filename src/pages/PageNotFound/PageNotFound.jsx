import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="page_not_found">
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
