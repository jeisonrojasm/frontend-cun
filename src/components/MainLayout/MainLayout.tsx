import { Outlet } from 'react-router-dom'
import './MainLayout.css'

export const MainLayout = () => {
  return (
    <>
      <div className='main-layout'>
        <Outlet />
      </div>
    </>
  )
}
