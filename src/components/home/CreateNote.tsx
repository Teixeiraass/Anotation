import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function CreateNote(){
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
                    <form className="space-y-4">
                        <div className="">
                            <Label>Title</Label>
                            <Input placeholder="Title note" />
                        </div>
                        <div className="">   
                            <Label>Description</Label>
                            <Input placeholder="Note description" />
                        </div>
                        <div className="">
                            <Label>Content</Label>
                            <Textarea placeholder="Note content" />
                        </div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Type of note"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="task">Task</SelectItem>
                                <SelectItem value="none">Note</SelectItem>
                            </SelectContent>
                        </Select>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant="ghost">Cancelar</Button>
                            </DialogClose>
                            <Button>Create</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}