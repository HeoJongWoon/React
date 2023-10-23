import Btns from '../btns/Btns';
import Info from '../info/Info';
import News from '../news/News';
import About from '../about/About';
// import Pics from '../pics/Pics';
import Visual from '../visual/Visual';
import './Main.scss';

function Main() {
	return (
		<main className='mainWrap'>
			<Visual />
			<News />
			{/* <Pics /> */}
			<About />
			<Info />
			<Btns />
		</main>
	);
}

export default Main;
