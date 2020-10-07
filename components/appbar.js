import { app_name } from 'lib/variables'

import { Menu, User } from 'react-feather';

export default function Appbar({ title = app_name }) {
	return (
		<>
			<nav className="appbar">
				<div className='icon'><Menu size={20}/></div>
				<div className="title">{title}</div>
				<div className='icon'><User size={20}/></div>
			</nav>
			<style jsx>{`
				nav {
					--label: #ffffffff;
					--systemBackground: #000000ff;
				}

				nav {
					background-color: var(--systemBackground);
					color: var(--label);
					display: flex;
					padding: var(--padding);
					width: 100%;
          max-width: auto;
          height: 44px;
				}

				.title {
					flex: 1;
					text-align: center;
					margin: auto;
					font-size: 18px;
				}

				.icon {
					margin: auto 5px;
					height: 20px;
					width: 20px;
				}
			`}</style>
		</>
	)
}