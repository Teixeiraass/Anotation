import { Calendar } from "../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Filter(){
    return(
        <div className="w-36">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter"/>
                </SelectTrigger>
                <SelectContent>
                    <Calendar mode="single" className="rounded-md border"/>
                    <SelectItem value="task">Task</SelectItem>
                    <SelectItem value="note">Note</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}