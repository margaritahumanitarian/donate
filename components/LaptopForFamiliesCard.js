import React from 'react';

function LaptopForFamiliesCard() {
  return (
    <div className="card shadow-xl image-full hover:ring-4">
      <figure>
        <img src="/images/Laptop.jpeg" />
      </figure>
      <div className="justify-end card-body">
        <h2 className="card-title">{'Laptop for Families'}</h2>
        <p className="mb-3">
          {
            "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use."
          }
        </p>
        <p>
          <br />
          <h3>{'Ship the laptops to:'}</h3>
          <p>{'1543 E Palmdale Blvd, Ste E, Palmdale, CA 93550'}</p>
        </p>
      </div>
    </div>
  );
}

export default LaptopForFamiliesCard;
