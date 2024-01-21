import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Metadata Teste',
  description: 'Teste com Metadata',
}
 
export default function Page() {
    return (
        <h1>Teste com Metadata</h1>
    )
}