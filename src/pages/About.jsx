
import { skills } from "../constant";

function About() {
  return (
   <section className='max-container ml-10'>
    <h1 className="head-text font-semibold ml-5">
      Hello, I'm <span className='text-3xl font-semibold text-violet-600
      drop-shadow'>Gulshan</span>
    </h1>

     <div className='mt-2 ml-5 font-semibold text-green-600 text-xl flex-col gap-3 '>
      <p>Software Engineer based in India, specializing in
        technical education through hands-on learning and building
        application.
      </p>
     </div>
      <div >
     <table align ="center">
      <h1 className="font-semibold text-2xl text-amber-600 mt-10 ml-13 mb-5">My Skill</h1>
        <tr> 
            <td>
                <ul>
                    <li className="bg-fuchsia-900 text-white rounded-lg p-1 px-2 border-b-gray-500 mr-280 ml-10 mt-3 
                    hover:cursor-pointer hover:scale-90 transition-all 
                   duration-300 ease-in-out transform ">App Devlopment</li>
                    <li className="bg-fuchsia-900 text-white rounded-lg p-1 px-2 border-b-gray-500 mr-280 ml-10 mt-10 hover:scale-90 transition-all 
                   duration-300 ease-in-out transform
                    hover:cursor-pointer">web Devlopment</li>
                    <li className="bg-fuchsia-900 text-white rounded-lg p-1 px-2 border-b-gray-500 mr-280 ml-10 mt-10 hover:scale-90 transition-all 
                   duration-300 ease-in-out transform
                    hover:cursor-pointer">Photography</li>
                </ul>
            </td>
        </tr>
    </table>
    </div>

     <div className='py-8 mt-30 flex text-yellow-600 font-semibold text-2xl flex-col'>
      <h3 className='subhead-text  ml-5'>My Experiences</h3>
      <div className='mt-10 flex flex-wrap gap-12 '>
      {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'

                  
                />
              </div>
            </div>
          ))}
      </div>
     </div>
     
    </section>
  );
};

export default About;