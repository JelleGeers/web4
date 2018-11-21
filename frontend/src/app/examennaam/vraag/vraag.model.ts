export enum DifficultyType {
    None,
    makkelijk,
    gemiddeld,
    moeilijk
}
export class VraagDifficulty {
    constructor(private _amount: number, private _difficulty: DifficultyType) { }
    get amount(): number {
        return this._amount;
    }
    get difficulty(): DifficultyType {
        return this._difficulty;
    }
}
export class Vraag {
    private _id: string;
    private _name: string;
    private _vraagdifficulty: VraagDifficulty;

    static fromJSON(json): Vraag {
        const rec = new Vraag(json.name, json.amount, json.difficulty);
        rec._id = json._id;
        return rec;
    }

    constructor(
        name: string,
        amount: number = 1,
        difficulty: DifficultyType = DifficultyType.None
    ) {
        this._name = name;
        this._vraagdifficulty = new VraagDifficulty(amount, difficulty);
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get amount(): number {
        return this._vraagdifficulty.amount;
    }
    get difficulty(): DifficultyType {
        return this._vraagdifficulty.difficulty;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            amount: this._vraagdifficulty.amount,
            difficulty:
                this._vraagdifficulty.difficulty === DifficultyType.None
                    ? ''
                    : this._vraagdifficulty.difficulty
        };
    }
}
