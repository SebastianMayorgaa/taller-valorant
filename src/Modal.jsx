function Modal({ team, modalOn, deleteAgent }) {
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-[url(./src/assets/valorant-world-map.jpg)] p-6 rounded-lg shadow-lg  relative min-h-86 r text-center" >
          <h1 className="text-2xl font-bold mb-4 text-white">My Team</h1>
  
          {team.length === 0 ? (
            <p className="text-2xl text-white">No agents selected.</p>
          ) : (
            <div className="flex  w-auto">
              {team.map(agent => (
                <div key={agent.uuid} className="flex-col justify-center items-center p-2">
                    <img className="w-80" src={agent.fullPortrait} alt="" />
                  <h2 className="text-white text-xl">{agent.displayName}</h2>
                  <button 
                    className="text-red-500 hover:text-red-700 transition"
                    onClick={() => deleteAgent(agent.uuid)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <button className="mt-4 bg-gray-500 text-white px-8 py-2 rounded hover:bg-gray-900 transition"onClick={() => modalOn(false)}
          >Close</button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  