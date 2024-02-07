import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


interface FilterValues {
    filter: string,
    setFilter: (value: string) => void
}

export default function Filter(){

    return(
        <div className="w-36">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem  value="note">Filter</SelectItem>
                    <SelectItem value="task">Task</SelectItem>
                    <SelectItem value="none">Note</SelectItem>
                    <Calendar mode="single" className="rounded-md border"/>
                </SelectContent>
            </Select>
        </div>
    )
}