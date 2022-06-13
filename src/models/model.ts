export interface iGotlist {
    id: number;
    name: string;
    family: string;
    isDead: boolean;
}
export class GotModel {
    id: number;
    isDead: boolean;
    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    constructor(public name: string, public family: string) {
        this.isDead = false;
        this.id = GotModel.generateId();
    }
}
