import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<div className="flex items-center gap-2">
				<input
					onChange={toggleTheme}
					id="switch-link"
					type="checkbox"
					className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer   disabled:cursor-not-allowed dark:after:bg-white checked:before:bg-stone-800 checked:after:border-stone-800"
				/>
				<label
					htmlFor="switch-link"
					className="rounded-full bg-gray-300 w-8 h-8 p-2 flex items-center justify-center"
				>
					{theme === 'light' ? (
						<i class="fa-solid fa-moon text-lg"></i>
					) : (
						<i class="fa-solid fa-sun text-lg"></i>
					)}
				</label>
			</div>
			<button onClick={toggleTheme}>Cambiar Tema</button>;
		</>
	);
};

export default ThemeToggle;
