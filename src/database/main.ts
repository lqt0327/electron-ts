import Dexie, { Table } from 'dexie';

export class MySubClassedDexie extends Dexie {
  tbList!: Table<QuickLinkDataItem>; 
  tbCollect!: Table<QuickLinkDataItem>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
        tbList: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect',
        tbCollect: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect',
    });
  }
}

const db = new MySubClassedDexie()

export {
    db,
};