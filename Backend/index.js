import 'dotenv/config'; 
import express from 'express'
import cors from 'cors'

const app=express();
app.use(cors({
    origin: ['http://localhost:5173', 'frontend-backend-blond.vercel.app'], // Add all allowed frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Enable cookies and authentication headers if needed
  }));


app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:'1',
            title:'Joke 1',
            content: 'This is the first joke'
        },
        {
            id: '2',
            title: 'Joke 2',
            content: 'This is the second joke'
        },
        {
            id: '3',
            title: 'Joke 3',
            content: 'This is the third joke'
        },
        {
            id: '4',
            title: 'Joke 4',
            content: 'This is the fourth joke'
        },
        {
            id: '5',
            title: 'Joke 5',
            content: 'This is the fifth joke'
        }
        ];
        res.send(jokes);
    
})
const port =process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})