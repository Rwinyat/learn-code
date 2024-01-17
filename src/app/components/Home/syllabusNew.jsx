import HtmlIcon from '../icon/html5.png'
import CssIcon from '../icon/css3.png'
import javascriptIcon from '../icon/javascript.png'
import nextjsIcon from '../icon/nextjs.png'
import reactIcon from '../icon/react.png'
import nodeIcon from '../icon/nodeIcon.png'

import Image from 'next/image';

const LessonCard = ({title}) => {
  return (
    {lessons.map((lesson) => (
        
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
      <Image src={lesson.image} alt={lesson.title} className="w-10 h-10" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className='p-2'>{lesson.description}</p>
        {lesson.completed ? (
          <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            completed
          </span>
        ) : (
          <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            Not completed
          </span>
        )}
      </div>  
    </div>
    ))}
  );
};

export default function Syllabus() {
  return (
    <div className="container mx-auto px-4 ">
      <h1 className=" m-5 text-center text-amber-500 lesson p-5">Lesson</h1>
      <LessonsList lessons={lessons}  />
    </div>
  );

};

const lessons = [
  {
    title: 'Html',
    image: HtmlIcon,
    description:"The HyperText Markup Language or HTML is the standard markup language." ,
    completed: true
  },
  {
    title: 'Css',
    image: CssIcon,
    description:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document." ,
    completed: false
  },
  {
    title: 'Javascript',
    image: javascriptIcon,
    description: "The HyperText Markup Language or HTML is the standard markup language.",
    completed: true
  },
  {
      title: 'Next.js',
      image: nextjsIcon,
      description:"The HyperText Markup Language or HTML is the standard markup language" ,
      completed: true
  }
  ,
  {
      title: 'React.js',
      image: reactIcon,
      description: "The HyperText Markup Language or HTML is the standard markup language",
      completed: true
  },{
    title: 'Node.js',
    image: nodeIcon,
    description: "The HyperText Markup Language or HTML is the standard markup language",
    completed:false
  }
];


