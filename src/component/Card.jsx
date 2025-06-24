export function Card({ children, className, title, desc, href, ...prop }) {
	return (
		<>
			<a href={href} className="card bg-base-300/50 w-96 shadow-sm">
				<figure>
					<img src="/images/截屏2025-06-20 12.10.36.png" alt="Shoes" />
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
