import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const db = await client.db('linkforest');
    const collection = await db.collection("trees");
    const body = await request.json();
    let check = await collection.findOne({ handle: body.handle });
    if (check) {
        return Response.json({ success: false, error: true, message: "UserHandle already exists!!!" });
    }
    let result = await collection.insertOne(body);
    if (result) {
        return Response.json({ success: true, error: false, message: "tree generated successfully" })
    }
}