import React from 'react';
import Heading from './Heading';

const Skills = () => {
  return (
    <div id="skills" className='container pt-32' data-aos="zoom-in-down">
      {/* Heading Section */}
      <div className='text-center mb-8 text-[#00cfff]'>
        <Heading title='My Skills' />
      </div>

      {/* Skills Content */}
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        {/* Skills Description */}
        <div>
          <h2 className='text-4xl md:text-5xl text-[#00cfff]'>Technology I work with</h2>
          <br />
          <p className='text-gray-500 pt-2'>
            Maryam&apos;s skill set includes a solid foundation in HTML5, CSS, 
            and Tailwind CSS for web development, along with a proficient 
            understanding of TypeScript and JavaScript to build dynamic, 
            interactive websites and applications. She is also knowledgeable 
            in digital marketing, which enhances her ability to create user-focused,
            marketable products. With a strong background in artificial intelligence 
            and information technology, Maryam brings a unique combination of 
            technical expertise and strategic insight to her projects, making 
            her well-equipped to tackle various challenges in 
            modern tech and digital spaces.
          </p>
        </div>

        {/* Skills List */}
        <div>
          {/* Grid Layout for Skills */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-accent text-3xl sm:text-4xl'>
            {/* Skill Category 1 */}
            <div className='space-y-4 text-[#00cfff]'>
              <h3 className='font-semibold'>Frontend</h3>
              <ul>
                <li>CSS</li>
                <li>HTML 5</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className='space-y-4 text-[#00cfff]'>
              <h3 className='font-semibold'>Backend</h3>
              <ul>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className='space-y-4 text-[#00cfff]'>
              <h3 className='font-semibold'>Other Skills</h3>
              <ul>
                <li>Digital Marketing</li>
                <li>AI & IT Knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
