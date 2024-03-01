'use client'
import api from "@/services/Api";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface DialogCard{
    id: number,
    title: string,
    description: string,
    content: string,
    type: string,
    color: string
}

interface FormValues {
    [key: string]: string | number;
}

export default function DialogCard({id ,title, description, content, type, color}: DialogCard){
    const [editNote, setEditNote] = useState(false)
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedContent, setEditedContent] = useState(content);

    const handleChangeValues = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === "title") {
        setEditedTitle(value);
        } else if (name === "description") {
        setEditedDescription(value);
        } else if (name === "content") {
        setEditedContent(value);
        }
    };

    const handleDelete = () => {
        api.delete(`/api/notes/${id}`).then((response) => {
            
        })
        window.location.reload();
    }

    const handleUpdate = () => {
        api.put("/api/notes", {
            id: id,
            title: editedTitle,
            description: editedDescription,
            content: editedContent,
            notesType: type,
            color: color
        }).then(() => {
            window.location.reload();
        })
    }

    if(!editNote){
        return(
            <>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Open note</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <div>
                            <p>{content}</p>
                        </div>
                        <DialogFooter>
                            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                            <Button onClick={(e) => setEditNote(true)} variant="outline">Edit</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        )
    }

    if(editNote){
        return(
            <>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Open note</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <div>
                                <Label>Title</Label>
                                <Input name="title" value={editedTitle} onChange={handleChangeValues}/>
                            </div>
                            <div>   
                                <Label>Description</Label>
                                <Input name="description" value={editedDescription} onChange={handleChangeValues}/>
                            </div>
                        </DialogHeader>
                        <div>
                            <Textarea name="content" value={editedContent} onChange={handleChangeValues}>

                            </Textarea>
                        </div>
                        <DialogFooter>
                            <Button variant="destructive" onClick={(e) => setEditNote(false)}>Cancel</Button>
                            <Button onClick={handleUpdate} variant="outline">Update</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
    
    
}