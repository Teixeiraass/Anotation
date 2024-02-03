import Cards from "@/components/home/Cards";
import CreateNote from "@/components/home/CreateNote";
import Filter from "@/components/home/Filter";
import SearchNote from "@/components/home/SearchNote";

export default function Home() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <div className="flex items-center justify-between"> 
          <SearchNote/>
          <div className="flex gap-5">
            <Filter/>
            <CreateNote/>
          </div>
        </div>
        <div className="flex flex-wrap w-4/4 h-auto gap-5">
          { Array.from({length: 7}).map((_, i) => {
            return(
              <Cards key={i}/>
            )
          })}
          
        </div>
    </div>
  );
}
