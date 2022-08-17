/* eslint-disable react/jsx-key */
import VideoComp from '../components/videoPlayer/video';
import Link from 'next/link';

const VideoIntro = () => {
  // const videoSrc = '/video/TAC_AFRICA_MAIN_COMP.mp4';1656000831010.mp4
  const videoSrc = '/video/1656000831010.mp4';
  // const videoThumbnail = '/video/TacPlaceholder.png';

  return (

    <div className="w-10/12 mx-auto mt-20">
      <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl text-center mb-12">
        Latest
        <span className="text-primary font-bold text-6xl ">News</span>
      </h2>

      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden ">
          <VideoComp videoSrc={videoSrc} />
        </div>
        <div className="lg:w-5/12 mx-auto lg:my-auto">
          <div>
            <h2 className="text-sweet_blue font-bold text-xl my-3">
              {/* Institute For Remotely Piloted Aircraft Systems (IRPAS) */}
            </h2>
            <p className="text-xs  lg:text-base 2xl:text-xl">
              IDES2022 -  Here are some of
              the highlights from INTERPOL Drone Expert Summit,
              organized by UAS Norway in great partnership with
              INTERPOL and the Norwegian Police. 350 participants from
              law enforcement 👮 & public safety, from 50 nations🌐
              gathered in Oslo for three days this week
            </p>
          </div>

          {/* <div>
            <Link href={'/newpage'}>
              <a>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Read More
                </button>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
