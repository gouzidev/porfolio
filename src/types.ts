import { stat } from "fs";

enum projectStatus {
    done,
    progress
}


class ProjectTemplate 
{
    public name : string
    public desc : string
    public img : string
    public stts : projectStatus
    public tags : string[]
    public link : string
    constructor(name : string, desc : string, img : string, tags : string[] = [], link : string = "#", stts : projectStatus = projectStatus.done)
    {
        this.name = name
        this.desc = desc
        this.img = img
        this.stts = stts
        this.link = link
        this.tags = tags
    }
}

export {ProjectTemplate, projectStatus}