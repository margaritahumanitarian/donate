import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

function Card({ backgroundImageSource, backgroundImageAltText, children }) {
  return (
    <div className="card shadow-xl image-full">
      {backgroundImageSource && (
        <figure>
          <Image alt={backgroundImageAltText} layout="fill" src={backgroundImageSource} />
        </figure>
      )}
      <div className="card-body justify-end space-y-3">{children}</div>
    </div>
  );
}

Card.propTypes = {
  backgroundImageSource: PropTypes.string,
  backgroundImageAltText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
  return <span className="card-title m-0">{children}</span>;
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardParagraph({ children }) {
  return <span>{children}</span>;
}

CardParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardAction({ children, linkTo, isPending, onClick }) {
  return (
    <div className="pt-5">
      {linkTo ? (
        <a className="btn btn-primary" href={linkTo}>
          {children}
        </a>
      ) : (
        <button
          className={`btn btn-primary h-16 md:h-13 ${
            isPending ? 'loading' : ''
          }`}
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      )}
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  isPending: PropTypes.bool,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
};

export function CardAddress({ children, label }) {
  return (
    <div className="shaded-text">
      <div>{label}</div>
      <span>{children}</span>
    </div>
  );
}

CardAddress.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Card;
