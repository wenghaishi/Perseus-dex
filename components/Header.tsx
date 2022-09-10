import React from 'react'
import NavButton from './NavButton';



function header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5 border-b-2
      border-neutral-800 w-screen">
        <div className="flex items-center space-x-2">
            <img className="h-20 w-20 rounded-full" 
            src="https://www.londonwebdesignagency.com/wp-content/uploads/2021/11/perseus-goods-branding3.gif" 
            alt="perseus dex logo" />
            <div>
                <h1 className="font-bold text-lg text-white" >Perseus dex</h1>
                <p></p>
                
            </div>
        </div>

        <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
            <div className="bg-neutral-900 p-4 space-x-2">
                <NavButton isActive title="Connect Metamask" />
            </div>
            <div>
                <NavButton isActive title="..." />
            </div>
        </div>
    </header>

  )
}

export default header