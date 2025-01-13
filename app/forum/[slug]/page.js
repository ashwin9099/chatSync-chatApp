
import ChatForum from '@/components/ChatForum';

export default async function page({ params }) {

  const slug = (await params).slug;
  return <ChatForum/>
}
