'use client'

import LoadingComponent from "@/components/Loading";
import Setting from "@/components/Setting";
import Cards from "@/components/home/Cards";
import CreateNote from "@/components/home/CreateNote";
import Filter from "@/components/home/Filter";
import SearchNote from "@/components/home/SearchNote";
import api from "@/server/Api";
import { useEffect, useState } from "react";

interface notation{
  id: number;
  content: string;
  description: string;
  title: string;
}

export default function Home() {
  const [list, setList] = useState<notation[]>([]);
  const [filteredData, setFilteredData] = useState<notation[]>([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      api.get("/api/notes").then((response) => {
          setList(response.data);
          setFilteredData(response.data);
          setTimeout(function(){
            setLoading(false);
          },1000)
          
      }).catch((err) => [
        console.log('Erro ao carregar o banco de dados!' + err)
      ])
  }, [])

  const handleSearchFilter = (filterValues: { title: string }) => {
    const filteredList = list.filter((item) => {
      return (
        item.title.toLowerCase().includes(filterValues.title.toLowerCase())
      );
    });
    setFilteredData(filteredList);
  };

  if(loading){
    return(
      <LoadingComponent/>
    )
  }


  return (
    <div className="p-10 max-w-7xl mx-auto space-y-4 w-3/4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <div className="flex items-center justify-between"> 
          <SearchNote onFilter={handleSearchFilter}/>
          <div className="flex gap-5">
            <Filter/>
            <CreateNote/>
            <Setting/>
          </div>
        </div>
        <div className="flex flex-wrap w-4/4 h-auto gap-5">
            {filteredData.map((item, i) => {
                return(
                    <Cards 
                        key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        content={item.content}
                    />
                )
            })}
        </div>
    </div>
  );
}
