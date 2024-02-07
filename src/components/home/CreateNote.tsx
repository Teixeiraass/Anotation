'use client';
import React, { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import api from "@/server/Api";

interface FormValues {
    [key: string]: string | number;
}

export default function CreateNote(){
    const [values, setValues] = useState<FormValues>({});

    const handleChangeValues = (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }))
    } 

    const handleSelectChange = (value: string) => {
        setValues(prevValue => ({
            ...prevValue,
            type: value
        }));
    };

    const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            api.post("/api/notes", {
                title: values.title,
                description: values.description,
                content: values.content,
                notesType: values.type
            })
        }catch(e){
            console.log(e);
        }
    }

    console.log(values)

    return(
        <>
            <Dialog>
                <DialogTrigger>
                    <Button>Create</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create a note</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleCreate}>
                        <div className="">
                            <Label>Title</Label>
                            <Input placeholder="Title note" name="title" onChange={handleChangeValues}/>
                        </div>
                        <div className="">   
                            <Label>Description</Label>
                            <Input placeholder="Note description" name="description" onChange={handleChangeValues}/>
                        </div>
                        <div className="">
                            <Label>Content</Label>
                            <Textarea placeholder="Note content" name="content" onChange={(e) => handleChangeValues(e)}/>
                        </div>
                        <Select name="select" onValueChange={handleSelectChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Type of note"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="TASK">Task</SelectItem>
                                <SelectItem value="NOTES">Note</SelectItem>
                            </SelectContent>
                        </Select>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant="ghost">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Create</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}