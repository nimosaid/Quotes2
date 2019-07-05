export class Quotes {
  public showComment: boolean;
  constructor(public name:string ,public vote:number ,public comment: string){
    this.showComment=false;
  }
}
