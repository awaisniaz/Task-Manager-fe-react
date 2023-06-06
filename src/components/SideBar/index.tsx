
import Projects from '../Projects'

const Sidebar = () => {
    return (
        <div className='h-full min-h-screen w-60 p-2 border-gray-300 border-2 flex flex-col gap-y-2 '>
            <Projects title={'Projects'} />
            <Projects title={'Channels'} />
            <Projects title={'Chat Rooms'} />
        </div>
    )
}

export default Sidebar
