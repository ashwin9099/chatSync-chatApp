import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "pgw8ujauwyxa";
const api_secret =
  "svxnzz96x6pw4qx49daqn62w8p9v8hds7rgbj93r6etasy9u67c9s487kgdp7dj7";
// const user_id = "user_2rWymfvJeDuKAm2nex5XaoQIq9V";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(c);
  // console.log("token = ",token);
  console.log("A New USER BEEN CREATED!  ", token);

  const client = await clerkClient();

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });
  return Response.json({ message: "Hello World" });
}
