export function Card({ children, className, imgSrc, title, desc, href, ...prop }) {
	return (
		<>
			<a href={href} className="card bg-base-300/50 w-96 shadow-sm">
				<figure>
					<img src={imgSrc} alt="Shoes" className="w-full h-48 object-cover" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{desc}</p>
				</div>
			</a>
			{children}
		</>
	);
}
