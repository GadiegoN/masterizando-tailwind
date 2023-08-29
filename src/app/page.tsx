export default function Home() {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 flex-col text-center text-slate-900 dark:text-slate-100 h-screen ">
      <div className="">
        <h1 
          className="
            font-bold
            text-3xl
            sm:text-5xl
            lg:text-6xl
            first-letter:text-primary
          "
        >
          Hello World
        </h1>

        <button
          className="
            bg-sky-500
            dark:bg-sky-600
            text-white
            px-4
            py-2
            rounded-md
            font-medium
            mt-4
            enabled:hover:bg-sky-900
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          Sign In
        </button>
      </div>
    </div>
  )
}
