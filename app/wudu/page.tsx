import type { Metadata } from 'next'
import { WuduGuide } from '@/components/wudu-guide'

export const metadata: Metadata = {
  title: 'Learn Wudu — My First Salah',
  description:
    'A friendly, step-by-step guide that teaches kids how to make Wudu before praying.',
}

export default function WuduPage() {
  return <WuduGuide />
}
