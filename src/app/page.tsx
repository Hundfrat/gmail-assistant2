import { buttonVariants } from '@/components/ui/button';
import User from '@/components/ui/User';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/index.html');
}

