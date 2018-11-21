import { Vraag } from './vraag/vraag.model';

export class Examennaam {
    private _id: string;
    private _name: string;
    private _dateAdded: Date;
    private _vragen: Vraag[];
    private _maker: string;

    constructor(
        name: string,
        vragen: Vraag[] = [],
        dateAdded: Date = null
    ) {
        this._name = name;
        this._vragen = vragen;
        this._dateAdded = dateAdded ? dateAdded : new Date();
    }

    static fromJSON(json: any): Examennaam {
        const exa = new Examennaam(
            json.name,
            json.vragen.map(Vraag.fromJSON),
            json.created
        );
        exa._id = json._id;
        exa._maker = json.maker;
        return exa;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            vragen: this._vragen.map(vra => vra.toJSON()),
            created: this._dateAdded,
            maker: this._maker
        };
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get dateAdded(): Date {
        return this._dateAdded;
    }
    get vragen(): Vraag[] {
        return this._vragen;
    }
    addVraag(vra: Vraag) {
        this._vragen.push(vra);
    }

    get maker(): string {
        return this._maker;
    }
}
