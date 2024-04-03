import {test, expect} from '@playwright/test'

var userid:any

test("Get request", async ({request})=>{
    const ResponseGet = await request.get("https://reqres.in/api/users?page=2");
    console.log(await ResponseGet.json());
    expect(ResponseGet.status()).toBe(200);

})

test("Post request", async ({request})=>{
    const ResponsePost = await request.post("https://reqres.in/api/users",
    {
        data:{ "name": "Harish", "job":"Engineer" },
        headers:{"Accept":"application/json"}
    });
    console.log(await ResponsePost.json());
    expect(ResponsePost.status()).toBe(201);
    var res = await ResponsePost.json();
    userid = res.id
    
})

test("Put request", async ({request})=>{

    const ResponsePut = await request.put("https://reqres.in/api/users/"+userid,
    {
        data:{"name":"Harish", "job":"Senior Engineer"},
        headers:{"Accept":"application/json"}
    });
    console.log(await ResponsePut.json());
    expect(ResponsePut.status()).toBe(200);   
})

test("Delete request", async ({request})=>{

    const ResponseDel = await request.delete("https://reqres.in/api/users/"+userid);
    expect(ResponseDel.status()).toBe(204);

    
})