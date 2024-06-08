import UserProfile from './Components/UserProfile'

import './App.css'

const UserDetailsList = [
  {
    uniqueNo: 1,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">UserList</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile userdetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
