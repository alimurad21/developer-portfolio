import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'NUSTrive',
        description: "Me and Muhammad Yameen built an udemy plus LMS website name it NUSTrive. I have developed API using Express, and MongoDB. Used OTP via mail for the authentication system.",
        tools: ['React/Next', 'Node','Express', 'MongoDB', 'Tailwind', 'Node Mailer','Material UI'],
        role: 'Full Stack Developer',
        code: 'myameen123/nustrive-website',
        demo: 'https://nustrive.vercel.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'MERN Shop',
        description: "I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['React', 'Material UI', 'Redux', 'Express', "MongoDB"],
        code: 'https://github.com/alimurad21/mernECommerce',
        demo: 'https://mern-ecommerce-frontend-gamma.vercel.app/',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'Hookah e-Commerce website',
        description: 'My Food Recipe is a web app built with React, Tailwind CSS, Node.js, Express, and MongoDB. Users can explore recipes, create collections, submit their own recipes, and interact with a responsive, user-friendly interface.',
        tools: ['React', 'Bootstrap', 'Express', 'MongoDB', 'JWT'],
        code: 'https://github.com/alimurad21/WSS',
        role: 'Full Stack Developer',
        demo: 'https://www.wholesale-smokes.com/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'HeadStart',
        description: "I developed a HeadStart, template for commercial consultant. As a front-end developer, I worked on creating the dashboard using React, Tailwind, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['React', 'Tailwind'],
        code: 'https://github.com/alimurad21/headStart',
        demo: 'https://headstart-dun.vercel.app/',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Apna Buzz',
        description: "This is a ReactJS based startup and small business website template. It was designed using TailwindCSS and React. The Contact form was made functional using EmailJS, to learn how to use EmailJS.",
        tools: ['React', 'Tailwind'],
        code: 'https://github.com/alimurad21/apna-buzz',
        demo: 'https://apna-buzz.vercel.app/',
        image: ayla,
        role: 'Frontend Developer',
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },