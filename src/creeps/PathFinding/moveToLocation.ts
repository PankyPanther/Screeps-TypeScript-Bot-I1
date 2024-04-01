import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";

export function moveToLocation(creep: Creep, location: any) {
    const cachedPath: PathStep[] | null = getCachedPath(creep);
    const path: PathStep[] | null = creep.pos.findPathTo(location.pos);

    if (!cachedPath) {
        if (path) {
            cachePath(creep, path);
        }

        return  
    } 

    if (creep.moveByPath(cachedPath) !== 0) {
        creep.memory.path = {}
        cachePath(creep, path)
        creep.moveByPath(cachedPath);
    }

    creep.moveByPath(cachedPath);  
}