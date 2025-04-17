import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import Modal from './Modal'
import { useEffect, useState } from 'react'

async function fetchApi(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data", error)
  }
}

function App() {
  const [search, setSearch] = useState("")
  const [agents, setAgents] = useState([])
  const [selectedRoles, setSelectedRoles] = useState([])
  const [roles, setRoles] = useState([])
  const [team, setTeam] = useState([])
  const [modalOn, setModalOn] = useState(false)
  const [loading, setLoading] = useState(true)

  function searchChange(e) {
    setSearch(e.target.value)
  }

  function handleCheckbox(role) {
    const newSelectedRoles = selectedRoles.includes(role)
      ? selectedRoles.filter(r => r !== role)
      : [...selectedRoles, role];

    setSelectedRoles(newSelectedRoles);
  }

  function addAgent(agent) {
    if (team.length < 5 && !team.some(a => a.uuid === agent.uuid)) {
      setTeam([...team, agent])
    } else if  (team.length == 5) {
      alert ("YOUR TEAM IS COMPLETE")
  } else {
    alert("ALREADY ON YOUR TEAM")
  }
}
  
function deleteAgent(agentId) {
  setTeam(team.filter(agent => agent.uuid !== agentId))
}

function startModal() {
  setModalOn(!modalOn)
}

useEffect(() => {
  const fetchAgents = async () => {
    setLoading(true)
    const agentsList = await fetchApi("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
    setAgents(agentsList.data)

    const uniqueRoles = [...new Set(agentsList.data.map(e => e.role?.displayName).filter(role => role))]
    setRoles(uniqueRoles)

    setLoading(false)
  };

  fetchAgents()
}, [])


console.log("Lista de agentes", agents)

return (
  <div>
    {loading ? (
      <div className="h-96 flex justify-center items-center text-3xl font-bold py-10">
        LOADING...
      </div>
    ) : (
      <>
        <Navbar
          search={search}
          searchChange={searchChange}
          modalOn={startModal}
        />
        <Body
          search={search}
          agents={agents}
          selectedRoles={selectedRoles}
          handleCheckbox={handleCheckbox}
          roles={roles}
          addAgent={addAgent}
        />
        <Footer />
      </>
    )}
    
    {modalOn && (
      <Modal
        team={team}
        modalOn={startModal}
        deleteAgent={deleteAgent}
        agents={agents}
      />
    )}
  </div>
)
}

export default App


