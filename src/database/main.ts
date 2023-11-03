import Dexie, { Table, Version } from 'dexie';
import localForage from 'localforage';

interface tbNameItem {
  id?: number;
  name: string;
  value: string;
}

interface TableDefinition {
  [tableName: string]: string;
}


class MyDatabase {
  tbList!: Table<QuickLinkDataItem>; 
  tbCollect!: Table<QuickLinkDataItem>; 
  tbName!: Table<tbNameItem>;
  db: any;
  isOpen: boolean;

  constructor(databaseName: string) {
    this.db = new Dexie(databaseName)
    this.isOpen = false
    this.openDB()
  }

  createTables(tables: TableDefinition) {
    const currentVersion = this.getVersion();

    if (currentVersion === 0) {
      // 数据库不存在或尚未初始化
      this.#upgradeVersion(1, tables); // 升级至版本 1
    } else {
      console.warn("数据库已存在，不需要重新创建表格。请勿重复调用 createTable 方法。");
    }

    const tableNames = Object.keys(tables);
    const createdTables = {};

    tableNames.forEach(tableName => {
      createdTables[tableName] = this.db.table(tableName);
    });

    return createdTables;
  }

  #upgradeVersion(version, tables) {
    // 在这里执行数据库版本升级的逻辑

    switch (version) {
      case 1:
        this.db.version(1).stores(tables);
        // this.db.version(1).stores({
        //   tbName: '++id,name,value',
        //   tbList: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
        //   tbCollect: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
        // });
        break;
      case 2:
        // 版本 2 的处理逻辑
        break;
      default:
        console.warn(`未知版本号: ${version}，请添加相应的版本升级逻辑。`);
    }
  }

  open() {
    return new Promise((resolve, reject) => {
      if (this.isOpen) {
        resolve(true);
      } else {
        this.db
          .open()
          .then(() => {
            this.isOpen = true;
            resolve(true);
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }

  close() {
    this.db.close();
    this.isOpen = false;
  }

  async openDB() {
    if (this.isOpen) return true;
  
    try {
      // this.createTable();
      await this.db.open();
      this.isOpen = true
      await this.db.transaction('rw', 'tbName', async () => {
      console.log(this.db.tbName,'???---')
      const data = await this.db.tbName.toArray();
        if (data.length === 0) {
          await this.db.tbName.bulkAdd([
            { value: 'tbList', name: '全部' },
            { value: 'tbCollect', name: '收藏夹' },
          ]);
        }
      });
  
      console.log('Transaction completed successfully');
      return true;
    } catch (error) {
      console.log('数据库open异常:', error);
      return false;
    }
  }

  version(versionNumber: number): Version {
    console.log(versionNumber,'???---')
    // this.dbVersion = versionNumber
    // this.setDBVersion(versionNumber)
    return this.db.version(versionNumber)
  }

  getVersion() {
    return this.db.verno;
  }

  async updatePathInAllTables(fieldName: string[], origin: string) {

    const tables = Object.values(this.db.tables); // 获取所有表
    
    // for (const item of tables) {
    //   await this[item.name].toCollection().modify((record: QuickLinkDataItem) => {
    //     for(let v of fieldName) {
    //       record[v] = pathFormat(record[v], origin)
    //     }
    //   });
    // }
  }

}

const db = new MyDatabase('myDatabase');
db.open()
  .then(() => {
    const currentVersion = db.getVersion();

          console.log('当前数据库版本:', currentVersion);

          // 根据版本号来判断需要执行的操作
          if (currentVersion === 1) {
            // 版本为 1 的逻辑

            // 初始化表格
            const tables = {
              tbName: '++id,name,value',
              tbList: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
              tbCollect: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
            };

            const createdTables: any = db.createTables(tables);

            // 添加示例数据
            createdTables.tbName.add({ name: 'John', value: 12345 });

            console.log('表格已创建并数据已添加');
          } else {
            // 处理其他版本的逻辑
            // 初始化表格
            const tables = {
              tbName: '++id,name,value',
              tbList: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
              tbCollect: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect,custom_col',
            };

            const createdTables: any = db.createTables(tables);
          }

          // 监听版本更改事件
          db.db.on("versionchange", () => {
            console.warn('数据库版本已更改，请刷新页面以使用最新数据！');
          });
        })
        .catch(error => {
          console.error('无法打开数据库:', error);
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