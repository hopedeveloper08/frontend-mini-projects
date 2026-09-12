import { useState } from 'react'

function SpongebobLoginForm() {
  const [position, setPosition] = useState(-12)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setPosition(Math.min(12, e.target.value.length - 12))
    onFocusUsername()
  };

  function onFocusUsername() {
    const leftEye = document.querySelector<HTMLElement>('#left-eye')
    const rightEye = document.querySelector<HTMLElement>('#right-eye')

    if (!leftEye || !rightEye) return

    leftEye.style.translate = `${position}px 25px`
    rightEye.style.translate = `${position}px 25px`
  }

  function onFocusPassword() {
    const leftEye = document.querySelector<HTMLElement>('#left-eye')
    const rightEye = document.querySelector<HTMLElement>('#right-eye')

    if (!leftEye || !rightEye) return

    leftEye.style.translate = "-12px -25px"
    rightEye.style.translate = "12px -25px"
  }

  function onBlurHandler() {
    const leftEye = document.querySelector<HTMLElement>('#left-eye')
    const rightEye = document.querySelector<HTMLElement>('#right-eye')

    if (!leftEye || !rightEye) return

    leftEye.style.translate = "0px 0px"
    rightEye.style.translate = "0px 0px"
  }

  return (
    <>
      <main className="w-screen h-screen p-10 bg-yellow-50 flex justify-center items-center">
        <div className="w-80 h-150 bg-[#fbf468] rounded-4xl px-12 py-8 flex flex-col justify-between items-center shadow-md shadow-zinc-700 *:w-full">
          <div className="flex justify-center relative">
            <img className="rounded" src="/images/spongebob-login-form/bobno.png" alt="spongebob" />
            <img id="left-eye" className="absolute size-8 top-17 right-12 duration-500" src="/images/spongebob-login-form/eye.png" alt="left-eye" />
            <img id="right-eye" className="absolute size-8 top-17 left-12 duration-500" src="/images/spongebob-login-form/eye.png" alt="right-eye" />
          </div>
          <div className="flex flex-col justify-around gap-4" dir='ltr'>
            <input type="text" onChange={handleChange} className="border border-zinc-600 text-zinc-600 rounded-sm px-3 py-2" placeholder="Username" onFocus={onFocusUsername} onBlur={onBlurHandler} />
            <input type="password" className="border border-zinc-600 text-zinc-600 rounded-sm px-3 py-2" placeholder="Password" onFocus={onFocusPassword} onBlur={onBlurHandler} />
          </div>
          <div>
            <button className="w-full py-2 btn bg-blue-500 border-blue-500 hover:bg-blue-400 rounded-md text-white text-lg shadow-sm shadow-blue-700">Login</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default SpongebobLoginForm