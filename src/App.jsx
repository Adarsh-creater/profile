
import './App.css'
import person from './assets/person.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import sticker from './assets/busy.png'
import { useState } from 'react'



function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('example@.com');
  const [states, setStates] = useState('name@123');
  const [phone, setPhone] = useState('0634251789');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, architecto quis. Deserunt, beatae quam totam quo ex asperiores aperiam cum minus laborum ea.');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // State to store project details and to track if the form is visible
  const [projects, setProjects] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveDemoLink, setLiveDemoLink] = useState('');

  // Handle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Handle form submission to create a new project card
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      description: projectDescription,
      githubLink,
      liveDemoLink,
    };

    setProjects([...projects, newProject]);

    // Reset form values and hide form
    setProjectDescription('');
    setGithubLink('');
    setLiveDemoLink('');
    setIsFormVisible(false);
  };

  const [experience, setExperience] = useState([

  ]);

  // State for input values
  const [companyName, setCompanyName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  // Function to handle adding new experience
  const handleAddExperience = () => {
    if (companyName && jobPosition && yearsOfExperience) {
      const newExperience = { company: companyName, position: jobPosition, years: yearsOfExperience };
      setExperience([newExperience, ...experience]); // Add new experience at the top
      setCompanyName(''); // Reset input fields
      setJobPosition('');
      setYearsOfExperience('');
    }
  };

  const [skills, setSkills] = useState(['React Js', 'Python', 'Tailwind CSS', 'JAVA', 'Postman']);
  const [showPopup, setShowPopup] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
      setShowPopup(false);
    }
  };

  return (
    <div className=' relative w-full'>
      <div className='w-[800px]  max-w-[95%] mx-auto font-gill my-8 p-6 space-y-4'>
        <div className='bg-slate-50 rounded-2xl p-6 shadow-lg'>
          <div className='flex flex-row justify-between items-center p-3 flex-wrap'>
            <div className='flex flex-row items-center'>
              <img src={person} alt="" className='rounded-full shadow-lg' width='150px' />
              <div className='ml-5'>
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='font-bold text-2xl border-b-2 border-gray-300'
                  />
                ) : (
                  <p className='font-bold text-2xl'>{name}</p>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    value={states}
                    onChange={(e) => setStates(e.target.value)}
                    className='text-gray-600'
                  />
                ) : (
                  <p className='text-gray-600'>{states}</p>
                )}
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1KjGEMEw-NiHX4Qh8t0p6OVUW_GAKNB9A/view?usp=drive_link"
              target="_blank"
              className='border-blue-600 border-2 font-bold text-blue-600 rounded-[32px] px-4 py-3 hover:bg-blue-600 group hover:text-white'
            >
              Download CV
            </a>
          </div>
          <button
            onClick={handleEditClick}
            className='absolute top-[50px] right-[400px] bg-blue-500 text-white p-2 rounded-full'
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>


          <div>
            <p className='font-bold text-[20px] mt-6 pl-4'>Contact</p>
            <div className='flex flex-row justify-between items-center my-5 px-4 flex-wrap'>
              <div className='space-y-4'>
                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='text-sm'
                  />
                ) : (
                  <p className='text-sm'>Gmail : <span>{email}</span></p>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='text-sm'
                  />
                ) : (
                  <p className='text-sm'>Phone no : <span>{phone}</span></p>
                )}
              </div>

              <ul className='flex space-x-4 mt-4'>
                <li className='cursor-pointer hover:text-blue-500 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faLinkedin} className='h-8' />
                </li>
                <li className='cursor-pointer hover:text-yellow-500 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faEnvelope} className='h-8' />
                </li>
                <li className='cursor-pointer hover:text-pink-500 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faSquareInstagram} className='h-8' />
                </li>
              </ul>
            </div>
          </div>

          <div className='space-y-4 p-4'>
            <h3 className='text-lg font-bold'>Bio</h3>
            <div className='w-full h-[2px] bg-black'></div>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className='bg-white rounded-lg p-4 text-sm w-full'
              />
            ) : (
              <p className='bg-white rounded-lg p-4 text-sm'>{bio}</p>
            )}
          </div>
        </div>

        <div className='bg-slate-50 rounded-2xl p-8  shadow-lg space-y-6'>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">SKILL</h3>
            <div className="w-full h-[2px] bg-black"></div>

            <ul className="flex flex-row flex-wrap gap-x-8 gap-y-5 bg-white rounded-lg p-4">
              {skills.map((skill, index) => (
                <li key={index} className="shadow-lg bg-blue-600 text-white px-4 py-2 rounded-[32px] font-bold">
                  {skill}
                </li>
              ))}
              <li
                className="shadow-lg bg-blue-600 text-white px-4 py-2 rounded-[32px] font-bold text-sm cursor-pointer"
                onClick={() => setShowPopup(true)}
              >
                +
              </li>
            </ul>

            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-[300px]">
                  <h4 className="text-lg font-bold">Add New Skill</h4>
                  <input
                    type="text"
                    placeholder="Enter skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      className="bg-gray-300 text-black px-4 py-2 rounded"
                      onClick={() => setShowPopup(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={handleAddSkill}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='space-y-4'>
            <h2 className='text-[20px] font-bold '>Experince</h2>

            <div className='w-full h-[2px] bg-black '></div>

            <div className='space-y-7 bg-white rounded-lg p-4'>
              {/* Displaying existing experience */}
              {experience.map((exp, index) => (
                <div key={index} className='flex flex-row justify-start items-center gap-4'>
                  <div className='w-7 h-7 rounded-[50%] bg-blue-600'></div>
                  <p>{exp.company}</p> | <p>{exp.position}</p> | <p>{exp.years}</p>
                </div>
              ))}

              {/* Input fields to add new experience */}
              <div className='flex flex-row justify-start items-center gap-2'>
                <input
                  type='text'
                  placeholder='Company name'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className='border rounded-lg p-1'
                />
                <input
                  type='text'
                  placeholder='Job position'
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                  className='border rounded-lg p-1'
                />
                <input
                  type='text'
                  placeholder='Years of experience'
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                  className='border rounded-lg p-1'
                />
              </div>
              <button
                onClick={handleAddExperience}
                className='bg-blue-600 text-white px-4 py-2 rounded-lg'
              >
                Add Experience
              </button>
            </div>
          </div>

          <div className='space-y-4 '>
            <h3 className='text-[20px] font-bold '>Certification / Award</h3>

            <div className='w-full h-[2px] bg-black '></div>

            <ul className='pt-4 space-y-8 bg-white rounded-lg p-4'>

              <li className='space-y-4'>
                <div className='text-sm flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faAward} style={{ color: "#FFD43B", }} className='h-8' /> <p> Orical acadmic datafoundation
                  certification. </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>


              <li className='space-y-4'>
                <div className='text-sm flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD43B", }} className='h-7' /> <p> 3rd prize in hackathon 2025 </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>


              <li className='space-y-4'>
                <div className='text-sm flex flex-row justify-start items-center gap-x-4'><FontAwesomeIcon icon={faAward} style={{ color: "#FFD43B", }} className='h-8' /> <p> Orical acadmic datafoundation
                  certification. </p></div>
                <div className='bg-gray-300 w-[80%] mx-auto h-[2px]'></div>
              </li>

            </ul>
          </div>

        </div>

        <div className='bg-slate-50 rounded-2xl p-8 shadow-lg space-y-4'>
          <h3 className='text-[20px] font-bold '>PROJECTS</h3>

          {/* Render existing project cards */}
          {projects.map((project, index) => (
            <div key={index} className='shadow-lg w-[95%] mx-auto rounded-xl flex justify-between items-center py-2 px-4'>
              <div className='w-[25%] pr-8'>
                <img src={sticker} alt="" className='w-[150px]' />
              </div>

              <div className='w-[70%] flex flex-col text-sm space-y-2'>
                <p>{project.description}</p>

                <div className='gap-x-2 flex justify-end items-center'>
                  <button className='rounded-[32px] px-3 py-1 hover:bg-blue-600 group'>
                    <a href={project.githubLink} className='group-hover:text-white'>
                      GIT HUB
                    </a>
                  </button>
                  <button className='rounded-[32px] px-3 py-1 hover:bg-blue-600 group'>
                    <a href={project.liveDemoLink} className='group-hover:text-white'>
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add Project Section */}
          <div className='border-2 border-dashed w-[90%] mx-auto h-[130px] border-gray-500 rounded-xl flex justify-center items-center bg-slate-300'>
            <div
              onClick={toggleFormVisibility}
              className='text-[18px] rounded-[32px] text-gray-400 border-[2px] font-bold px-3 py-1 text-center bg-white cursor-pointer'
            >
              <span className='text-[25px]'>+</span>Add Project
            </div>
          </div>

          {/* Form to add new project */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder='Enter project description'
                className='w-full p-2 border border-gray-300 rounded-lg'
              ></textarea>

              <input
                type='url'
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder='Enter GitHub link'
                className='w-full p-2 border border-gray-300 rounded-lg'
              />

              <input
                type='url'
                value={liveDemoLink}
                onChange={(e) => setLiveDemoLink(e.target.value)}
                placeholder='Enter Live Demo link'
                className='w-full p-2 border border-gray-300 rounded-lg'
              />

              <button type='submit' className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg'>
                Add Project
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
