import dynamic from 'next/dynamic'

const Device = dynamic(() => import('./mobile'), { ssr: false })

export default Device
