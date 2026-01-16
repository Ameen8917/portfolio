import React from 'react';

const Avatar = ({ initials = 'AS' }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">

        {/* Glow background */}
        <div
          className="
            absolute
            w-56 h-56
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            lg:w-80 lg:h-80
            rounded-full
            bg-gradient-to-br
            from-[#ff6b6b]
            to-orange-600
            opacity-20
          "
        />

        {/* Initials circle */}
        <div
          className="
            relative
            w-56 h-56
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            lg:w-80 lg:h-80
            rounded-full
            border-4
            border-[#ff6b6b]
            flex items-center justify-center
            bg-[#1d293d]
            hover:scale-105
            transition-transform
            duration-300
          "
        >
          <span
            className="
              font-extrabold
              tracking-wider
              select-none
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-[#ff6b6b]
            "
          >
            {initials}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Avatar;
