
export default function TopSection() {
  return (
    <div className='flex justify-between gap-16 pt-12'>
        <div className='border rounded-lg bg-purple-600 text-white w-[50%]  h-56 flex items-center justify-center'>
            <div>
                <h6 className='text-center text-2xl font-medium'>Resolved</h6>
                <h1 className='text-center text-3xl font-semibold'>0</h1>
            </div>
        </div>
        <div className='border rounded-lg bg-emerald-500 text-white w-[50%]  h-56 flex items-center justify-center'>
            <div>
                <h6 className='text-center text-2xl font-medium'>Resolved</h6>
                <h1 className='text-center text-3xl font-semibold'>0</h1>
            </div>
        </div>
    </div>
  )
}
