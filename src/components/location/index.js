import React from "react";

const Location = () => {
  return (
    <div className="locatino_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49684.92671191135!2d-77.05704299367588!3d38.894073328968666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b771e0906287%3A0x1049d1c9c95c2eb6!2sLincoln%20Memorial!5e0!3m2!1sen!2skr!4v1625969685114!5m2!1sen!2skr"
        width="100%"
        height="600"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
