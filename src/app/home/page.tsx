'use client'

import LoadingComponent from "@/components/Loading";
import Setting from "@/components/Setting";
import Cards from "@/components/home/Cards";
import CreateNote from "@/components/home/CreateNote";
import Filter from "@/components/home/Filter";
import SearchNote from "@/components/home/SearchNote";
import api from "@/services/Api";
import { useEffect, useState } from "react";

interface notation{
  id: number;
  content: string;
  description: string;
  title: string;
  color: string,
  notesType: string,
  user: Object
}

export default function Home() {
  const [list, setList] = useState<notation[]>([]);
  const [busca, setBusca] = useState('');
  const [filterType, setFilterType] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const token = localStorage.getItem('token')
      if(token){
        const tokenParts = token.split(".");
        const decodedToken = JSON.parse(atob(tokenParts[1]));

        const userId = decodedToken.id;
        const userEmail = decodedToken.email;
      

        api.get(`/api/notes/usuario/${userEmail}`).then((response) => {
            setList(response.data);
            setLoading(false)
        }).catch((err) => [
          console.log('Erro ao carregar o banco de dados!' + err)
        ])
      }
  }, [])

  const filteredList = list
  .filter((value) =>
      String(value.notesType).includes(filterType)
  ).filter((value) =>
    String(value.title).toLowerCase().includes(busca.toLowerCase())
  );

  if(loading){
    return(
      <LoadingComponent/>
    )
  }


  return (
    <div className="p-10 max-w-7xl mx-auto space-y-4 w-3/4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <div className="flex items-center justify-between"> 
          <SearchNote busca={busca} setBusca={setBusca}/>
          <div className="flex gap-5">
            <Filter filter={filterType} setFilter={setFilterType}/>
            <CreateNote/>
            <Setting/>
          </div>
        </div>
        <div className="flex flex-wrap w-4/4 h-auto gap-5">
            {filteredList.map((item, i) => {
                return(
                    <Cards 
                        key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        content={item.content}
                        color={item.color}
                        type={item.notesType} 
                    />
                )
            })}
        </div>
    </div>
  );
}
