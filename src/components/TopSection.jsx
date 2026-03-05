import React from 'react';

export default function TopSection({ resolvedCount, inProgressCount }) {
  return (
    <div className='flex justify-between gap-16 pt-12 pb-8'>
      {/* Resolved Box */}
      <div className='border rounded-lg bg-purple-600 text-white w-[50%] h-56 flex items-center justify-center shadow-lg transition-transform'>
        <div>
          <h6 className='text-center text-2xl font-medium'>Resolved</h6>
          {/* This {resolvedCount} is what makes it lively */}
          <h1 className='text-center text-6xl font-bold mt-2'>{resolvedCount}</h1>
        </div>
      </div>

      {/* In Progress Box */}
      <div className='border rounded-lg bg-emerald-500 text-white w-[50%] h-56 flex items-center justify-center shadow-lg transition-transform'>
        <div>
          <h6 className='text-center text-2xl font-medium'>In Progress</h6>
          {/* This {inProgressCount} is what makes it lively */}
          <h1 className='text-center text-6xl font-bold mt-2'>{inProgressCount}</h1>
        </div>
      </div>
    </div>
  );
}