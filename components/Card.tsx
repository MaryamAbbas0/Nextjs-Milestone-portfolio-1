
import Image from 'next/image';

interface proposType {
    title: string,
    desc: string,
    img: string,
    tags: string[],
}

const Card: React.FC<proposType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'>
      <div>
        <Image
          className='w-full h-[200px] object-cover'
          src={img}
          width={400}
          height={250}
          alt={title}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='tags' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
