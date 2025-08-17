

export const NextRace = () => {
  return (
    <div className=" shadow-xl    h-40 m-5 p-5 px-20 items-center flex rounded-2xl justify-between">
      <h1 className="text-5xl font-bold">Next Race ...</h1>

      <div className="flex gap-5">

        <div className="">
          <img src="/flag.jpg" alt="flag" className="h-30" />
        </div>

        <div className="flex flex-col font-black  m-auto">
          <p className="text-2xl">Netherlands</p>
          <p className="text-xl">10d 20h 45m 12s</p>
        </div>
      </div>
    </div>
  )
}
