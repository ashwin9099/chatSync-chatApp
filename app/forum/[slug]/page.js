
import ChatForum from '@/components/ChatForum';
import { currentUser, Token } from '@clerk/nextjs/server'

export default async function page({ params }) {

  const user = await currentUser()


  const slug = (await params).slug;
  return <ChatForum slug={slug} clerkUser={{id:user.id, username: user.username,token:user.publicMetadata.token}}/>
}
