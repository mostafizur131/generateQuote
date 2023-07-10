

const Header = (props) => {
    return (
    <header className="p-7 bg-gray-800 text-gray-100">
		<div className="container flex justify-between mx-auto">
			<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="text-2xl p-2">
				{props.title}
			</a>
			<button type="button" className="font-semibold rounded bg-violet-400 text-gray-900 px-6" >Log in</button>
		
		</div>
	</header>
    );
};

export default Header;