import { LuUser2 } from "react-icons/lu"

export default () => {
  return (
    <div className="w-full max-w-[30rem] mx-auto">
      <div className="w-[4rem] h-[4rem] grid place-items-center bg-[#333] rounded-full mx-auto mb-2">
        <LuUser2 className="w-[50%] h-[50%] stroke-[#bbb]" />
      </div>
      <h1 className="text-center text-[1.5rem]">Welcome back!</h1>
      <p className="text-center text-sm text-[#999]">Log in to your account</p>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 bg-[#222] border-[0.0625rem] border-[#444] rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 bg-[#222] border-[0.0625rem] border-[#444] rounded-lg rounded-lg focus:outline-none"
          />
        </div>
        <button disabled type="submit" className="w-full bg-[#111] font-medium rounded-lg px-4 py-2">
          Log in
        </button>
      </form>
    </div>
  )
}
