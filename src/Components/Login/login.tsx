import React from 'react'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-extrabold text-center mb-6">Log in to your account</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="block text-gray-700 font-medium">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                className="mt-1 block w-full rounded-md shadow-sm py-2 px-4 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                className="mt-1 block w-full rounded-md shadow-sm py-2 px-4 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Log in
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm text-gray-600">Or continue with social media</div>
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                            Facebook
                        </button>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                            Google
                        </button>
                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                            Twitter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
