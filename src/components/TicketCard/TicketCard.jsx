import React from 'react';
import "./TicketCard.css";


const statusClasses = {
  Open: {
    badge: "status-open",
    dot: "dot-open"
  },
  "In-Progress": {
    badge: "status-progress",
    dot: "dot-progress"
  },
};

const priorityClasses = {
  High: "text-[#F83044]",
  Medium: "text-[#FEBB0C]",
  Low: "text-[#02A53B]"
};




const TicketCard = ({ticket,onSelect}) => {

  const { id, title, description, customer, priority, status, createdAt } = ticket;

    return (
        <div onClick={() => onSelect(ticket)} className='card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className="card-body p-4">

        {/* Title + Status */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug">
            {title}
          </h3>

          <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
            ${status === "Open" ? "status-open" : ""}
            ${status === "In-Progress" ? "status-progress" : ""}
            `}>
  <span className={`w-2 h-2 rounded-full
              ${status === "Open" ? "dot-open" : ""}
              ${status === "In-Progress" ? "dot-progress" : ""}`}></span>
  {status}
</span>
        </div>

        {/* Description */}
        <p className="mt-1 text-xs text-base-content/70 leading-relaxed">
          {description}
        </p>

        {/* Bottom Meta Row */}
        <div className="mt-3 flex items-center justify-between gap-3 text-[11px]">

          <div className={`font-semibold
            ${priority === "High" ? "text-red-600" : ""}
            ${priority === "Medium" ? "text-orange-500" : ""}
            ${priority === "Low" ? "text-green-600" : ""}
            `}>
            #{id} &nbsp; {priority.toUpperCase()} PRIORITY
          </div>

          <div className="flex items-center gap-2 text-base-content/60">
            <span className="font-medium text-base-content/70">
              {customer}
            </span>

            <span className="opacity-50">|</span>

            <span className="inline-flex items-center gap-1">
              
              {createdAt}
            </span>
          </div>

        </div>

      </div>

        </div>
    );
};

export default TicketCard;