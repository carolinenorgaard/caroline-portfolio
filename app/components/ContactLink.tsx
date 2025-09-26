import React from "react";

type Props = {
  icon?: any;
  title: string;
  description: string;
  href: string;
};

const ContactLink = ({ icon, title, description, href }: Props) => {
  return (
    <a href={href}>
      {icon && icon}
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ContactLink;
