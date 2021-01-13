export class Credit {
    id: number;
    actorID: number;
    movieID: number;
    role: string;


constructor(id: number = 0, actorID: number = 0, movieID: number = 0, role: string = '') {
        this.id = id;
        this.actorID = actorID;
        this.movieID = movieID;
        this.role = role;
    }
}