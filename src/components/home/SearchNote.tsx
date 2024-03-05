'use client'
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SearchInterface{
    busca: string,
    setBusca: (value: string) => void;
}

export default function SearchNote({busca, setBusca}: SearchInterface) {

    return(
        <div className="flex gap-3">
            <Input placeholder="Search" name="title" value={busca} className="w-auto" onChange={(e) => setBusca(e.target.value)}/>
        </div>
    )
}