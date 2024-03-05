import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface FilterInterface{
    filter: string,
    setFilter: (value: string) => void;
}

export default function Filter({filter, setFilter}: FilterInterface){
    const handleValueChange = (value: string) => {
        setFilter(value);
        setFilter(value === "Filter" ? '' : value)
    };
    
    return(
        <div className="w-36">
            <Select value={filter} onValueChange={handleValueChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Filter"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Filter" >Clear</SelectItem>
                    <SelectItem value="TASK">Task</SelectItem>
                    <SelectItem value="NOTES">Note</SelectItem>
                    <Calendar mode="single" className="rounded-md border"/>
                </SelectContent>
            </Select>
        </div>
    )
}