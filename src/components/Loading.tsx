'use client'
import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function LoadingComponent(){
    return(
        <div className="p-10 max-w-7xl mx-auto space-y-4 w-3/4">
            <Skeleton className="w-[100px] h-[40px] f rounded-full"/>
            <div className="flex items-center justify-between">
                <Skeleton className="w-[250px] h-[20px] f rounded-full"/>
                <div className="flex gap-5">
                    <Skeleton className="w-[100px] h-[30px] f rounded-full"/>
                    <Skeleton className="w-[100px] h-[30px] f rounded-full"/>
                </div>  
            </div>
            <div className="flex flex-wrap w-4/4 h-auto gap-5 mt-16">
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
                <div>
                    <Skeleton className="w-96 h-[250px]"/>
                </div>
            </div>
        </div>
    )
}