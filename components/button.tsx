
export function Button({title, bg, border, txcolor, shadow}:{title:string, bg:string, border:string, txcolor:string, shadow?: string}) {
    return (
        <div className={`w-fit h-fit py-[7px] px-[15px] rounded-[10px] border-[1px] ${bg} ${border} ${shadow} flex items-center justify-center`}>
            <span className={`font-medium text-[12px] ${txcolor} w-fit h-fit`}>{title}</span>
        </div>
    )
}