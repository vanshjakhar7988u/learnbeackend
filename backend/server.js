import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A Joke',
            content:'THis is a 1 joke'
        },
        {
            id:2,
            title:'2 Joke',
            content:'THis is a 2joke'
        },
        {
            id:3,
            title:'3 Joke',
            content:'THis is a 3 joke'
        },
        {
            id:4,
            title:'4 Joke',
            content:'THis is a 4 joke'
        },
        {
            id:5,
            title:'5 Joke',
            content:'THis is a 5 joke'
        }
    ];
    res.send(jokes);
})

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
})
