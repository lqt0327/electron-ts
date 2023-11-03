function Find(table: string, rule: any = {}) {
  return function decorator(target, name, descriptor) {
    const func = descriptor.value
    if(typeof func === 'function') {
      descriptor.value = function(...args) {
        this[table].find(rule).exec((err, docs)=>{
          if (err) {
            console.error(err);
          }
          const callback = func.apply(this, args)
          return callback(docs)
        })
        
      }
    }
    return descriptor
  }
}

export {
  Find
}