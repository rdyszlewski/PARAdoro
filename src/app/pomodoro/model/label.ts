export interface IPomodoroLabels{
  readonly id: string;
  readonly name: string;
}

export class PomodoroLabel implements IPomodoroLabels{

  private _id: string;
  private _name: string;

  constructor(id: string, name: string){
    this._id = id;
    this._name = name;
  }

  public get id():string{
    return this._id;
  }

  public get name():string{
    return this._name;
  }
}
