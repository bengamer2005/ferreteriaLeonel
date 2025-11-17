import React from 'react'

const ErrorToast = ({error}) => {
  return (
        <div className="lg:fixed lg:bottom-4 lg:right-4 w-auto lg:w-80 text-sm z-50">
            <div className="rounded-md p-4 bg-red-50">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-red-400 w-5 h-5">
                            <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fillRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-col ml-5">
                        <p className="text-red-800 text-sm font-bold">
                            Ocurrio un error.
                        </p>
                        <div className="mt-2 text-red-700 text-sm">
                        <ul className="pl-5 mt-1 list-disc" role="list">
                            <li>{error}</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorToast