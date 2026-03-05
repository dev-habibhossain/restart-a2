export default function TaskStatus({ selectedTicket, onResolve, stats }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 sticky top-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Status Overview</h2>
      
      {/* Stats Section */}
      <div className="flex gap-4 mb-6">
        <div className="bg-white p-3 rounded shadow-sm flex-1 text-center">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-amber-600">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm flex-1 text-center">
          <p className="text-sm text-gray-500">Resolved</p>
          <p className="text-2xl font-bold text-green-600">{stats.resolved}</p>
        </div>
      </div>

      {/* Detail Card */}
      {selectedTicket ? (
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {selectedTicket.title}
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            {selectedTicket.description}
          </p>
          
          <button
            onClick={() => onResolve(selectedTicket.id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Mark as Resolved
          </button>
        </div>
      ) : (
        <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
          Click a ticket card to see details and update status.
        </div>
      )}
    </div>
  );
}