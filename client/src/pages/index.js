import MainFeed from '../components/content/mainfeed';
import MainCta from '../components/content/maincta';

export default function Home(props) {
  props.handleTitle('Home');
  // console.log(stories);

  return (
    <main className='ts-mw-1280 ts-mt-80'>
      <MainCta />
      <MainFeed />
      {/* Testing git */}
    </main>
  );
}
//for (let i = 0; i<arr.length; i++){setTimeout(function(){console.log(i, arr, arr[i]);}),2000};
