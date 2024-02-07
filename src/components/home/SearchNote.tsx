'use client'
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FilterNoteProps{
    onFilter: (filterValues: FormValues) => void;
}

interface FormValues {
    title: string;
}

export default function SearchNote({onFilter}: FilterNoteProps) {
    const [filterValues, setFilterValues] = useState({
        title: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilterValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFilter(filterValues);
    };

    return(
        <>
            <form className="flex gap-3" onSubmit={handleSubmit}>
                <Input placeholder="Search" name="title" className="w-auto" onChange={handleChange}/>
                <Button type="submit" variant="default">Search</Button>
            </form>
        </>
    )
}