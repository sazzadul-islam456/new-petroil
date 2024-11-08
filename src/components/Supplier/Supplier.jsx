import React from "react";
import Container from "./../Container/Container";

const Supplier = () => {
  return (
    <Container>
      <div className="py-[100px] font-primary ">
        <div className=" items-center md:flex  justify-between">
          <h3 className="w-[200px] md:w-[300px]  text-[30px] md:text-[48px] font-bold">
            The biggest supplier on the country
          </h3>
          <p className="w-[300px] md:w-[551px] text-base font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Supplier;
