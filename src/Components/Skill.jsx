import { faAws, faDocker, faGithub, faGolang, faLaravel, faMicrosoft, faNodeJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpLong, faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('skill');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const experienceItem = [
        { id: 1, year: 'Aug 2024 - Present', company: 'PT. NOZYRA Global Solusindo', position: 'IT Technical Consultant' },
        { id: 2, year: 'Jul 2023 - Aug 2024', company: 'K-Style Hub .Inc', position: 'Senior Backend Developer' },
        { id: 3, year: 'Apr 2020 - Mei 2023', company: 'PT. NOZYRA Global Solusindo', position: 'Fullstack Developer' },
        { id: 4, year: 'Sep 2019 - Mar 2020', company: 'CV. Webby Digital Mediatama', position: 'Frontend Developer' },
    ]

    const skillItem = [
        { id: 1, name: 'Golang', icon: faGolang },
        { id: 2, name: 'React', icon: faReact },
        { id: 3, name: 'PHP', icon: faPhp },
        { id: 4, name: 'Laravel', icon: faLaravel },
        { id: 5, name: 'Python', icon: faPython },
        { id: 6, name: 'SQL & NoSQL', icon: faDatabase },
        { id: 7, name: 'Azure, AWS, GCP', icon: faCloud },
        { id: 8, name: 'Docker', icon: faDocker },
        { id: 9, name: 'Git', icon: faGithub }
    ]

    const educationItem = [
        {
            id: 1,
            year: '2015 - 2019',
            school: 'Riau University',
            major: 'Information System',
            degree: 'Bachelor Degree'
        },]

    const certificationItem = [
        { id: 1, name: "Certificate of Completion:  Pemrograman Go-lang : Pemula Sampai Mahir - Programmer Zaman Now", publisher: "Udemi", startDate: "Feb 2025", endDate: null, link: " https://www.udemy.com/certificate/UC-af9057b7-0e73-4e91-8858-ab721393cb9f/", credential: "UC-af9057b7-0e73-4e91-8858-ab721393cb9f" },
        { id: 2, name: "Microsoft 365 Certified: Endpoint Administrator Associate", publisher: "Microsoft", startDate: "Nov 2024", endDate: "Nov 2025", link: "https://learn.microsoft.com/api/credentials/share/en-us/AriaShabry-1850/E6E9B14C9B410EAC?sharingId", credential: "E6E9B14C9B410EAC" },
        { id: 3, name: "Microsoft Certified: Azure Developer Associate", publisher: "Microsoft", startDate: "Aug 2021", endDate: "Aug 2023", link: "https://www.credly.com/badges/9bacc0c1-76f5-4afc-a2e4-571253637bc5?source=linked_in_profile", credential: "H923-1229" },
        { id: 4, name: "Microsoft Certified Trainer (MCT)", publisher: "Microsoft", startDate: "Aug 2021", endDate: "Aug 2023", link: "https://www.credly.com/badges/9bacc0c1-76f5-4afc-a2e4-571253637bc5?source=linked_in_profile", credential: "H933-6850" },
        { id: 5, name: "Certificate Of Competency in Software Development", publisher: "Badan Nasional Sertifikasi Profesi", startDate: "Sep 2019", endDate: "Sep 2022", link: null, credential: "62010251400033612019" },
    ]

    // Tab data structure
    const tabs = [
        { id: 'skill', label: 'Skills' },
        { id: 'experince', label: 'Experience' },
        { id: 'education', label: 'Educations' },
        { id: 'certifications', label: 'Certfications' }
    ];

    return (
        <section className="bg-white dark:bg-gray-900" id='skills'>
            <div className="container py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 h-full flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    <div className="p-4 text-left h-full flex flex-col justify-center">
                        <div>
                            <h2 className="text-8xl mb-6 pt-8 text-black dark:text-white h2-title">
                                My Expert areas
                            </h2>
                            <p className="text-lg text-black dark:text-white mb-8">You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.</p>
                            <p className="text-lg text-black dark:text-white">
                                You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
                        </div>
                    </div>
                    <div className='p-4 text-left h-full flex flex-col justify-top'>
                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                                {tabs.map((tab) => (
                                    <li className="me-2" role="presentation" key={tab.id}>
                                        <button
                                            className={`inline-block px-8 py-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                                ? 'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                                                : 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                                                }`}
                                            onClick={() => handleTabClick(tab.id)}
                                            role="tab"
                                            aria-selected={activeTab === tab.id}
                                        >
                                            {tab.label} <FontAwesomeIcon icon={faArrowUpLong} className="ms-2 rotate-45" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className={`${activeTab === 'skill' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
                                <div className="grid grid-cols-3 gap-6">
                                    {skillItem.map((item) => (
                                        <div key={item.id} className="flex flex-col items-center justify-center p-2">
                                            <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                                <FontAwesomeIcon icon={item.icon} className="text-5xl text-gray-900 dark:text-white" />
                                            </div>
                                            <p className="text-base text-black dark:text-white mt-2 font-semibold">{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${activeTab === 'experince' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
                                <div className="grid grid-cols-2 gap-6">
                                    {experienceItem.map((item) => (
                                        <div key={item.id} className="flex flex-col items-start justify-center p-2">
                                            <p>{item.year}</p>
                                            <p>{item.company}</p>
                                            <p>{item.position}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${activeTab === 'education' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
                                <div className="grid grid-cols-1">
                                    {educationItem.map((item) => (
                                        <div key={item.id} className="flex flex-col items-start justify-center p-2">
                                            <p>{item.year}</p>
                                            <p>{item.major} at {item.school}</p>
                                            <p>{item.degree}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${activeTab === 'certifications' ? 'block' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}>
                                <div className=" grid grid-cols-1">

                                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                        {certificationItem.map((item) => (
                                            <li class="py-3 sm:py-4" key={item.id}>
                                                <div class="flex items-center">
                                                    <div class="flex-1 min-w-0 ms-4">

                                                        {item.link ? <a class="text-sm font-medium text-gray-900 truncate dark:text-white hover:text-purple-700 hover:underline  dark:hover:text-yellow-600" href={item.link} target='_blank'>
                                                            {item.name.length > 56 ? `${item.name.substring(0, 56)}...` : item.name}
                                                        </a> : <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            {item.name.length > 56 ? `${item.name.substring(0, 56)}...` : item.name}
                                                        </p>}



                                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            {item.publisher}
                                                        </p><p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            ID: {item.credential}
                                                        </p>
                                                    </div>
                                                    <div class="flex items-start justify-start text-gray-900 dark:text-white">

                                                        <p className='text-sm'><small>{item.startDate} - {item.endDate ? item.endDate : ''}</small></p>

                                                    </div>
                                                </div>
                                            </li>

                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;