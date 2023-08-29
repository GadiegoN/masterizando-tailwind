import { LogOut } from "lucide-react"

export function Profile() {
    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <img src="http://github.com/gadiegon.png" className="w-10 h-10 rounded-full" alt="" />

            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Gadiego Nogueira</span>
                <span className="truncate text-sm text-zinc-500">ngadiego@gmail.com</span>
            </div>

            <button type="button" className="ml-auto p-4">
                <LogOut className="w-5 h-5 text-zinc-500 rounded-md  hover:bg-zinc-50" />
            </button>
        </div>
    )
}