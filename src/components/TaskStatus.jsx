export default function TaskStatus({ selectedTicket, onResolve, stats, resolvedTickets }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 sticky top-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800">Status Overview</h2>
      
      <div className="flex gap-4">
        <div className="bg-white p-3 rounded shadow-sm flex-1 text-center border-b-2 border-amber-400">
          <p className="text-xs text-gray-500 uppercase">In Progress</p>
          <p className="text-xl font-bold text-amber-600">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm flex-1 text-center border-b-2 border-green-400">
          <p className="text-xs text-gray-500 uppercase">Resolved</p>
          <p className="text-xl font-bold text-green-600">{stats.resolved}</p>
        </div>
      </div>

     
      <div className="min-h-[200px]">
        {selectedTicket ? (
          <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-md font-bold text-gray-900 mb-1 line-clamp-1">
                {selectedTicket.title}
              </h3>
              <p className="text-gray-500 text-xs line-clamp-3 mb-4">
                {selectedTicket.description}
              </p>
            </div>
            
            <button
              onClick={() => onResolve(selectedTicket.id)}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors mt-auto"
            >
              Mark as Resolved
            </button>
          </div>
        ) : (
          <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-400 text-sm">
            Select a ticket to act
          </div>
        )}
      </div>

      <hr className="border-gray-200" />

      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Resolved History</h4>
        <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
          {resolvedTickets.length > 0 ? (
            resolvedTickets.map((t) => (
              <div key={t.id} className="bg-gray-100 p-2 rounded border border-gray-200 flex items-center gap-2">
                <span className="text-green-500 text-xs">✔</span>
                <p className="text-xs text-gray-600 truncate font-medium">
                  {t.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-400 italic">No tickets resolved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}