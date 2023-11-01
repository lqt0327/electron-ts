import Dexie, { Version } from 'dexie';
import localforage from 'localforage';

class MyDatabase extends Dexie {
  tbName: Dexie.Table;
  tbList: Dexie.Table;
  tbCollect: Dexie.Table;

  constructor(databaseName: string) {
    super(databaseName);

    // console.log(this.verno,'???--')
    // if(this.verno === 0) {
      this.version(1).stores({
        tbName: '++id,name,value',
        tbList: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
        tbCollect: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
      })
      

      this.tbName = this.table('tbName');
      this.tbList = this.table('tbList');
      this.tbCollect = this.table('tbCollect');
      
      this.tbName.count()
        .then(count => {
          if(count === 0) {
            this.table('tbName').bulkAdd([
              { value: 'tbList', name: '全部' },
              { value: 'tbCollect', name: '收藏夹' },
            ]);
          }
        })
    // }
  }

  version(versionNumber: number): Version {
    localforage.setItem('dbVersion', versionNumber).then(() => {
      return localforage.ready();
    })
    return super.version(versionNumber);
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

const db = new MyDatabase('mydb');


// 使用示例
db.tbName.toArray().then(data => {
  console.log(data,'-----');
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
  db
}