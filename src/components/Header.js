import menuLinks from '../data/menu_links.json';

const Header = () => {
	return (
		<header id='intro'>
			<article className='fullheight'>
				<div className='hgroup'>
					<h1>Landon Hotel</h1>
					<h2>West London</h2>
					<p>
						<a href='#welcome'>
							<img
								src='https://landonhotel.com/images/misc/arrow.png'
								alt='down arrow'
							/>
						</a>
					</p>
				</div>
			</article>

			<nav id='nav'>
				<div className='navbar'>
					<div className='brand'>
						<a href='#welcome'>
							Landon <span>Hotel</span>
						</a>
					</div>
					<ul>
						{menuLinks.map((el, i) => {
							return (
								<li key={i}>
									<a
										className={`icon ${el.class}`}
										href={el.href}
									>
										<span>{el.text}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
