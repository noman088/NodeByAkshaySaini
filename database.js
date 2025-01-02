const { count } = require("console");
const { MongoClient } = require("mongodb");

const url =
    "mongodb+srv://mdnoman70499:cc7cmtauoFgfY1Rn@namastenode.p5lc9.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode";

const client = new MongoClient(url);
const dbName = "HelloWorld!";
async function main() {
    await client.connect();
    console.log("connect Successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection("User");
    // making a document
    const data = {
        firstName: "Afreen",
        lastName: "Fatima",
        city: "Mumbai",
        phoneNumber: "1231231234",
    };
    // inserting the data into database by insert many , we can use insertone too.
    const insertResult = await collection.insertMany([data]); // we have to use array for inserting too many data at a time
    const data2 = {
        firstName: "Afreen",
        lastName: "Noman",
        city: "Mumbai",
        phoneNumber: "1231231234",
    };
    // for inserting one data at a time we can use
    const insertData = await collection.insertOne(data2);

    console.log("inserted documents =>", insertResult);
    // Fetching all the data which has in the database
    const findResult = await collection.find({}).toArray();
    console.log("Found Documents =>", findResult);
    const countResult = await collection.countDocuments({});
    console.log(
        "count of the documents in the User collection =>",
        countResult
    );

    // find the document with firstname or anything you want and then count how many it is or show the document data
    // for showing the document in readable format  we should always use toArray() otherwise it will give in unreadable format
    const countt = await collection
        .find({ firstName: "Afreen" })
        .countDocuments();
    console.log(count); // for how many afreen are there in the document

    return "done.";
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close);
