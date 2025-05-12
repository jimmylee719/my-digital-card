import React from 'react';
import { services } from '../data';

const ServiceList = () => (
  <section>
    <h3>產品與服務 Products & Services</h3>
    <ul className="icon-list">
      {services.map((service, idx) => (
        <li key={idx} className="icon-list-item">
          <span className="item-icon">{service.icon}</span>
          <span>{service.zh} / {service.en}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ServiceList; 