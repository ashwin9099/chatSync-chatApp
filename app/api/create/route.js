import { StreamChat } from "stream-chat";

const api_key = "pgw8ujauwyxa";
const api_secret = "svxnzz96x6pw4qx49daqn62w8p9v8hds7rgbj93r6etasy9u67c9s487kgdp7dj7";
const user_id = "user_2rWymfvJeDuKAm2nex5XaoQIq9V";

export async function GET() {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);
  console.log(token);
  return Response.json({ message: "Hello World" });
}
