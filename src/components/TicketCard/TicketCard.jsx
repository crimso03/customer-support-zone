import React from 'react';

const TicketCard = () => {
    return (
        <div className='card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className="card-body p-4">

        {/* Title + Status */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug">
            Login Issues - Can't Access Account
          </h3>

          <span className="badge badge-accent badge-sm gap-1">
  <span className="w-2 h-2 rounded-full bg-[#02A53B]"></span>
  Open
</span>
        </div>

        {/* Description */}
        <p className="mt-1 text-xs text-base-content/70 leading-relaxed">
          Customer is unable to log in to their account. They have tried
          resetting their password multiple times but still cannot access it.
        </p>

        {/* Bottom Meta Row */}
        <div className="mt-3 flex items-center justify-between gap-3 text-[11px]">

          <div className="font-semibold text-rose-600">
            #1001 &nbsp; HIGH PRIORITY
          </div>

          <div className="flex items-center gap-2 text-base-content/60">
            <span className="font-medium text-base-content/70">
              John Smith
            </span>

            <span className="opacity-50">|</span>

            <span className="inline-flex items-center gap-1">
              
              01/15/2025
            </span>
          </div>

        </div>

      </div>

        </div>
    );
};

export default TicketCard;