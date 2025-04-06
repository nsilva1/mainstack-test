import { AppBarImages } from '../lib/constants';

const AppBar = () => {
  return (
    <div className='fixed top-1/2 left-4 -translate-y-1/2 z-40 p-4 bg-white shadow-lg rounded-full'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        {AppBarImages.map((image, index) => (
          <img
            key={index}
            src={image.imageURL}
            alt={image.alt}
            className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full'
          />
        ))}
      </div>
    </div>
  );
};

export { AppBar };
