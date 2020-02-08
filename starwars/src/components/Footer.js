import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const FooterNav = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="http://localhost:3005/">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://github.com/DevinDCooper">GitHub</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="https://www.starwars.com/">Starwars.com</BreadcrumbItem>
        <BreadcrumbItem active tag="span">I am your Father!
</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default FooterNav;