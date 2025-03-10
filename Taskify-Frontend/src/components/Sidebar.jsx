import React from 'react'
import taskify from '../assets/Taskify-logo.svg'

const Sidebar = () => {
    return (
        <aside className='h-screen'>
            <nav className='h-full flex flex-col border-r bg-white shadow-sm'>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src={taskify} alt="Taskify" className='w-32' />
                    <button>
                        
                    </button>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar