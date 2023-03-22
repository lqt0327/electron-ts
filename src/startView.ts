import Koa from 'koa'

function startView() {
  const app = new Koa()
  app.use((ctx)=>{
    let html=`
        <h1>JSPang Koa2 request POST</h1>
        <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>age</p>
            <input name="age" /><br/>
            <p>website</p>
            <input name="webSite" /><br/>
            <button type="submit">submit</button>
        </form>
    `;
    ctx.body=html;
  })
  app.listen(8080)
}

export {
  startView
}