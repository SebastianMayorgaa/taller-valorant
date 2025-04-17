import CheckBox from "./CheckBox"


function Body({ agents, search, selectedRoles, handleCheckbox, roles, addAgent }) {

    const filteredAgents = agents.filter((agent) =>
        agent.displayName.toLowerCase().includes(search.toLowerCase())
        && (selectedRoles.length === 0 || selectedRoles.includes(agent.role?.displayName)))

    return (
        <div className="bg-gray-900 min-h-9/10">
            <div className="my-9">
                <img src="./src/assets/valorant-agents.jpg" alt="" />
            </div>
            <h1 className="text-5xl flex justify-center text-white my-8 py-8">Choose your Team!</h1>

            <CheckBox selectedRoles={selectedRoles} handleCheckbox={handleCheckbox} roles={roles} />

            <div className="flex flex-wrap justify-center gap-4">

                {filteredAgents.length === 0 ? (
                    <div className=" w-full h-48 flex justify-center items-center bg-red-400">
                        <div className="h-auto">
                            <h3 className="text-2xl font-bold mb-4 text-white">Agent not found.</h3>
                        </div>
                    </div>
                ) : (

                    filteredAgents.map((a) => (
                        <Card
                            key={a.uuid}
                            agent={a}
                            addAgent={addAgent}
                        />
                    )))}
            </div>
        </div>
    )
}

function Card({ agent, addAgent }) {
    const backColor = agent.backgroundGradientColors
        ? agent.backgroundGradientColors.map(color => `#${color}`).join(", ")
        : "#000";

    return (
        <div className="flex justify-center p-4 card-container">
            <div className="relative w-80 h-96 flex justify-center flip-card">
                <div className="w-80 h-96 flip-card-inner">
                    <div 
                        className="card-front absolute w-full h-full flex flex-col items-center justify-center rounded-lg shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${backColor})` }}
                    >
                        <img className="absolute inset-0 w-full h-full object-cover opacity-50" src={agent.background} alt="Background" />
                        <img className="relative z-10 h-auto" src={agent.fullPortrait} alt="Agent" />
                    </div>

                    <div 
                        className="card-back absolute w-full h-full flex flex-col items-center justify-center rounded-lg shadow-lg text-white text-center p-4"
                        style={{ background: `linear-gradient(135deg, ${backColor})` }}
                    >
                        <div className="flex w-full justify-around mt-3">
                            <div className="flex-col">
                                <h3 className="text-xl font-bold">{agent.displayName}</h3>
                                <img className="w-24" src={agent.displayIcon} alt="Agent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{agent.role.displayName}</h3>
                                <img className="w-24" src={agent.role.displayIcon} alt={agent.role.displayName} />
                            </div>
                        </div>
                        <h4 className="mt-2 font-semibold">Skills:</h4>
                        <ul className="text-sm flex flex-col items-center">
                            {agent.abilities.map((ability, index) => (
                                <li key={index} className="flex items-center gap-2 my-1">
                                    {ability.displayIcon && (
                                        <img src={ability.displayIcon} alt={ability.displayName} className="w-6 h-6" />
                                    )}
                                    {ability.displayName}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-red-500 hover:bg-gray-900 transition text-white w-60 py-2 rounded m-6" onClick={() => addAgent(agent)}>Add Team</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body


