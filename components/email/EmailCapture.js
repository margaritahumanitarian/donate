import React, { useState } from 'react';
import Image from 'next/image';
import { SVGPlane } from '../SVGBackgrounds';
import { useContextTheme } from '@components/ThemeContext';
import { useFormspark } from '@formspark/use-formspark';

export default function EmailCapture({ nextComponent, updateData, formID }) {
  const [email, setEmail] = useState('');
  const { backgroundColor, textColor } = useContextTheme();
  const [submit, submitting] = useFormspark({
    formId: formID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submit({ email });
      updateData({ Email: result.email });
      setEmail('');
      setTimeout(() => nextComponent(), 10);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <SVGPlane className="absolute plane right-0 lg:right-28 bottom-1/3 lg:bottom-1/2 z-0" />

        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 h relative"
          style={{
            'margin-left': '2rem',
            'margin-right': '2rem',
            'margin-top': '2rem',
            'margin-bottom': '2rem',
          }}
        >
          <Image
            alt={'Hot Meal Day'}
            height="260"
            layout="responsive"
            objectFit="cover"
            src={'/images/keepInTouch.jpeg'}
            width="400"
          />
          <div className="relative sm:pl-5 md:pl-10 lg:pl-10 overflow-hidden">
            <div>
              <h2 className="text-3xl md:text-5xl md:text-left pb-3 font-bold">
                {'Keep In Touch'}
              </h2>
              <div className="">
                <p className=" text-l md:w-10/12">
                  {
                    'Get on our email list and we’ll keep you up to date with all that is going on with your community that we’re involved in.'
                  }
                </p>
                <p className={`pt-5 text-l ${textColor}`}>
                  {'Enter Your Email'}
                </p>
                <form className="lg:flex md:items-end" onSubmit={handleSubmit}>
                  <input
                    className={`appearance-none border border-gray-300 rounded h-full py-3 mb-2 lg:mb-0 mr-0 lg:mr-4 w-full px-3 ${textColor} ${backgroundColor} leading-tight focus:outline-none focus:shadow-outline`}
                    onChange={(value) => {
                      setEmail(value.target.value);
                    }}
                    // placeholder="Enter Your Email"
                    required
                    type="email"
                    value={email}
                  />
                  <button
                    aria-label="donate-btn"
                    className="btn btn-accent rounded-sm mt-5  btn-size"
                    disabled={submitting}
                    type="submit"
                  >
                    {'Submit'}
                  </button>
                  <div className="p-0 md:pb-20" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-size {
          display: flex;
          margin: 0 5px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          white-space: nowrap;
        }
        .plane {
          z-index: -10;
        }

        @media (min-width: 768px) {
          .section-box {
            max-width: 1280px;
            box-shadow: rgba(14, 30, 37, 0.082) 4px 4px 4px 0px,
              rgba(14, 30, 37, 0.096) 4px 4px 12px 0px;
            /* border-radius: var(--rounded-box, 1rem); */
          }
          .h {
            height: 400px;
          }
        }
      `}</style>
    </>
  );
}
