import React from 'react';

const TaskStatus = ({tasks,onComplete}) => {
    return (
        <div>
            
             <div className="card-body p-5">

        <h2 className="text-sm font-semibold text-base-content/80">Task Status</h2>

        <p className="mt-1 text-xs">
          Select a ticket to add to Task Status
        </p>

        <div className="mt-4 space-y-4">

          {tasks.length === 0 ? (
            <div className="rounded-xl border border-base-400 p-4 text-xs">
              No tasks added yet.
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-base-300 p-4"
              >
                <p className="text-xs font-medium leading-snug">
                  {task.title}
                </p>

                <button
                  className="btn btn-success btn-l"
                  onClick={() => onComplete(task.id)}
                >
                  Complete
                </button>

              </div>
            ))
          )}

        </div>

      </div>

        </div>
    );
};

export default TaskStatus;