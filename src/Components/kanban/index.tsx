import React from 'react'

const Kanban = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Project Management Task Board</h1>
            <div className="flex gap-4">

                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">Open</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-blue-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 1</h3>
                            <p>Task description goes here...</p>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 2</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">In Progress</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">
                        <div className="bg-yellow-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 3</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">QA</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-pink-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 4</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">Staging</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-green-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 5</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">Deployment</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-purple-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 6</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">UAT</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-orange-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 7</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                    <h2 className="text-xl font-semibold mb-4">Close</h2>
                    <div className="border border-dashed border-gray-400 p-2 mb-2">

                        <div className="bg-gray-100 p-2 rounded-md mb-2">
                            <h3 className="font-semibold">Task 8</h3>
                            <p>Task description goes here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kanban
