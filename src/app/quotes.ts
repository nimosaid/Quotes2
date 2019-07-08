export class Quotes {
  public showAuthor: boolean;

  constructor(public vote:number ,public quote:string ,public author: string, public completeDate: Date){
    this.showAuthor=false;
  }
}
