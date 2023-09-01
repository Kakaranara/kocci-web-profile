import { NavBar } from './component/navbar'
import Dashboard from './component/dashboard'
import MyProject from './component/project'

export default function Home() {
  return (
    <>
      <NavBar canBackHome={false} />
      <Dashboard/>
      <MyProject/>
    </>
  )
}
