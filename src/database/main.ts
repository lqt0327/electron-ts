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

  async updatePathInAllTables(fieldName: string[], origin: string) {

    const tables = Object.values(this.tables); // 获取所有表
    
    for (const item of tables) {
      await this[item.name].toCollection().modify((record: QuickLinkDataItem) => {
        for(let v of fieldName) {
          record[v] = pathFormat(record[v], origin)
        }
      });
    }
  }

}

const db = new MySubClassedDexie()

function basename(path: string) {
  if(path.includes(':\\')) {
    return path.split('\\').pop()
  }
  if(path.includes('/')) {
    return path.split('/').pop()
  }
  return ''
}

function pathFormat(path: string, origin: string) {
  if(process.platform === 'win32') {
    const name = basename(path)
    return origin + '\\' + name
  }
  if(process.platform === 'darwin') {
    const name = basename(path)
    return origin + '/' + name
  }
}

export {
    db,
};