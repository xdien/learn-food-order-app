import { MongoClient } from "mongodb";


async function hanlder(req,res){
    // console.log("Co yeu cau moi ", data);
    if(req.method === "POST"){
        const data = req.body;
        const {title, image,address, description} = data;
        console.log(data);
        

        const client = MongoClient.connect("mongodb://localhost:27017/meetups_db?authSource=lazy_cau_ca");
        const db = (await client).db();

        const meetupCollection = db.collection('meetups');

        const result = await meetupCollection.insertOne(JSON.parse(data));
        console.log(result);
        (await client).close();
        res.status(201).json({message: "Meetup inserted!"});
    }
}

export default hanlder;