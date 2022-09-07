import React from 'react'

function header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5 bg-zinc-900">
        <div className="flex items-center space-x-2">
            <img className="h-20 w-20 rounded-full" 
            src="https://www.londonwebdesignagency.com/wp-content/uploads/2021/11/perseus-goods-branding3.gif" 
            alt="perseus dex logo" />
            <div>
                <h1 className="font-bold text-lg text-white" >Perseus dex</h1>
            </div>
        </div>
    </header>

  )
}

export default header