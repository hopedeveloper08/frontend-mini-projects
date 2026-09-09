import { useState } from 'react'
function SpongebobLoginForm() {
  const [position, setPosition] = useState(-14)

  const handleChange = (e) => {
    setPosition(Math.min(14, e.target.value.length - 14))
    onFocusUsername()
  };

  function onFocusUsername() {
    const leftEye = document.querySelector('#left-eye')
    const rightEye = document.querySelector('#right-eye')

    leftEye.style.translate = `${position}px 32px`
    rightEye.style.translate = `${position}px 32px`
  }

  function onFocusPassword() {
    const leftEye = document.querySelector('#left-eye')
    const rightEye = document.querySelector('#right-eye')

    leftEye.style.translate = "-16px -32px"
    rightEye.style.translate = "16px -32px"
  }

  function onBlurHandler() {
    const leftEye = document.querySelector('#left-eye')
    const rightEye = document.querySelector('#right-eye')

    leftEye.style.translate = "0px 0px"
    rightEye.style.translate = "0px 0px"
  }

  return (
    <>
      <main className="w-screen h-screen p-10 bg-yellow-50 flex justify-center items-center">
        <div className="w-100 h-150 bg-[#fbf468] rounded-4xl px-12 py-8 flex flex-col justify-between items-center *:w-full">
          <div className="flex justify-center relative">
            <img className="rounded" src="./images/spongebob-login-form/bobno.png" alt="spongebob" />
            <img id="left-eye" className="absolute size-9 top-23 right-19 duration-500" src="./images/spongebob-login-form/eye.png" alt="left-eye" />
            <img id="right-eye" className="absolute size-9 top-23 left-19 duration-500" src="./images/spongebob-login-form/eye.png" alt="right-eye" />
          </div>
          <div className="flex flex-col justify-around gap-4">
            <input type="text" onChange={handleChange} className="border border-zinc-600 fu rounded-sm px-3 py-2" placeholder="Username" onFocus={onFocusUsername} onBlur={onBlurHandler} />
            <input type="password" className="border border-zinc-600 fu rounded-sm px-3 py-2" placeholder="Password" onFocus={onFocusPassword} onBlur={onBlurHandler} />
          </div>
          <div>
            <button className="w-full py-2 bg-blue-600 rounded-md text-white text-lg hover:bg-blue-700 transition-colors cursor-pointer">Login</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default SpongebobLoginForm