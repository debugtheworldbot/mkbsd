import Image from 'next/image'
import { imgs } from './imgs'

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]'>
			<div className='relative w-[200px] h-[80px]'>
				<Image
					src='https://panels.art/images/Group-8187.svg'
					width={200}
					height={50}
					alt='logo'
					className='block'
				/>
				<div className='absolute left-12 inset-0 flex items-center justify-center'>
					<div className='w-full h-2 bg-red-500 rotate-45 translate-x-1/2'></div>
					<div className='w-full h-2 bg-red-500 -rotate-45 -translate-x-1/2'></div>
				</div>
			</div>
			<main className='flex flex-col items-center gap-8'>
				<h1 className='text-4xl font-bold max-w-2xl text-center'>
					Transform your screen into an art gallery with curated wallpapers
				</h1>
				<button className='flex cursor-not-allowed items-center bg-black text-white px-4 py-2 rounded-md line-through'>
					Download the App
				</button>
				<p className='text-lg'>
					No need to download the app and pay $20+, just save them here.
				</p>
				{Object.entries(imgs).map(([id, collection]) => (
					<div key={id} className=''>
						<h2 className='text-2xl font-bold'>{id}</h2>
						<div className='flex gap-4 max-w-3xl overflow-scroll'>
							{Object.entries(collection).map(([key, url]) => (
								<div key={key}>
									<p>{key}</p>
									<Image
										className='h-auto w-auto'
										src={url}
										width={300}
										height={1000}
										alt='wallpaper'
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</main>
		</div>
	)
}
