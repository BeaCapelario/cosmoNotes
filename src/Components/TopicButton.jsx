import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaServer } from 'react-icons/fa6';
import "./topicbutton.css";

function TopicButton({titulo, linkTo}) {
 return (
    <Link to={linkTo} className="topic-btn" arial-label={`Acessar ${titulo}`}>
    <span className="topic-icon">
        <FaServer size={18} />
        </span>
        <span className="topic-title">{titulo}</span>
    </Link>
 );
}

export default TopicButton;