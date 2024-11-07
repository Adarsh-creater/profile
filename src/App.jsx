
import './App.css'
import person from './assets/person.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import project from './assets/busy.png'


function App() {

  return (
    <div className=' relative w-full'>
      <div className='w-[800px]  max-w-[95%] mx-auto my-8 p-6 space-y-4'>
        <div className='bg-slate-50 rounded-2xl p-6 border-2 border-black'>
          <div className='flex flex-row justify-between items-center p-3 flex-wrap'>
            <div className='flex flex-row items-center '>
              <img src={person} alt="" className='rounded-full border-2 border-black' width='150px' />
              <div className='ml-5 '>
                <p className='font-bold text-2xl'>name</p>
                <p className='text-gray-600 text-l'>name@123</p>
              </div>
            </div>
            <div className='border-2 border-black rounded-[32px] px-4 py-3 hover:bg-black group'>
              <a href="" className=' group-hover:text-white group-hover:font-bold'>Download CV</a>
            </div>

          </div>

          <div >
            <p className='font-bold text-[20px]  mt-6 pl-4'>Contact</p>
            <div className='flex flex-row justify-between items-center my-5 px-4 flex-wrap'>

              <div className='space-y-4'>

                <p className='text-lg'>Gmail : <span> example@gmail.com</span></p>
                <p className='text-lg'>Phone no : <span> 0634251789</span></p>
              </div>

              <ul className='flex space-x-4 mt-4'>
                <li className=' cursor-pointer hover:text-blue-500 transition-colors duration-300'><FontAwesomeIcon icon={faLinkedin} className='h-8' /></li>
                <li className=' cursor-pointer hover:text-yellow-500 transition-colors duration-300'><FontAwesomeIcon icon={faEnvelope} className='h-8' /></li>
                <li className=' cursor-pointer hover:text-pink-500 transition-colors duration-300' ><FontAwesomeIcon icon={faSquareInstagram} className='h-8' /></li>
              </ul>
            </div>
          </div>

          <div className='space-y-4 p-4'>
            <h3 className='text-lg font-bold'>Bio</h3>
            <div className='w-full h-[2px] bg-black '></div>
            <p className='bg-white rounded-lg p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, eum eveniet modi amet veritatis tenetur totam voluptatum repellendus sapiente unde enim, est fugiat.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, architecto quis. Deserunt, beatae quam totam quo ex asperiores aperiam cum minus laborum ea.</p>
          </div>

        </div>

        <div className='bg-slate-50 rounded-2xl p-8 border-2 border-black space-y-6'>

          <div className='space-y-4'>

            <h3 className='text-[20px] font-bold '>SKILL</h3>
            <div className='w-full h-[2px] bg-black '></div>

            <ul className='flex flex-row flex-wrap gap-x-8 gap-y-5 bg-white rounded-lg p-4'>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold'>React Js</li>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold'>Python</li>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold'>Tailwind CSS</li>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold'>JAVA</li>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold'>Postman</li>
              <li className='border-2 border-black bg-slate-300 px-4 py-2 rounded-[32px] font-bold text-lg'>+</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='text-[20px] font-bold '>Experince</h2>

            <div className='w-full h-[2px] bg-black '></div>

            <div className='space-y-7  bg-white rounded-lg p-4'>

              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='w-9 h-9 rounded-[50%] bg-slate-600'></div>
                <p> Company name </p> |
                <p>job position </p> |
                <p> years of experince</p>
              </div>

              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='w-9 h-9 rounded-[50%] bg-slate-600'></div>
                <p> Company name </p> |
                <p>job position </p> |
                <p> years of experince</p>
              </div>

              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='w-9 h-9 rounded-[50%] bg-slate-600'></div>
                <p> Company name </p> |
                <p>job position </p> |
                <p> years of experince</p>
              </div>

              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='w-9 h-9 rounded-[50%] bg-slate-600'></div>
                <p> Company name </p> |
                <p>job position </p> |
                <p> years of experince</p>
              </div>
            </div>
          </div>

          <div className='space-y-4 '>
            <h3 className='text-[20px] font-bold '>Certification / Award</h3>

            <div className='w-full h-[2px] bg-black '></div>

            <ul className='pt-4 space-y-8 bg-white rounded-lg p-4'>

              <li className='space-y-4'>
                <div className='text-lg flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faAward} style={{ color: "#FFD43B", }} className='h-8' /> <p> Orical acadmic datafoundation
                  certification. </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>


              <li className='space-y-4'>
                <div className='text-lg flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD43B", }} className='h-7' /> <p> 3rd prize in hackathon 2025 </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>


              <li className='space-y-4'>
                <div className='text-lg flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faAward} style={{ color: "#FFD43B", }} className='h-8' /> <p> Orical acadmic datafoundation
                  certification. </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>

            </ul>
          </div>

        </div>

        <div className='bg-slate-50 rounded-2xl p-8 border-2 border-black space-y-4'>
          <h3 className='text-[20px] font-bold '>PROJECTS</h3>

          <div className='border-2 border-black w-[95%] mx-auto rounded-xl flex justify-between items-center py-2 px-4 '>
            <div className=' border-r-2 border-black w-[25%] pr-8'>
              <img src={project} alt="" className='w-[150px]' />
            </div>

            <div className='w-[70%] flex flex-col space-y-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat in possimus quibusdam commodi velit vel
                nam neque maiores ab quasi minima aliquam optio ducimus, fuga dolorum illum cumque adipisci
                voluptatum consequatur consequuntur
              </p>

              <div className=' gap-x-2 flex justify-end items-center '>
                <button className='border-2 border-black rounded-[32px] px-3 py-1 hover:bg-black group'><a href="" className=' group-hover:text-white '>GIT HUB</a></button>
                <button className='border-2 border-black rounded-[32px] px-3 py-1 hover:bg-black group'><a href="" className=' group-hover:text-white '>Live Demo</a></button>
              </div>
            </div>


          </div>

          <div className='border-dashed w-[90%] mx-auto h-[130px] border-2 border-gray-500 rounded-xl flex justify-center items-center bg-slate-300' >
            <div className='text-[18px] rounded-[32px] text-gray-400 border-black border-[1px] font-bold px-3 py-1 text-center bg-white cursor-pointer'><span className='text-[25px]'>+</span>Add Project</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
