import Image from "next/image"
export const EmptySearch = ()=>{
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/empty-search.png" height={200} width={200} alt="empty"/>
            <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
            <p className="text-muted-foreground text-sm mt-2">Try searching something else...!</p>
        </div>
    )
}