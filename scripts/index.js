const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function filterCourses(courses) {
	const container = document.getElementById('course-container');
	const messages = document.getElementById('messages');
	container.innerHTML = "";
	messages.innerHTML = "";

	let credits = 0;
	let courseCount = 0;

	courses.forEach(course => {
		const card = document.createElement('div');
		card.classList.add('course-card');

		if (!course.completed) {
			card.style.borderColor = 'red';
			card.style.borderWidth = '2px';
			card.style.borderStyle = 'solid';
		}

		const subject = document.createElement('p');
		subject.textContent = `${course.subject}`;

		const number = document.createElement('p');
		number.textContent = `${course.number}`;

		const complete = document.createElement('p');
		complete.textContent = course.completed ? '✔️' : '';

		credits += course.credits;
		courseCount += 1;

		card.appendChild(complete);
		card.appendChild(subject);
		card.appendChild(number);

		container.appendChild(card);
		
	});

	const creditAmount = document.createElement('p');
	creditAmount.textContent = `Number of credits: ${credits}`;
	const totalCourses = document.createElement('p');
	totalCourses.textContent = `Number of classes: ${courseCount}`;
	messages.appendChild(creditAmount);
	messages.appendChild(totalCourses);
}

filterCourses(courses);

const allCourses = document.querySelector('#show-all');
const wddCourses = document.querySelector('#show-wdd');
const cseCourses = document.querySelector('#show-cse');

allCourses.addEventListener('click', () => {
	filterCourses(courses);
});

wddCourses.addEventListener('click', () => {
	filterCourses(courses.filter(course => course.subject == 'WDD'))
})

cseCourses.addEventListener('click', () => {
	filterCourses(courses.filter(course => course.subject == 'CSE'))
})