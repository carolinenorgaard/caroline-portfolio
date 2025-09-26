import React from "react";

type Props = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href: string;
  target?: string;
  rel?: string;
};

const ContactLink = ({
  icon,
  title,
  description,
  href,
  target,
  rel,
}: Props) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex items-center p-4 glass-card hover:border-[hsl(265_100%_75%/0.3)] transition-all group"
    >
      {icon && (
        <div className="w-6 h-6 mr-4" style={{ color: 'hsl(265, 100%, 75%)' }}>
          {icon}
        </div>
      )}
      <div>
        <h4 className="font-medium transition-colors group-hover:text-[hsl(265,100%,75%)]">
          {title}
        </h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </a>
  );
};

export default ContactLink;
