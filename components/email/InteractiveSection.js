import React, { useState } from 'react';
import { useContextTheme } from '../ThemeContext';

export default function InteractiveSection({ children }) {
  const [componentPointer, setComponentPointer] = useState(0);
  const [data, setData] = useState({});
  const { cardsBackgroundColor } = useContextTheme();

  const updateData = (childData) => {
    setData((prevState) => {
      return { ...prevState, ...childData };
    });
  };

  const nextComponent = (i = 1) => {
    setComponentPointer((componentPointer) => componentPointer + i);
  };

  const previousComponent = () => {
    setComponentPointer((componentPointer) => componentPointer - 1);
  };

  /**
   * childrenWithProps is the clone of all elements wrapped inside the Interactive Section
   * with all the nescessary props added to it through iterating over them.
   */
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(
      child,
      {
        data: data,

        updateData: (childData) => {
          updateData(childData);
        },
        nextComponent: (i) => {
          nextComponent(i);
        },
        previousComponent: () => {
          previousComponent();
        },
      },
      null
    );
  });

  return (
    <div className="flex justify-center items-center main-container mt-20 mx:0 md:mx-16 pb-10  lg:my-20 ">
      <div className={`w-full ${cardsBackgroundColor}`}>
        {childrenWithProps[componentPointer]}
      </div>
      <style jsx>
        {`
          .main-container {
            max-height: 500px;
          }
          .card-shadow {
            box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
              rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
          }
        `}
      </style>
    </div>
  );
}
