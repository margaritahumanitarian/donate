import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React, { useRef } from 'react';
import { SVGCardBackground } from './SVGBackgrounds';
import { usePosition } from 'hooks/usePosition';

export default function CardsLayout({ children, description }) {
  const ref = useRef();
  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);
  return (
    <div className="w-full relative overflow-hidden card-layout">
      <h2 className="pb-20 lg:mt-10 text-3xl md:text-4xl z-10 text-center">
        {description}
      </h2>
      <SVGCardBackground />
      <button
        aria-label="move right"
        className={`btn btn-accent rounded-sm btn-size absolute right-4 top-1/2 z-20 ${
          !hasItemsOnRight && 'hidden'
        }`}
        // todo: -translate-y-1/2 this also we need to add to make it vertically center
        // disabled={isPending ? true : false}
        onClick={scrollRight}
        type="button"
      >
        <AiOutlineRight />
      </button>
      <button
        aria-label="move left"
        className={`btn btn-accent rounded-sm btn-size absolute left-4 top-1/2 z-20 ${
          !hasItemsOnLeft && 'hidden'
        }`}
        // todo: -translate-y-1/2 this also we need to add to make it vertically center
        // disabled={isPending ? true : false}
        onClick={scrollLeft}
        type="button"
      >
        <AiOutlineLeft />
      </button>
      <div
        className="flex overflow-x-scroll no-scrollbar px-2 py-12 lg:px-12 relative"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
}
