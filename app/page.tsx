import Image from 'next/image'
import { imgs } from './imgs'

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]'>
			<Image
				src='https://panels.art/images/Group-8187.svg'
				width={200}
				height={50}
				alt='logo'
			/>
			<main className='flex flex-col items-center gap-8'>
				<h1 className='text-4xl font-bold max-w-2xl text-center'>
					Transform your screen into an art gallery with curated wallpapers
				</h1>
				<button className='flex cursor-not-allowed items-center bg-black text-white px-4 py-2 rounded-md line-through'>
					<svg
						width='23'
						height='22'
						viewBox='0 0 23 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.9151 17.4493C15.0469 18.2909 14.0989 18.158 13.1864 17.7594C12.2207 17.3518 11.3348 17.3341 10.316 17.7594C9.04024 18.3086 8.36694 18.1492 7.60503 17.4493C3.28169 12.993 3.91956 6.20681 8.82762 5.95875C10.0236 6.02076 10.8564 6.61434 11.5563 6.66749C12.6017 6.45487 13.6028 5.84358 14.7191 5.92331C16.0568 6.02962 17.0668 6.56118 17.7312 7.51799C14.9671 9.17468 15.6227 12.8159 18.1565 13.8347C17.6515 15.1636 16.9959 16.4836 15.9062 17.4581L15.9151 17.4493ZM11.4677 5.90559C11.3348 3.92996 12.9383 2.29985 14.7811 2.14038C15.038 4.42608 12.708 6.12707 11.4677 5.90559Z'
							fill='white'
						></path>
					</svg>
					Download the App
				</button>
				<p>No need to download the app, just save them in your browser</p>
				{Object.entries(imgs).map(([id, collection]) => (
					<div key={id} className=''>
						<h2 className='text-2xl font-bold'>{id}</h2>
						<div className='flex gap-4 max-w-3xl overflow-scroll'>
							{Object.entries(collection).map(([key, url]) => (
								<div key={key}>
									<p>{key}</p>
									<Image src={url} width={300} height={100} alt='wallpaper' />
								</div>
							))}
						</div>
					</div>
				))}
			</main>
		</div>
	)
}
