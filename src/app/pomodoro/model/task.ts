import { IPomodoroLabels as IPomodoroLabel, PomodoroLabel } from './label';

export interface IPomodoroTask{
  readonly id: string;
  readonly name: string;
  readonly projectId: string;
  readonly projectName: string;
  readonly labels:IPomodoroLabel[];
  setTask(id: string, name: string): void;
  setProject(id: string, name: string): void;
  addLabel(id: string, name: string): void;
}

export class PomodoroTask implements IPomodoroTask{

  private _id: string;
  private _name: string;
  private _projectId: string;
  private _projectName: string;
  private _labels: IPomodoroLabel[];

  constructor(){
    this._labels = [];
  }


  public get id(): string{
    return this._id;
  }

  public get name(): string{
    return this._name;
  }

  public get projectId(): string{
    return this._name;
  }

  public get projectName(): string{
    return this._projectName;
  }

  public get labels(): IPomodoroLabel[]{
    return this._labels;
  }

  setTask(id: string, name: string): void {
    this._id = id;
    this._name = name;
  }

  setProject(id: string, name: string): void {
    this._projectId = id;
    this._projectName = name;
  }
  addLabel(id: string, name: string): void {
    let label = new PomodoroLabel(id, name);
    this._labels.push(label);
  }



}
