import Dexie, { Table } from 'dexie';

interface tbNameItem {
  id?: number;
  name: string;
  value: string;
}

export class MySubClassedDexie extends Dexie {
  tbList!: Table<QuickLinkDataItem>; 
  tbCollect!: Table<QuickLinkDataItem>; 
  tbName!: Table<tbNameItem>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
        tbName: '++id,name,value',
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

db.open().then(()=>{
  db.transaction('rw', db.tbName, async ()=>{
    const data = await db.tbName.toArray()
    if(data.length === 0) {
      db.tbName.bulkAdd([
        {
          value: 'tbList',
          name: '全部'
        },
        {
          value: 'tbCollect',
          name: '收藏夹'
        },
      ])
    }
  }).then(() => {
    console.log('Transaction completed successfully');
  }).catch((error) => {
    console.error('Transaction failed:', error);
  });
}).catch((error) => {
  console.error('Error opening database:', error);
});

function basename(path: string) {
  if(!path) return ''
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