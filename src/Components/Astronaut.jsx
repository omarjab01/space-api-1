import React from 'react'

const Astronaut = (props) => {
  return (
    <div className='bg-gray-900 p-4 rounded-2xl'>
        <img src="https://cdn.dribbble.com/users/4563105/screenshots/12071145/astronaut-icon_4x.png"
            className='w-full rounded-2xl'
        />
        <h2 className='text-white my-4'>{props.name}</h2>

    </div>
  )
}

export default Astronaut