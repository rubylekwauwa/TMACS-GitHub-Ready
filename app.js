mapboxgl.accessToken = "pk.eyJ1IjoicnVieWxla3dhdXdhIiwiYSI6ImNtcTE3bHFoMzBlOTYyc3B2eXExaXd2MnUifQ.JujVnc0l3dJr-gwtNlr3nQ";

const TMACS_BOOKING_LINK =
  "https://outlook.office.com/book/TMACS11SummerMentorship@yale.edu/?ismsaljsauthenabled";

const mentors = [
  {
    name: "Arjune Rama, MD",
    city: "Madison, WI",
    coords: [-89.4012, 43.0731],
    specialties: ["Adult psychiatry", "Private practice", "Psychodynamic psychotherapy"],
    focusAreas: ["Career transitions", "Work-life integration", "Private practice"],
    shortBlurb: "Psychiatrist and psychoanalytic candidate in private practice with a focus on psychodynamic psychotherapy and sustainable careers.",
    fullBio: "I am a psychiatrist and psychoanalytic candidate in private practice in Madison, WI. Clinically, I do mainly psychodynamic psychotherapy, but I also prescribe medications for most of my patients. I am interested in mentoring the next generation of psychiatrists to be psychoanalytic in all aspects of their clinical work and helping psychodynamically oriented psychiatrists create satisfying careers while avoiding burnout.",
    availability: "Available July and August, with some vacation dates pending.",
    image: "https://images.squarespace-cdn.com/content/v1/57ddfe952e69cf9a7ae31e86/1564689937700-VXDHF24V1TEZMU324JA0/pink+sweater.jpg?format=2500w",
    link: ""
  },
  {
    name: "Uche Aneni, MD",
    city: "New Haven, CT",
    coords: [-72.9279, 41.3083],
    specialties: ["Child and adolescent psychiatry", "Adult psychiatry"],
    focusAreas: ["Identity/lived experience", "Family life/parenting as a psychiatrist", "Academia/research", "Academic medicine", "Work-life integration"],
    shortBlurb: "Academic psychiatrist and researcher interested in mentorship around research, family life, and navigating academia.",
    fullBio: "I was a new mother as a child fellow and had to navigate what came next after fellowship while balancing family life and work. I am Black and of Nigerian origin. I navigated adjusting to the medical system and life in America after completing medical school in Nigeria. I practice the Christian faith. I am currently in academia combining clinical work and research.",
    availability: "Available in Connecticut during the summer.",
    image: "https://lirp.cdn-website.com/8130e6b2/import/clib/fhchc_org/dms3rep/multi/opt/Kammarauche-Asuzu-975x1218-1920w.jpeg",
    link: ""
  },

{
    name: "Gwendolyn Lopez-Cohen, MD",
    city: "Westport, CT",
    coords: [-73.3579, 41.1415],
    specialties: ["Child and adolescent psychiatry", "Adult psychiatry", "Private practice"],
    focusAreas: ["Identity/lived experience", "Family life/parenting as a psychiatrist", "Private practice", "Career transitions", "Academic medicine", "Work-life integration"],
    careerPaths: ["Academic medicine", "Private practice", "Forensic", "Community", "Education"],
    keywords: ["Latina", "mother", "mother of six", "parenthood", "parenting", "non-traditional path", "educator", "elementary education", "medical school", "residency", "fellowship", "child psychiatry", "Yale Child Study Center", "forensic", "school-based", "community", "private practice", "Bob King", "Fred Volkmar", "Westport"],
    shortBlurb: "Child and adolescent psychiatrist, Yale faculty member, educator, and mother of six with experience in academic medicine, private practice, school-based, community, and forensic settings.",
    fullBio: "I am a child and adolescent psychiatrist and Assistant Clinical Professor at the Yale Child Study Center, based in Westport, Connecticut. My path to medicine was anything but linear: I began my career as an educator, earning a master's degree in elementary education before returning to medical school. I am fortunate to be the mother of six children, with my eldest born during medical school. I would be happy to share my experience navigating residency and fellowship as a Latina woman and mother, experiences that shape everything about how I show up for trainees today. I come to mentoring out of deep gratitude. I was fortunate to train alongside extraordinary clinicians and scholars, including Dr. Bob King and Dr. Fred Volkmar, whose generosity, rigor, and investment in the next generation left a lasting mark on me. Paying that forward is both a privilege and an obligation I take seriously. In addition to my academic appointment, I maintain a private practice and have worked across school-based, community, and forensic settings. I am especially interested in mentoring trainees considering child and adolescent psychiatry, navigating non-traditional paths to medicine, or balancing parenthood during training. I will be in Westport, Connecticut for the majority of the summer and welcome connections across time zones.",
    availability: "Most Monday mornings 9:00–11:00 AM; most Tuesdays 4:00–6:00 PM; most Thursday mornings 9:00–11:00 AM. Out of office August 1–12.",
    image: "https://westportpsychiatry.com/wp-content/uploads/2013/05/Gwen-Lopez-Cohen-MD-1024x1012.jpg",
    link: "https://westportpsychiatry.com/"
  },


  {
    name: "Guillermo Valdes, MD",
    city: "New York, NY",
    coords: [-74.0060, 40.7128],
    specialties: ["Child and adolescent psychiatry", "Adult psychiatry", "Private practice", "Psychodynamic psychotherapy"],
    focusAreas: ["Private practice", "Career transitions", "Identity/lived experience", "Academic medicine", "Culturally responsive care"],
    careerPaths: ["Private practice", "Academic medicine", "Psychotherapy", "Bilingual psychiatric practice"],
    keywords: ["Guillermo Valdes", "Valdes", "child and adolescent psychiatry", "adult psychiatry", "private practice", "psychotherapy", "couples therapy", "family psychiatry", "families", "children", "adolescents", "bilingual", "Spanish", "English", "Spanish-speaking", "culturally responsive care", "culturally responsive", "NYU", "Yale", "Chief Fellow", "independent practice", "career development"],
    shortBlurb: "Board-certified child and adolescent psychiatrist in private practice who enjoys mentoring residents interested in psychotherapy, bilingual psychiatric care, and building an independent practice.",
    fullBio: "Dr. Guillermo Valdes is a board-certified psychiatrist who provides psychiatric care for children, adolescents, adults, couples, and families. He completed his General Psychiatry Residency at Yale University before pursuing fellowship training in Child & Adolescent Psychiatry at NYU School of Medicine, where he served as Chief Fellow. He currently maintains a private practice and continues to serve on the faculty at NYU School of Medicine.<br><br>Dr. Valdes enjoys mentoring residents interested in child and adolescent psychiatry, private practice, psychotherapy, bilingual psychiatric care, and the transition from residency to independent practice. As a bilingual psychiatrist fluent in English and Spanish, he is passionate about expanding access to culturally and linguistically responsive mental health care.",
    availability: "Residents are welcome to reach out by email to arrange a mutually convenient meeting time.",
    bookingType: "email",
    email: "guillermo.valdes@guillermovaldesmd.com",
    image: "guillermo-valdes.png",
    link: ""
  },

  {
    name: "Beth Grunschel, MD",
    city: "Fairfield, CT",
    coords: [-73.2613, 41.1408],
    specialties: ["Addiction psychiatry", "Adult psychiatry", "Private practice", "Psychodynamic psychotherapy"],
    focusAreas: ["Private practice", "Work-life integration", "Family life/parenting as a psychiatrist", "Career transitions", "Academic medicine"],
    shortBlurb: "Private practice psychiatrist with addiction psychiatry training, psychotherapy focus, and interest in sustainable clinical careers.",
    fullBio: "Dr. Grunschel completed Psychiatry residency at Yale, serving as Chief Resident of Education and Chief Resident of Inpatient Psychiatry at VA-Connecticut Healthcare System. She then completed Addiction Psychiatry fellowship at Yale. She has held attending positions at the VA, CMHC, and Yale Health Student Mental Health and Counseling before creating her dream job in solo private practice in Fairfield. Her interests include treating medical trainees and professionals, college students, transitional age youth, chronic pain and medical illness, supporting parents and young professionals in work-life balance, and psychotherapy-oriented care.",
    availability: "Availability to be confirmed. SCHEDULE DIRECTLY WITH DR. GRUNSCHEL. PLEASE DO NOT USE YALE BOOKING LINK TO SCHEDULE.",
    bookingType: "email",
    email: "beth.grunschel@yale.edu",
    image: "https://cdcssl.ibsrv.net/ibimg/smb/486x730_80/webmgr/1y/c/n/image0-2.jpeg.webp?4576ab26724c23acaeeafa1faa389c29",
    link: "https://DrBethGrunschel.com"
  },
  {
    name: "Falisha Gilman, MD",
    city: "Northern New Jersey",
    coords: [-74.1724, 40.7357],
    specialties: ["Adult psychiatry", "Private practice", "Leadership and administrative psychiatry"],
    focusAreas: ["Private practice", "Leadership", "Career transitions", "Work-life integration", "Family life/parenting as a psychiatrist", "Entrepreneurship"],
    shortBlurb: "Adult psychiatrist, founder of Emi Psychiatry, and Yale Clinical Instructor with interests in advocacy, leadership, and sustainable careers.",
    fullBio: "I am a board-certified adult psychiatrist, founder of Emi Psychiatry, and Clinical Instructor in Psychiatry at Yale. My professional interests include women’s mental health, physician advocacy, leadership development, and building meaningful, sustainable careers within psychiatry. I especially enjoy mentoring trainees as they think through career development, work-life integration, advocacy, and creating career paths aligned with their values and interests.",
    availability: "Generally available Mondays and Tuesdays after 3:30 PM. Unavailable July 6–10, July 23–28, and August 26–28.",
    image: "https://images.squarespace-cdn.com/content/v1/6475e8abcb32631440b6e886/3c49ab8d-2a73-40ae-aef1-2f8ecee3f6c9/falisha+gilman-0003.jpg?format=750w",
    link: ""
  },
  {
    name: "Sarah Mourra, MD",
    city: "Los Angeles, CA",
    coords: [-118.2437, 34.0522],
    specialties: ["Geriatric psychiatry", "Forensic psychiatry", "Private practice"],
    focusAreas: ["Private practice", "Family life/parenting as a psychiatrist", "Work-life integration", "Leadership", "Academic medicine", "Identity/lived experience"],
    shortBlurb: "Geriatric psychiatrist in group private practice with forensic work, UCLA teaching, and mentorship leadership experience.",
    fullBio: "I am a mom of three kids age 10 and under and of Middle Eastern cultural background. Professionally, I am a geriatric psychiatrist who trained for fellowship at UCLA. I am in private practice within a group practice and maintain a geriatric forensics practice involving attorneys and court appearances. I teach at UCLA as voluntary clinical faculty, provide lectures and mentorship to residents, and serve as head of the voluntary clinical faculty’s mentorship program.",
    availability: "Available for one hour every 2–3 weeks, or 30 minutes once a week.",
    image: "https://images.squarespace-cdn.com/content/v1/54aebd06e4b0e8da4b7d2a29/1421176607980-3R15T1SB4NB3REHTETAP/photo.jpg?format=1000w",
    link: ""
  },
  {
    name: "Camilla Lyons, MD",
    city: "Greenwich, CT / Manhattan, NY",
    coords: [-73.6298, 41.0262],
    specialties: ["Child and adolescent psychiatry", "Forensic psychiatry", "Adult psychiatry", "Private practice"],
    focusAreas: ["Private practice", "Career transitions", "Family life/parenting as a psychiatrist", "Work-life integration", "Academic medicine", "Entrepreneurship"],
    shortBlurb: "Child, adolescent, adult, and forensic psychiatrist with experience across academia, private sector work, and private practice.",
    fullBio: "I completed adult psychiatry residency at Harvard Longwood and then completed both Child and Forensic fellowships at NY Presbyterian Columbia/Cornell. I had a child during fellowship. I worked in academia at Bellevue for six years, then had several private-sector jobs before starting full-time private practice. My practice is primarily in Greenwich, CT and one day a week in Manhattan.",
    availability: "Starting July 10, free most days, with 1:00–3:00 PM EST best; unavailable July 17–24. August: Weekdays between 10:00 AM and 4:00 PM EST.",
    image: "https://www.camillalyonsmd.com/uploads/1/1/8/2/11828814/headshot_1_orig.png",
    link: ""
  },
  {
    name: "Marcos Moreno, MD, MPH",
    city: "Tucson, AZ",
    coords: [-110.9747, 32.2226],
    specialties: ["Addiction psychiatry", "Leadership and administrative psychiatry", "Adult psychiatry"],
    focusAreas: ["Leadership", "Financial literacy", "Career transitions", "Work-life integration", "Family life/parenting as a psychiatrist", "Academia/research", "Academic medicine", "Culturally responsive care"],
    shortBlurb: "Addiction psychiatrist, public health physician, and healthcare leader focused on community behavioral health, health policy, and career development.",
    fullBio: "Dr. Marcos Moreno is an addiction psychiatrist, public health physician, and healthcare leader with training in psychiatry, addiction medicine, and public health. Beginning in July 2026, he will serve as Medical Director of Addiction Services and Behavioral Health for the Pascua Yaqui Tribe and affiliated behavioral health programs in Arizona. He enjoys mentoring trainees interested in meaningful and sustainable career paths, leadership, financial literacy, and long-term personal and professional well-being.",
    availability: "Available July and August.",
    image: "https://ysm-res.cloudinary.com/image/upload/v1/yms/prod/d105b110-99b1-4c60-adf2-21ba2ca96fe3",
    link: ""
  },
  {
    name: "Anna Yusim, MD",
    city: "New York, NY",
    coords: [-74.0060, 40.7128],
    specialties: ["Adult psychiatry", "Private practice", "Spirituality/religion and mental health"],
    focusAreas: ["Private practice", "Career transitions", "Academic medicine", "Leadership", "Entrepreneurship", "Culturally responsive care"],
    shortBlurb: "Concierge psychiatrist, author, and Yale Clinical Assistant Professor focused on spirituality, mental health, and meaning.",
    fullBio: "I am a private practice concierge psychiatrist licensed in six states. I am also the author of Fulfilled: How the Science of Spirituality Can Help You Lead a Happier, More Meaningful Life. As a Clinical Assistant Professor in the Yale Department of Psychiatry, I co-founded the Yale Program for Spirituality, Mental Health and the Brain.",
    availability: "In Europe for July; available to meet with residents by Zoom or in person in August.",
    bookingType: "email",
    email: "anna.yusim@yale.edu",
    image: "https://annayusim.com/wp-content/uploads/2023/01/anna-yusim-md-3.webp",
    link: "https://www.annayusim.com"
  },


{
    name: "Kaosoluchi Enendu, MD, MBA",
    city: "CT / CA / PA / NY / NJ / MT / WY / WA / LA",
    coords: [-118.2437, 34.0522],
    specialties: ["Adult psychiatry", "Private practice"],
    focusAreas: ["Private practice", "Financial literacy", "Entrepreneurship", "Career transitions", "Work-life integration"],
    keywords: ["Kaosoluchi Enendu", "telepsychiatry", "private practice", "entrepreneurial", "entrepreneurship", "financial literacy", "nontraditional career", "multi-pronged career", "early career", "post-residency", "CT", "CA", "PA", "NY", "NJ", "MT", "WY", "WA", "LA", "Connecticut", "California", "Pennsylvania", "New York", "New Jersey", "Montana", "Wyoming", "Washington", "Louisiana"],
    shortBlurb: "First-year psychiatrist building a private practice while working in telepsychiatry, with interests in entrepreneurship, financial literacy, and nontraditional early career paths.",
    fullBio: "I'm a first-year psychiatrist post-residency, currently working across telepsychiatry and building a private practice. I'd describe my path as entrepreneurial. I'm balancing multiple roles at once while growing something of my own, and I'd love to mentor residents interested in what that kind of nontraditional, multi-pronged early career can look like.",
    availability: "August 1st onward. She prefers that residents reach out directly so she can add them into her schedule.",
    bookingType: "email",
    email: "kaosoluchi.enendu@yale.edu",
    image: "https://res.cloudinary.com/ysm/image/upload/yms/prod/ad62eb7d-ae26-4a01-9bfc-9c3248a1e531",
    link: ""
  },

{
    name: "Ahmed Tahseen, MD",
    city: "Colorado",
    coords: [-105.7821, 39.5501],
    specialties: ["Adult psychiatry", "Private practice", "Leadership and administrative psychiatry"],
    focusAreas: ["Career transitions", "Private practice", "Leadership", "Work-life integration", "Entrepreneurship"],
    careerPaths: ["Industry", "Private practice", "Academia/research", "Entrepreneurship", "Innovation"],
    keywords: ["first generation college student", "immigrant family", "POC", "older sibling", "working student", "consulting", "biotech", "brain health startup", "moonlighting", "YNHH", "Silver Hill", "psychedelic psychiatry", "psychedelic licensure", "CIIS", "MAPS", "MDMA", "psilocybin", "Natural Medicines License", "IFS", "Internal Family Systems", "clinical trials", "Biohaven", "Gilgamesh", "Radial Health", "MDD", "industry", "research", "private practice", "Colorado"],
    shortBlurb: "Adult psychiatrist, industry clinical trials leader, research director, and private practitioner with experience in consulting, psychedelics, IFS therapy, and non-traditional psychiatry career paths.",
    fullBio: "Dr. Ahmed Tahseen is an adult psychiatrist whose path has included first-generation college experience, growing up as a person of color and older sibling in an immigrant family, working through school and residency, and pursuing multiple professional pathways during and after training. During residency, he did consulting work in biotech and brain health startups, moonlighted at YNHH and Silver Hill, completed psychedelic licensure and training through CIIS and MAPS MDMA training, and trained in Internal Family Systems therapy. Since residency, he has served as Medical Director for phase 2 and 3 studies at Biohaven Pharma in major depressive disorder, Clinical Advisor and now Director of Research at Radial Health, and Medical Director for phase 1 and 2 studies at Gilgamesh Pharma. He also maintains a private practice in Colorado, where physicians are providing psilocybin under the Natural Medicines License. He especially enjoys talking with trainees about what is possible in psychiatry, how to understand what one can and cannot do within the field, and how exposure to people building non-traditional careers can open new professional possibilities.",
    availability: "July–August 2026 via Zoom, Monday–Friday.",
    image: "https://th.bing.com/th/id/OIP.dr221jx7vulwsY12G-uUogHaF6?w=219&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    link: ""
  },

{
    name: "Noah Capurso, MD",
    city: "New Haven, CT",
    coords: [-72.9279, 41.3083],
    specialties: ["Adult psychiatry", "Addiction psychiatry", "Academic medicine"],
    focusAreas: ["Academia/research", "Academic medicine", "Leadership", "Career transitions", "Work-life integration"],
    careerPaths: ["Academic medicine", "Medical education", "Medical leadership", "Academic writing"],
    keywords: ["Westchester", "Williams College", "chemistry", "math", "Yale", "New Haven", "medical school", "psychiatry residency", "addiction psychiatry fellowship", "clinical educator", "West Haven VA", "resident education", "medical student education", "CT Valley Hospital", "Assistant Medical Director of Addiction Services", "Carlat Addiction Treatment Report", "academic writing", "educational writing", "Treating Opioid Use Disorder", "opioid use disorder", "clinician educator", "medical leadership", "cello", "Yale Medical Symphony Orchestra", "cooking", "reading", "outdoors"],
    shortBlurb: "Addiction psychiatrist, clinician-educator, medical leader, and writer with experience in Yale training, VA clinical education, CT Valley Hospital addiction services, and academic publishing.",
    fullBio: "I grew up in Westchester, NY and completed undergrad at Williams College in rural Massachusetts. After a brief stint teaching high school and middle school chemistry and math, I moved to New Haven for medical school at Yale. I have been in New Haven ever since, completing medical school, psychiatry residency, and addiction psychiatry fellowship all at Yale. After graduating, I joined the ladder track faculty as a clinical educator and worked at the West Haven VA for 9 years, first as an inpatient attending and then in the outpatient addiction clinic. During that time, I was closely involved in resident and medical student education. In January 2025, I transitioned to a voluntary faculty position and started as the Assistant Medical Director of Addiction Services at CT Valley Hospital.<br><br>I also do a lot of medical and educational writing. I am the Editor in Chief of the Carlat Addiction Treatment Report, a non-industry funded newsletter and CME provider with a large reach, including internationally. I also co-authored the book Treating Opioid Use Disorder: A Fact Book.<br><br>Topics trainees may want to discuss with me include the practice of addiction psychiatry, medical education, academic writing, the clinician-educator academic track, and medical leadership. But I’d be happy to meet with anyone about whatever they’d like to discuss!<br><br>Outside interests include playing cello as a member of the Yale Medical Symphony Orchestra, cooking, reading, and spending time outdoors.",
    availability: "I will be around the New Haven area for the summer, except for 7/10–7/20 when I will be away for vacation.",
    image: "https://www.thecarlatreport.com/ext/resources/2022/04/21/NCapurso.webp?t=1664987220",
    link: ""
  },

{
    name: "Myra Mathis, MD",
    city: "Rochester, NY",
    coords: [-77.6109, 43.1566],
    specialties: ["Adult psychiatry", "Addiction psychiatry"],
    focusAreas: ["Academic medicine", "Leadership", "Career transitions"],
    shortBlurb: "More to come.",
    fullBio: "More to come.",
    availability: "More to come.",
    image: "https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/psychiatry/faculty/MyraMathis.jpg",
    link: ""
  },

{
    name: "Robin Bonomi, MD, PhD",
    city: "Portsmouth, VA",
    coords: [-76.2983, 36.8354],
    specialties: ["Adult psychiatry", "Academic medicine"],
    focusAreas: ["Neuroscience", "Academic medicine", "Military service", "Academia/research"],
    shortBlurb: "Neuroscientist, psychiatrist, active duty US Navy, working towards development of novel technologies to diagnose and treat psychiatric illness. Background is in radiotracer development for PET imaging and studying the neuroimmune and epigenetic effects of psychological trauma on the brain.",
    fullBio: "Lt. Cmdr. Robin Bonomi, M.D., Ph.D., U.S. Navy Medical Corps, joined DARPA’s Defense Sciences Office (DSO) as a program manager in January 2026. Her research interests include neuroimmune modulation, precision psychiatry, and molecular imaging technologies for brain-based behavioral health risk prediction and prevention. Her work integrates translational neuroimaging, clinical psychiatry, and advanced analytics for psychiatric outcomes in civilian and active-duty military populations. Prior to joining DARPA, she served as psychiatrist and inpatient medical director at Naval Medical Center Portsmouth. She led a clinical research team that studied active-duty suicide prevention initiatives and led multiple large-scale imaging projects leveraging positron emission tomography (PET) to understand trauma-induced neural changes. She has received awards recognizing her academic work from the National Institute of Mental Health, the Society of Biological Psychiatry, and the American Psychiatric Association. She has authored more than 25 peer-reviewed publications and continues to serve on editorial boards for several psychiatric and translational research journals. She holds active faculty appointments at Yale University and Uniformed Services University. Her ongoing research supports military medical readiness, bridging fundamental neurobiology, clinical application, and operational performance.",
    availability: "June, July, and August",
    image: "https://res.cloudinary.com/ysm/image/upload/yms/prod/0906276d-099a-4eb0-b64e-4bb2c37e1b42",
    link: ""
  },

{
    name: "David Ross, MD, PhD",
    city: "Edmonton, Alberta, Canada",
    coords: [-113.4938, 53.5461],
    specialties: ["Adult psychiatry", "Leadership and administrative psychiatry"],
    focusAreas: ["Academic medicine", "Academia/research", "Leadership", "Career transitions"],
    careerPaths: ["Academic medicine", "Leadership", "Medical Education", "Academia/research"],
    keywords: ["medical education", "med ed", "scientific communication", "adult learning", "curriculum", "psychiatric neuroscience", "NNCI", "National Neuroscience Curriculum Initiative", "social justice", "health equity", "trauma", "collaborative care", "primary care", "mental health teams", "Kickstand Integrated Youth Services", "University of Alberta", "Yale Adult Psychiatry Residency", "Associate Program Director", "stigma", "population mental health", "Edmonton"],
    shortBlurb: "Professor and Chair of Psychiatry at the University of Alberta, former Yale Adult Psychiatry Residency Associate Program Director, and leader in medical education and scientific communication.",
    fullBio: "David Ross is Professor and Chair of the Department of Psychiatry at the University of Alberta. Prior to this role, he was Associate Program Director of the Yale Adult Psychiatry Residency Program from 2009 to 2021. His academic work has focused on leveraging principles of adult learning to create innovative medical curricula, especially for psychiatric neuroscience; providing training and mentorship in medical education and effective scientific communication; and enhancing social justice and health equity. His clinical areas of focus include working with individuals who have experienced trauma, collaborative care between primary care and mental health teams, and serving as the staff psychiatrist for Kickstand Integrated Youth Services. He is a Co-Founder and Executive Director of the National Neuroscience Curriculum Initiative and is involved in a range of educational initiatives designed to decrease stigma and improve mental health outcomes at a population level. He is especially interested in mentoring residents around medical education and effective scientific communication.",
    availability: "Interested residents can reach out directly to Dr. Ross or to his Executive Assistant at time4mh@ualberta.ca to find a time to meet for a 30-minute session during July or August.",
    bookingType: "email",
    email: "time4mh@ualberta.ca",
    image: "https://morse.yale.edu/sites/default/files/styles/2_3_320/public/2025-07/David%20A.%20Ross%2C%20MD%2C%20PhD.jpg?h=93946c99&itok=ikCgB5n3",
    link: ""
  },

{
    name: "Brady Heward, MD",
    city: "Vermont",
    coords: [-72.5778, 44.5588],
    specialties: ["Addiction psychiatry", "Child and adolescent psychiatry", "Academic medicine"],
    focusAreas: ["Child and adolescent psychiatry", "Academic medicine"],
    shortBlurb: "Child and Adolescent + Addiction Psychiatrist.",
    fullBio: "More to come. ",
    availability: "More to come.",
    image: "https://www.uvmhealth.org/sites/default/files/styles/portrait_075_3x4_640x853/public/2024-10/Brady-Heward-MD_0.jpg?h=d94c4b90&itok=Rqkysimv",
    link: ""
  },

  {
    name: "Andi Diaz Stransky, MD",
    city: "Durham, NC",
    coords: [-78.8986, 35.9940],
    specialties: ["Child and adolescent psychiatry", "Adult psychiatry"],
    focusAreas: ["Identity/lived experience", "Family life/parenting as a psychiatrist", "Academic medicine", "Career transitions"],
    shortBlurb: "Yale-trained child and adult psychiatrist, IMG from Mexico, Duke faculty member, and mother of two with mentorship interests in parenting during training, immigrant identity, and multicultural experiences in psychiatry.",
    fullBio: "I’m a Yale alumna, having graduated in 2018 from General Psychiatry and in 2020 from the Solnit Integrated Child Psychiatry Fellowship. I am an IMG from Mexico and the mother of two sweet boys, both born during training. I am now on faculty at Duke, where my work is primarily focused on program building that increases access to pediatric and reproductive behavioral health care. Whether you’d like to connect about the value and challenges of being an immigrant and a psychiatrist, a parent and a psychiatrist, or a Yale-trained psychiatrist in the South, I’m happy to connect.",
    availability: "Based in Durham, North Carolina for the summer. Availability to be arranged with interested residents.",
    keywords: ["Andi Diaz Stransky", "Andrea Diaz-Stransky", "Yale alum", "General Psychiatry", "Solnit Integrated Child Psychiatry Fellowship", "IMG", "Mexico", "immigrant", "multicultural", "parenting during training", "new parent", "mother during training", "mother of two", "Duke", "Durham", "North Carolina", "South", "pediatric behavioral health", "reproductive behavioral health", "program building", "access to care", "child psychiatry"],
    image: "https://scholars.duke.edu/profile-images/full/1048262.jpg",
    link: ""
  },

  {
    name: "Kia Sayers, MD",
    city: "North Louisiana",
    coords: [-93.7502, 32.5252],
    specialties: ["Adult psychiatry", "Reproductive psychiatry"],
    focusAreas: ["Identity/lived experience", "Family life/parenting as a psychiatrist", "Career transitions", "Work-life integration", "Academic medicine"],
    careerPaths: ["Academic Medicine", "Women's Mental Health", "Reproductive Mental Health", "Leadership"],
    keywords: ["Kia Sayers", "biracial", "ciswoman", "wife", "mother", "mom", "physician parent", "breastfeeding parent", "pregnant during fellowship", "first generation", "first in family", "professional school", "low-middle socioeconomic status", "South", "oldest sibling", "oldest of six", "Yale psychiatry", "Women's Mental Health", "Brown", "LSU-Shreveport", "Director of Women's Mental Health", "reproductive mental health", "moms", "birthing parents", "menopausal transition", "postpartum psychosis", "postpartum psychosis prevention", "Nutritional Psychiatry", "medical acupuncture", "women in medicine", "inclusive care", "LGBTQ+", "LGBTQ reproductive mental health", "job interviews", "training to job interviews", "North Louisiana", "Louisiana", "Shreveport"],
    shortBlurb: "Yale trained psychiatrist who completed a Women's Mental Health fellowship at Brown University and incoming Director of Women's Mental Health at LSU-Shreveport, with interests in reproductive mental health, physician parenting, inclusive care, and transitions from training to early career roles.",
    fullBio: "Personally, I am a biracial ciswoman, a wife of seven years, and a mother. I grew up in a low-middle socioeconomic status family in the South, am the oldest of six children, and am the first in my family to complete college after high school and attend professional school. During residency, I worked to maintain a healthy marriage, had my first child, and am pregnant with my second during fellowship. Professionally, I am a graduate of Yale’s psychiatry program and am currently completing fellowship in Women’s Mental Health at Brown. I will begin as Director of Women’s Mental Health at LSU-Shreveport in February 2027. I am passionate about supporting moms and all birthing parents, the menopausal transition, and postpartum psychosis prevention efforts. I am also certified in Nutritional Psychiatry and medical acupuncture. I am especially interested in mentoring around women’s and reproductive mental health, being a physician parent or breastfeeding parent, women in medicine, inclusive care of LGBTQ+ people in reproductive mental health, and navigating the transition from training to job interviews.",
    availability: "June: Wednesdays at 1:30 PM or 2:00 PM EST. July: Starting July 10, free most days, with 1:00–3:00 PM EST best; unavailable July 17–24. August: Weekdays between 10:00 AM EST and 4:00 PM EST.",
    bookingType: "tmacs",
    image: "https://res.cloudinary.com/ysm/image/upload/yms/prod/f7536628-ee6a-4ac6-802b-7d7758c0f8c9",
    link: ""
  },
  {
    name: "Ish Bhalla, MD",
    city: "Durham, NC",
    coords: [-78.8986, 35.9940],
    specialties: ["Adult psychiatry"],
    focusAreas: ["Career transitions", "Healthcare consultation", "Building business", "Innovation", "Entrepreneurship"],
    shortBlurb: "Health insurance, entrepreneurial, value based care.",
    fullBio: "Health insurance, entrepreneurial, value based care.",
    availability: "Monday and Wednesday mornings.",
    image: "https://res.cloudinary.com/ysm/image/upload/yms/prod/12e0844a-d9a3-49f5-9331-20eb7910a501",
    link: ""
  }
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-98.5795, 39.8283],
  zoom: 3.3
});

map.addControl(new mapboxgl.NavigationControl(), "top-right");

let markers = [];
let markerElements = {};
let selectedMentorName = null;
let currentMarkerDisplayCoords = {};
let currentRenderedList = [];

function listToText(items) {
  return items ? items.join(", ") : "";
}

function hasItem(items, value) {
  if (!value) return true;
  if (!items) return false;
  return items.some(item => item.toLowerCase() === value.toLowerCase());
}

function safeList(items) {
  return items || [];
}


function getMentorLastName(fullName) {
  const cleanName = fullName
    .split(",")[0]
    .replace(/\b(Dr\.?|MD|PhD|MBA|MPH|ScM)\b/gi, "")
    .replace(/[^a-zA-Z\s-]/g, " ")
    .trim();

  const parts = cleanName.split(/\s+/).filter(Boolean);
  return parts[parts.length - 1] || "";
}

function buildMentorEmailLink(m) {
  const lastName = getMentorLastName(m.name);
  const greeting = lastName ? `Hello Dr. ${lastName},` : "Hello,";
  const subject = "T-MACS Summer Mentorship Request";
  const body = `${greeting}\n\n` +
    "I found your profile through the T-MACS Summer Mentorship Program and would love to schedule a mentorship conversation with you if you have availability this summer.\n\n" +
    "A little about me:\n\n" +
    "PGY:\n\n" +
    "What drew me to your profile was:\n\n" +
    "The personal and/or professional mentorship goals that I'd like to work on are:\n\n" +
    "I anticipate my mentorship goals can be achieved over approximately:\n\n" +
    "☐ 1–3 sessions\n" +
    "☐ 4–6 sessions\n" +
    "☐ 7–9 sessions\n" +
    "☐ 10+ sessions\n\n" +
    "Thank you for your willingness to mentor Yale trainees. I look forward to connecting with you.\n\n" +
    "Best,";

  return `mailto:${encodeURIComponent(m.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function bookingMarkup(m) {
  if (m.bookingType === "email" && m.email) {
    return `
      <p class="booking-note">This mentor prefers direct scheduling by email.</p>
      <a class="booking-button" href="${buildMentorEmailLink(m)}" aria-label="Email ${m.name} to request a mentorship meeting">
        ✉️ Email This Mentor →
      </a>
    `;
  }

  if (m.bookingType === "external" && m.bookingLink) {
    return `
      <p class="booking-note">This mentor prefers direct scheduling using the contact instructions above.</p>
      <a class="booking-button" href="${m.bookingLink}" target="_blank" rel="noopener noreferrer" aria-label="Open external scheduling or contact link for ${m.name}">
        ${m.bookingLabel || "Contact Mentor →"}
      </a>
    `;
  }

  return `
    <p class="booking-note">
      After reviewing mentor profiles, use the T-MACS scheduling portal to request a mentorship meeting.
    </p>
    <a class="booking-button" href="${TMACS_BOOKING_LINK}" target="_blank" rel="noopener noreferrer" aria-label="Schedule a mentorship meeting through T-MACS">
      📅 Schedule Through T-MACS →
    </a>
  `;
}


function renderWelcomePanel() {
  document.getElementById("detailContent").innerHTML = `
    <div class="welcome-card">
      <h2>👋 Welcome to T-MACS</h2>
      <p class="welcome-subtitle">Finding a mentor is as easy as 1–2–3.</p>

      <div class="welcome-step" id="welcomeStep1">
        <span class="step-number">1</span>
        <div>
          <strong>Find</strong>
          <p>Browse mentors using the searchable mentor list by specialty, location, or mentorship interest, or explore mentors visually on the interactive map.</p>
        </div>
      </div>

      <div class="welcome-step" id="welcomeStep2">
        <span class="step-number">2</span>
        <div>
          <strong>Schedule</strong>
          <p>Use your mentor's preferred scheduling option to find a time to connect.</p>
          <div class="schedule-preview" id="schedulePreview" aria-hidden="true">
            <strong>Scheduling appears in each mentor profile</strong>
            After you select a mentor, scroll to their preferred contact option to find a time to connect.
            <span class="preview-button">📅 Schedule Through T-MACS →</span>
          </div>
        </div>
      </div>

      <div class="welcome-step" id="welcomeStep3">
        <span class="step-number">3</span>
        <div>
          <strong>Connect</strong>
          <p>Build meaningful mentoring relationships that support your growth throughout residency and beyond.</p>
          <div class="connect-pop" id="connectPop" aria-hidden="true">
            <strong>🤝 Connect</strong>
            <span>Building meaningful relationships, one conversation at a time.</span>
          </div>
        </div>
      </div>

      <div class="ready-box">
        <strong>Ready to get started?</strong>
        <p>Select any mentor from the list or map to view their full profile. The searchable list and interactive map provide access to the same mentor profiles and scheduling options.</p>
        <button class="voice-tour-button" type="button" onclick="runWelcomeTourPreview(true, true)">▶ Start Tour with Voice</button>
        <button class="replay-tour-button" type="button" onclick="runWelcomeTourPreview(true, false)">⏵ Replay Tour</button>
        <p class="tour-audio-note" id="tourAudioNote">Voice starts after you press the voice tour button.</p>
      </div>
    </div>
  `;
}

function getMatchMaxScore(selectedSpecialty, selectedFocus, keyword) {
  let maxScore = 0;
  if (selectedSpecialty) maxScore += 5;
  if (selectedFocus) maxScore += 5;
  if (parseKeywordTerms(keyword).length > 0) maxScore += 5;
  return maxScore;
}

function getMatchPercent(score, maxScore) {
  if (!maxScore) return null;
  return Math.max(0, Math.min(100, Math.round((score / maxScore) * 100)));
}

function matchPercentClass(percent) {
  if (percent === null || percent === undefined) return "match-possible";
  if (percent >= 75) return "match-strong";
  if (percent >= 50) return "match-good";
  return "match-possible";
}

function matchBadgeMarkup(m) {
  if (m.matchPercent === undefined || m.matchPercent === null) return "";
  return `<div class="match-score ${matchPercentClass(m.matchPercent)}">${m.matchPercent}% Match</div>`;
}

function cleanMatchReason(reason) {
  return reason
    .replace(/^Shares your selected specialty:\s*/i, "")
    .replace(/^Shares your mentorship interest:\s*/i, "")
    .replace(/^This mentor's profile discusses\s*/i, "")
    .replace(/^This mentor's name matches your search\.?$/i, "Mentor name")
    .replace(/[."]+$/g, "");
}

function matchReasonsMarkup(m, limit = 3) {
  const reasons = safeList(m.matchReasons)
    .filter(reason => reason && !reason.includes("No exact match"))
    .slice(0, limit);

  if (!reasons.length) return "";

  return `<div class="match-checks">${reasons.map(reason => `<span>✓ ${cleanMatchReason(reason)}</span>`).join("")}</div>`;
}

function resetResultsHeader() {
  document.getElementById("resultsTitle").textContent = "Browse All Mentors";
  document.getElementById("resultsHelp").textContent = "Search by name, location, or topic to explore the full network.";
  const matchStatus = document.getElementById("matchStatus");
  matchStatus.textContent = "";
  matchStatus.classList.remove("visible");
}

function setMatchResultsHeader(ranked) {
  document.getElementById("resultsTitle").textContent = "✨ Your Personalized Mentor Recommendations";
  document.getElementById("resultsHelp").textContent = "Ranked for you based on the interests you selected.";

  const closeMatches = ranked.filter(m => (m.matchPercent || 0) >= 75).length;
  const matchStatus = document.getElementById("matchStatus");
  matchStatus.textContent = closeMatches > 0
    ? `We found ${closeMatches} mentor${closeMatches === 1 ? "" : "s"} who closely match what you're looking for.`
    : "We ranked the mentor network based on what you selected.";
  matchStatus.classList.add("visible");
}

function updateStats(list, mode = "browse") {
  const totalMentors = mentors.length;
  const visibleMentors = list.length;

  let statsText;

  if (mode === "match") {
    statsText = `${visibleMentors} alumni mentors ranked for your personalized match`;
  } else {
    statsText = visibleMentors === totalMentors
      ? `${totalMentors} alumni mentors in the T-MACS network`
      : `${visibleMentors} of ${totalMentors} alumni mentors match your search`;
  }

  document.getElementById("stats").innerText = statsText;
}

function showMentor(m) {
  clearWelcomeTourClasses();
  selectedMentorName = m.name;

  document.getElementById("detailContent").innerHTML = `
    <div class="profile-hero">
      <img class="profile-photo-large" src="${m.image}" alt="Photo of ${m.name}">
      <div>
        <h2>${m.name}</h2>
        <div class="meta">${m.city}</div>
        ${matchBadgeMarkup(m)}
      </div>
    </div>

    ${m.matchPercent !== undefined ? `
      ${safeList(m.matchReasons).length ? `
        <div class="match-reasons">
          <strong>Why this match?</strong>
          <ul>${m.matchReasons.filter(r => !r.includes("No exact match")).map(r => `<li>${cleanMatchReason(r)}</li>`).join("") || "<li>Shown for browsing.</li>"}</ul>
        </div>
      ` : ""}
    ` : ""}

    <div class="detail-heading">Specialty / Pathway Topics</div>
    <div class="tag-row">
      ${m.specialties.map(s => `<span class="tag">${s}</span>`).join("")}
    </div>

    <div class="detail-heading">Mentor Focus Areas</div>
    <div class="tag-row">
      ${m.focusAreas.map(f => `<span class="tag">${f}</span>`).join("")}
    </div>


    <div class="detail-heading">Profile</div>
    <p>${m.fullBio}</p>

    <div class="detail-heading">Availability</div>
    <p>${m.availability || "Availability pending."}</p>

    ${bookingMarkup(m)}

    ${m.link ? `<a class="profile-link" href="${m.link}" target="_blank" rel="noopener noreferrer" aria-label="Visit external profile for ${m.name}">Visit Profile →</a>` : ""}
  `;

  const detailContent = document.getElementById("detailContent");
  detailContent.focus({ preventScroll: true });

  flyToMentor(m);
  highlightSelectedCard();
  highlightSelectedMarker();
}

function coordinateKey(coords) {
  return `${coords[0].toFixed(4)},${coords[1].toFixed(4)}`;
}

function offsetCoords(coords, index, total) {
  if (total <= 1) {
    return coords;
  }

  // Spread markers that share the exact same coordinates around a small circle.
  // This keeps mentors in the same city visible without changing their actual profile location.
  const radius = 0.12;
  const angle = (2 * Math.PI * index) / total;

  return [
    coords[0] + Math.cos(angle) * radius,
    coords[1] + Math.sin(angle) * radius
  ];
}

function markerDisplayCoordsForList(list) {
  const groups = {};

  list.forEach(m => {
    const key = coordinateKey(m.coords);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(m.name);
  });

  const displayCoords = {};

  Object.values(groups).forEach(names => {
    names.forEach((name, index) => {
      const mentor = list.find(m => m.name === name);
      displayCoords[name] = offsetCoords(mentor.coords, index, names.length);
    });
  });

  return displayCoords;
}

function render(list, mode = "browse") {
  const container = document.getElementById("mentorList");
  container.innerHTML = "";

  markers.forEach(marker => marker.remove());
  markers = [];
  markerElements = {};
  currentRenderedList = list;

  updateStats(list, mode);

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">No mentors match your current filters.</div>`;
    return;
  }

  const displayCoords = markerDisplayCoordsForList(list);
  currentMarkerDisplayCoords = displayCoords;

  list.forEach(m => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mentor-card";
    card.dataset.name = m.name;
    card.setAttribute("aria-label", `View profile for ${m.name}, ${m.city}`);

    if (selectedMentorName === m.name) {
      card.classList.add("active");
      card.setAttribute("aria-current", "true");
    } else {
      card.removeAttribute("aria-current");
    }

    card.innerHTML = `
      <img src="${m.image}" alt="Photo of ${m.name}">
      <div class="mentor-info">
        <h4>${m.name}</h4>
        <span>${m.city}</span>

        ${m.matchPercent !== undefined ? `
          ${matchBadgeMarkup(m)}
          ${matchReasonsMarkup(m, 2)}
          ${m.matchSummary ? `<div class="match-summary">${m.matchSummary}</div>` : ""}
        ` : ""}

        <p>${m.shortBlurb}</p>

        <div class="tag-row">
          ${m.specialties.slice(0, 2).map(s => `<span class="tag">${s}</span>`).join("")}
        </div>
      </div>
    `;

    card.onclick = () => showMentor(m);
    container.appendChild(card);

    const popup = new mapboxgl.Popup({
      offset: 28,
      closeButton: false,
      closeOnClick: false
    }).setHTML(`<div class="map-tooltip"><strong>${m.name}</strong><br>${m.city}</div>`);

    const marker = new mapboxgl.Marker({ color: "#00356b" })
      .setLngLat(displayCoords[m.name] || m.coords)
      .setPopup(popup)
      .addTo(map);

    const markerEl = marker.getElement();
    markerEl.setAttribute("role", "button");
    markerEl.setAttribute("tabindex", "0");
    markerEl.setAttribute("aria-label", `View profile for ${m.name}, ${m.city}`);
    markerEl.title = `${m.name} — ${m.city}`;

    markerEl.addEventListener("mouseenter", () => popup.addTo(map));
    markerEl.addEventListener("mouseleave", () => popup.remove());
    markerEl.addEventListener("click", () => showMentor(m));
    markerEl.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showMentor(m);
      }
    });

    markerElements[m.name] = markerEl;
    markers.push(marker);
  });

  highlightSelectedMarker();
}

function sharedLocationCount(m) {
  const key = coordinateKey(m.coords);
  return currentRenderedList.filter(item => coordinateKey(item.coords) === key).length;
}

function userPrefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function flyToMentor(m) {
  const displayCenter = currentMarkerDisplayCoords[m.name] || m.coords;
  const zoomLevel = sharedLocationCount(m) > 1 ? 8.6 : 7;

  map.flyTo({
    center: displayCenter,
    zoom: zoomLevel,
    duration: userPrefersReducedMotion() ? 0 : 1400,
    essential: true
  });
}

function viewAllMentorsOnMap() {
  const list = currentRenderedList.length ? currentRenderedList : mentors;
  const displayCoords = markerDisplayCoordsForList(list);
  const coords = Object.values(displayCoords);

  if (coords.length === 0) {
    map.flyTo({ center: [-98.5795, 39.8283], zoom: 3.3, duration: userPrefersReducedMotion() ? 0 : 1200, essential: true });
    return;
  }

  const bounds = coords.reduce((b, coord) => b.extend(coord), new mapboxgl.LngLatBounds(coords[0], coords[0]));

  map.fitBounds(bounds, {
    padding: { top: 70, bottom: 55, left: 55, right: 55 },
    maxZoom: 4.2,
    duration: userPrefersReducedMotion() ? 0 : 1200,
    essential: true
  });
}

function highlightSelectedMarker() {
  Object.entries(markerElements).forEach(([name, el]) => {
    el.classList.toggle("selected", name === selectedMentorName);
  });
}



const STATE_SEARCH_ALIASES = {
  "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
  "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
  "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
  "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
  "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
  "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
  "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
  "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
  "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
  "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
  "DC": "District of Columbia"
};

function normalizeTextForSearch(value) {
  return (value || "")
    .toString()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function locationAliasesForMentor(m) {
  const city = m.city || "";
  const aliases = [];

  Object.entries(STATE_SEARCH_ALIASES).forEach(([abbr, fullName]) => {
    const abbrPattern = new RegExp(`(^|[^A-Za-z])${abbr.replace(/./g, "$&\\.?")}([^A-Za-z]|$)`, "i");
    const plainAbbrPattern = new RegExp(`(^|[^A-Za-z])${abbr}([^A-Za-z]|$)`, "i");
    const fullNamePattern = new RegExp(fullName, "i");

    if (plainAbbrPattern.test(city) || abbrPattern.test(city) || fullNamePattern.test(city)) {
      aliases.push(abbr, fullName, fullName.replace(/\s+/g, ""));
    }
  });

  if (/alberta/i.test(city)) aliases.push("AB", "Alberta", "Canada");

  return aliases;
}

function buildMentorSearchText(m) {
  const parts = [
    m.name,
    m.city,
    ...locationAliasesForMentor(m),
    m.shortBlurb,
    m.fullBio,
    listToText(m.specialties),
    listToText(m.focusAreas),
    m.availability,
    listToText(m.careerPaths),
    listToText(m.keywords)
  ];

  return normalizeTextForSearch(parts.join(" "));
}

function searchTermsForQuery(rawSearch) {
  const normalized = normalizeTextForSearch(rawSearch);
  if (!normalized) return [];

  const compact = normalized.replace(/\s+/g, "");
  const terms = new Set([normalized, compact]);

  Object.entries(STATE_SEARCH_ALIASES).forEach(([abbr, fullName]) => {
    const normalizedAbbr = normalizeTextForSearch(abbr);
    const dottedAbbr = normalizeTextForSearch(abbr.split("").join("."));
    const normalizedFullName = normalizeTextForSearch(fullName);
    const compactFullName = normalizedFullName.replace(/\s+/g, "");

    if ([normalizedAbbr, dottedAbbr, normalizedFullName, compactFullName].includes(normalized) ||
        [normalizedAbbr, dottedAbbr, normalizedFullName, compactFullName].includes(compact)) {
      terms.add(normalizedAbbr);
      terms.add(dottedAbbr);
      terms.add(normalizedFullName);
      terms.add(compactFullName);
    }
  });

  if (["ab", "alberta"].includes(normalized)) {
    terms.add("ab");
    terms.add("alberta");
    terms.add("canada");
  }

  return Array.from(terms).filter(Boolean);
}

function applyFilters() {
  const search = document.getElementById("search").value.trim();
  const searchTerms = searchTermsForQuery(search);
  const specialty = document.getElementById("specialtyFilter").value;
  const focus = document.getElementById("focusFilter").value;

  const filteredMentors = mentors.filter(m => {
    const searchableText = buildMentorSearchText(m);

    return (
      (!searchTerms.length || mentorSearchRelevance(m, search) > 0) &&
      (!specialty || hasItem(m.specialties, specialty)) &&
      (!focus || hasItem(m.focusAreas, focus))
    );
  });

  return sortMentorsByNameRelevance(filteredMentors, search);
}

function refresh(shouldClearSelection = false) {
  if (shouldClearSelection) {
    selectedMentorName = null;
    renderWelcomePanel();
  }
  resetResultsHeader();
  render(applyFilters());
}

function matchLabel(score) {
  if (score >= 12) return "Excellent Match";
  if (score >= 8) return "Strong Match";
  if (score >= 4) return "Good Match";
  if (score > 0) return "Potential Match";
  return "Explore Profile";
}

function summarizeMatch(reasons, score) {
  if (!reasons || reasons.length === 0 || score === 0) {
    return "Shown for browsing.";
  }

  const hasSpecialty = reasons.some(r => r.includes("selected specialty"));
  const hasFocus = reasons.some(r => r.includes("mentorship interest"));
  const hasName = reasons.some(r => r.includes("name matches"));
  const hasKeyword = reasons.some(r => r.includes("profile discusses"));

  const parts = [];
  if (hasSpecialty) parts.push("specialty");
  if (hasFocus) parts.push("mentorship interest");
  if (hasName) parts.push("mentor name");
  if (hasKeyword) parts.push("keyword");

  if (parts.length === 1) {
    if (parts[0] === "mentor name") return "Matched by mentor name.";
    return `Matched on ${parts[0]}.`;
  }

  const last = parts.pop();
  return `Matched on ${parts.join(", ")} and ${last}.`;
}

function getNameParts(fullName) {
  const cleanName = fullName
    .split(",")[0]
    .replace(/\b(Dr\.?|MD|PhD|MBA|MPH)\b/gi, "")
    .replace(/[^a-zA-Z\s-]/g, " ")
    .trim()
    .toLowerCase();

  const parts = cleanName.split(/\s+/).filter(Boolean);
  return {
    first: parts[0] || "",
    last: parts[parts.length - 1] || "",
    full: cleanName
  };
}

function parseKeywordTerms(keyword) {
  if (!keyword) return [];

  // Supports entries like: parenting AND immigrant
  // If AND is not used, the whole keyword phrase is treated as one search term.
  return keyword
    .split(/\s+AND\s+/i)
    .map(term => term.trim())
    .filter(Boolean);
}

function normalizeSearchTerm(value) {
  return (value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value) {
  return (value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsWholeSearchTerm(text, rawTerm) {
  const normalizedText = ` ${normalizeSearchTerm(text)} `;
  const term = normalizeSearchTerm(rawTerm);
  if (!term) return false;
  const pattern = new RegExp(`(^|\\s)${escapeRegExp(term)}(\\s|$)`, "i");
  return pattern.test(normalizedText);
}

function containsSearchTermByWord(text, rawTerm) {
  const normalizedText = normalizeSearchTerm(text);
  const term = normalizeSearchTerm(rawTerm);
  if (!term) return false;

  // Use whole-word / whole-phrase matching so "Ross" does not match "across" or "gross".
  if (containsWholeSearchTerm(normalizedText, term)) return true;

  // Allow sensible partial matching for longer name/location fragments like "Lek" or "New Hav".
  // Keep short searches stricter to avoid accidental matches.
  return term.length >= 4 && normalizedText.split(/\s+/).some(word => word.startsWith(term));
}

function mentorNameMatchPriority(m, rawQuery) {
  const terms = parseKeywordTerms(rawQuery || "");
  if (!terms.length) return 0;

  const nameParts = getNameParts(m.name || "");
  const fullName = normalizeSearchTerm(nameParts.full || m.name || "");
  const nameTokens = fullName.split(/\s+/).filter(Boolean);

  return terms.reduce((priority, rawTerm) => {
    const term = normalizeSearchTerm(rawTerm);
    if (!term) return priority;

    if (fullName === term) return Math.max(priority, 5);       // exact full-name match
    if (nameTokens.includes(term)) return Math.max(priority, 4); // exact first/last name match
    if (nameTokens.some(token => token.startsWith(term))) return Math.max(priority, 3); // starts with
    if (containsSearchTermByWord(fullName, term)) return Math.max(priority, 2); // safe partial/phrase name match
    return priority;
  }, 0);
}

function mentorSearchRelevance(m, rawQuery) {
  const terms = searchTermsForQuery(rawQuery || "");
  if (!terms.length) return 0;

  const nameText = m.name || "";
  const specialtyText = listToText(m.specialties);
  const focusText = listToText(m.focusAreas);
  const locationText = [m.city, ...locationAliasesForMentor(m)].join(" ");
  const careerText = listToText(m.careerPaths);
  const keywordText = listToText(m.keywords);
  const blurbText = m.shortBlurb || "";
  const bioText = m.fullBio || "";
  const availabilityText = m.availability || "";

  return terms.reduce((best, term) => {
    const cleanTerm = normalizeSearchTerm(term);
    if (!cleanTerm) return best;

    const namePriority = mentorNameMatchPriority(m, cleanTerm);
    if (namePriority >= 5) return Math.max(best, 1000);
    if (namePriority >= 4) return Math.max(best, 900);
    if (namePriority >= 3) return Math.max(best, 700);
    if (namePriority >= 2) return Math.max(best, 500);

    if (containsSearchTermByWord(specialtyText, cleanTerm)) return Math.max(best, 350);
    if (containsSearchTermByWord(focusText, cleanTerm)) return Math.max(best, 300);
    if (containsSearchTermByWord(locationText, cleanTerm)) return Math.max(best, 250);
    if (containsSearchTermByWord(careerText, cleanTerm)) return Math.max(best, 175);
    if (containsSearchTermByWord(keywordText, cleanTerm)) return Math.max(best, 125);
    if (containsSearchTermByWord(blurbText, cleanTerm)) return Math.max(best, 75);
    if (containsSearchTermByWord(bioText, cleanTerm)) return Math.max(best, 50);
    if (containsSearchTermByWord(availabilityText, cleanTerm)) return Math.max(best, 25);

    return best;
  }, 0);
}

function sortMentorsByNameRelevance(list, rawQuery) {
  const query = (rawQuery || "").trim();
  return [...list].sort((a, b) => {
    const relevanceDiff = mentorSearchRelevance(b, query) - mentorSearchRelevance(a, query);
    if (relevanceDiff) return relevanceDiff;

    const namePriorityDiff = mentorNameMatchPriority(b, query) - mentorNameMatchPriority(a, query);
    if (namePriorityDiff) return namePriorityDiff;

    return a.name.localeCompare(b.name);
  });
}

function evaluateKeywordTerm(m, rawTerm, searchableText) {
  const term = rawTerm.trim();
  const namePriority = mentorNameMatchPriority(m, term);

  if (isKeywordDuplicateOfDropdownOption(term)) {
    return {
      matched: true,
      score: 0,
      reason: "",
      type: "duplicate-option"
    };
  }

  if (namePriority > 0) {
    return {
      matched: true,
      score: 3,
      reason: "This mentor's name matches your search.",
      type: "name"
    };
  }

  const relevance = mentorSearchRelevance(m, term);
  if (relevance > 0) {
    return {
      matched: true,
      score: 2,
      reason: `This mentor's profile discusses "${term}".`,
      type: "keyword",
      relevance
    };
  }

  return {
    matched: false,
    score: 0,
    reason: "",
    type: "none"
  };
}

function getDropdownOptions(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return [];

  return Array.from(select.options)
    .map(option => option.value || option.textContent)
    .map(value => value.trim())
    .filter(Boolean);
}

function isKeywordDuplicateOfDropdownOption(rawTerm) {
  const term = normalizeSearchTerm(rawTerm);
  if (!term) return false;

  const optionTerms = [
    ...getDropdownOptions("matchSpecialty"),
    ...getDropdownOptions("matchFocus")
  ].map(normalizeSearchTerm);

  const termWords = term.split(" ").filter(Boolean);

  return optionTerms.some(optionTerm => {
    if (!optionTerm) return false;

    const optionWords = optionTerm.split(" ").filter(Boolean);

    // Exact duplicate: "identity lived experience" = "identity lived experience"
    if (term === optionTerm) return true;

    // Phrase duplicate: "lived experience" appears inside "identity lived experience"
    if (optionTerm.includes(term) || term.includes(optionTerm)) return true;

    // Word-set duplicate: every word in the keyword appears in a dropdown option.
    // This catches small variations like "parenting psychiatrist" vs.
    // "Family life/parenting as a psychiatrist".
    return termWords.length > 0 && termWords.every(word => optionWords.includes(word));
  });
}

function scoreMentor(m, selectedSpecialty, selectedFocus, keyword) {
  let score = 0;
  const reasons = [];

  if (selectedSpecialty && hasItem(m.specialties, selectedSpecialty)) {
    score += 5;
    reasons.push(`Shares your selected specialty: ${selectedSpecialty}.`);
  }

  if (selectedFocus && hasItem(m.focusAreas, selectedFocus)) {
    score += 5;
    reasons.push(`Shares your mentorship interest: ${selectedFocus}.`);
  }

  const keywordTerms = parseKeywordTerms(keyword);

  if (keywordTerms.length > 0) {
    const searchableText = buildMentorSearchText(m);

    const keywordMatches = keywordTerms.map(term =>
      evaluateKeywordTerm(m, term, searchableText)
    );

    // AND behavior: when the resident uses X AND Y, the mentor only receives
    // keyword points if every non-duplicate keyword term is found.
    const meaningfulKeywordMatches = keywordMatches.filter(match => match.type !== "duplicate-option");
    const allKeywordTermsMatched = meaningfulKeywordMatches.every(match => match.matched);

    if (meaningfulKeywordMatches.length > 0 && allKeywordTermsMatched) {
      const keywordReasons = meaningfulKeywordMatches
        .map(match => match.reason)
        .filter(Boolean);

      // If the resident only enters a keyword and the mentor matches it, display as a full fit
      // for that criterion rather than a partial score.
      score += 5;
      reasons.push(...keywordReasons);
    }
  }

  if (reasons.length === 0) {
    reasons.push("No exact match to the selected criteria; shown for browsing.");
  }

  return {
    score,
    reasons,
    summary: summarizeMatch(reasons, score)
  };
}

function runMatch() {
  const selectedSpecialty = document.getElementById("matchSpecialty").value;
  const selectedFocus = document.getElementById("matchFocus").value;
  const keyword = document.getElementById("matchKeyword").value.trim();
  const maxScore = getMatchMaxScore(selectedSpecialty, selectedFocus, keyword);

  if (maxScore === 0) {
    selectedMentorName = null;
    renderWelcomePanel();
    resetResultsHeader();
    render(mentors, "browse");
    return;
  }

  selectedMentorName = null;
  renderWelcomePanel();

  const ranked = mentors
    .map(m => {
      const match = scoreMentor(m, selectedSpecialty, selectedFocus, keyword);
      const percent = getMatchPercent(match.score, maxScore);
      return {
        ...m,
        matchScore: match.score,
        matchMaxScore: maxScore,
        matchPercent: percent,
        matchReasons: match.reasons,
        matchSummary: match.summary
      };
    })
    .sort((a, b) => {
      const relevanceDiff = mentorSearchRelevance(b, keyword) - mentorSearchRelevance(a, keyword);
      if (keyword && relevanceDiff) return relevanceDiff;
      const namePriorityDiff = mentorNameMatchPriority(b, keyword) - mentorNameMatchPriority(a, keyword);
      if (namePriorityDiff) return namePriorityDiff;
      return b.matchPercent - a.matchPercent || b.matchScore - a.matchScore || a.name.localeCompare(b.name);
    });

  setMatchResultsHeader(ranked);
  render(ranked, "match");
}

document.getElementById("search").addEventListener("input", () => refresh(true));
document.getElementById("specialtyFilter").addEventListener("change", () => refresh(true));
document.getElementById("focusFilter").addEventListener("change", () => refresh(true));
document.getElementById("resetMapButton").addEventListener("click", viewAllMentorsOnMap);

const FEEDBACK_EMAIL = "ruby.lekwauwa@yale.edu";

function feedbackMailto(type) {
  const templates = {
    success: {
      subject: "T-MACS Summer Pilot Feedback: Success",
      body: `Hello Dr. Lekwauwa,

I'd like to share something that worked well about the T-MACS Mentor Network:

What worked well?


Was a mentor involved? If so, who?


May we share your comments anonymously? Yes / No


Thank you!`
    },
    issue: {
      subject: "T-MACS Summer Pilot Feedback: Issue",
      body: `Hello Dr. Lekwauwa,

I'd like to report an issue with the T-MACS Mentor Network:

What happened?


Where did it occur? Mentor profile, map, matching tool, scheduling link, or other?


How could we reproduce it? Optional.


Thank you!`
    },
    idea: {
      subject: "T-MACS Summer Pilot Feedback: Idea",
      body: `Hello Dr. Lekwauwa,

I'd like to suggest an idea for the T-MACS Mentor Network:

What is your idea?


How would it improve TMACS?


Who would benefit most? Resident / Mentor / Both / Faculty / Other


Would you be willing to help us improve TMACS further? Yes / No

Name and email, optional:


Thank you!`
    }
  };

  const template = templates[type];
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`;
}

let lastFocusedElementBeforeFeedback = null;

function getFeedbackFocusableElements() {
  const modal = document.getElementById("feedbackModal");
  return Array.from(modal.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )).filter(element => element.offsetParent !== null);
}

function setPageInert(isInert) {
  [document.querySelector("header"), document.getElementById("main-content"), document.querySelector("footer")].forEach(region => {
    if (!region) return;
    if (isInert) {
      region.setAttribute("inert", "");
      region.setAttribute("aria-hidden", "true");
    } else {
      region.removeAttribute("inert");
      region.removeAttribute("aria-hidden");
    }
  });
}

function openFeedbackModal() {
  lastFocusedElementBeforeFeedback = document.activeElement;
  const modal = document.getElementById("feedbackModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  setPageInert(true);
  const focusable = getFeedbackFocusableElements();
  if (focusable.length) {
    focusable[0].focus();
  }
}

function closeFeedbackModal() {
  const modal = document.getElementById("feedbackModal");
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  setPageInert(false);
  if (lastFocusedElementBeforeFeedback && typeof lastFocusedElementBeforeFeedback.focus === "function") {
    lastFocusedElementBeforeFeedback.focus();
  }
}

function handleFeedbackModalKeydown(event) {
  const modal = document.getElementById("feedbackModal");
  if (!modal.classList.contains("open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeFeedbackModal();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = getFeedbackFocusableElements();
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: userPrefersReducedMotion() ? "auto" : "smooth" });
}

document.getElementById("openFeedbackModal").addEventListener("click", openFeedbackModal);
document.getElementById("closeFeedbackModal").addEventListener("click", closeFeedbackModal);
document.getElementById("backToTopButton").addEventListener("click", backToTop);
const FEEDBACK_FORM_LINKS = {
  success: "https://forms.cloud.microsoft/r/ZfgnM0iBr7",
  issue: "https://forms.cloud.microsoft/r/2GzV59jqQA",
  idea: "https://forms.cloud.microsoft/r/fSSC0Z2XEt"
};

function setFeedbackFormLink(elementId, url) {
  const link = document.getElementById(elementId);
  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
}

setFeedbackFormLink("successFeedbackLink", FEEDBACK_FORM_LINKS.success);
setFeedbackFormLink("issueFeedbackLink", FEEDBACK_FORM_LINKS.issue);
setFeedbackFormLink("ideaFeedbackLink", FEEDBACK_FORM_LINKS.idea);

document.getElementById("feedbackModal").addEventListener("click", event => {
  if (event.target.id === "feedbackModal") {
    closeFeedbackModal();
  }
});

document.addEventListener("keydown", handleFeedbackModalKeydown);

function clearWelcomeTourClasses(clearCompleted = false) {
  document.querySelectorAll(".tour-highlight, .tour-highlight-soft").forEach(element => {
    element.classList.remove("tour-highlight", "tour-highlight-soft");
  });
  document.querySelectorAll(".tour-step-active").forEach(element => {
    element.classList.remove("tour-step-active");
  });
  if (clearCompleted) {
    document.querySelectorAll(".tour-step-complete").forEach(element => {
      element.classList.remove("tour-step-complete");
    });
  }
  const schedulePreview = document.getElementById("schedulePreview");
  const meetPop = document.getElementById("meetPop");
  const connectPop = document.getElementById("connectPop");
  if (schedulePreview) schedulePreview.classList.remove("visible");
  if (meetPop) meetPop.classList.remove("visible");
  if (connectPop) connectPop.classList.remove("visible");
}

function addTourHighlights(selectors, soft = false) {
  selectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add(soft ? "tour-highlight-soft" : "tour-highlight");
    }
  });
}

let welcomeTourTimeouts = [];
let welcomeTourCancelHandlers = [];
let welcomeTourAudioHandlers = [];
let activeVoiceCueIndex = -1;

function stopWelcomeTour(clearCompleted = true) {
  welcomeTourTimeouts.forEach(timeout => window.clearTimeout(timeout));
  welcomeTourTimeouts = [];

  welcomeTourCancelHandlers.forEach(({ eventName, handler }) => {
    window.removeEventListener(eventName, handler, true);
  });
  welcomeTourCancelHandlers = [];

  const audio = document.getElementById("tourAudio");
  if (audio) {
    welcomeTourAudioHandlers.forEach(({ eventName, handler }) => {
      audio.removeEventListener(eventName, handler);
    });
    welcomeTourAudioHandlers = [];
    audio.pause();
    audio.currentTime = 0;
  }
  activeVoiceCueIndex = -1;

  const note = document.getElementById("tourAudioNote");
  if (note) {
    note.textContent = "Voice starts after you press the voice tour button.";
    note.classList.remove("active");
  }

  clearWelcomeTourClasses(clearCompleted);
}

function applyVoiceTourCue(cueName) {
  const detailContent = document.getElementById("detailContent");
  const step1 = document.getElementById("welcomeStep1");
  const step2 = document.getElementById("welcomeStep2");
  const step3 = document.getElementById("welcomeStep3");
  const schedulePreview = document.getElementById("schedulePreview");
  const connectPop = document.getElementById("connectPop");
  if (!detailContent || !step1 || !step2 || !step3) return;

  clearWelcomeTourClasses(false);

  switch (cueName) {
    case "intro":
      detailContent.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "find-search":
      step1.classList.add("tour-step-active");
      addTourHighlights([".match-box"], false);
      detailContent.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "find-browse":
      step1.classList.add("tour-step-active");
      addTourHighlights(["#resultsTitle", "#mentorList"], false);
      break;
    case "find-map":
      step1.classList.add("tour-step-active");
      addTourHighlights([".map-shell"], false);
      break;
    case "map-access":
      step1.classList.add("tour-step-active");
      addTourHighlights([".map-shell", ".map-access-note"], false);
      break;
    case "find-all":
      step1.classList.add("tour-step-active");
      addTourHighlights([".match-box", "#resultsTitle", "#mentorList", ".map-shell", ".map-access-note"], false);
      break;
    case "schedule":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-active");
      if (schedulePreview) schedulePreview.classList.add("visible");
      addTourHighlights(["#detailPanel"], true);
      detailContent.scrollTo({ top: Math.max(step2.offsetTop - 12, 0), behavior: "smooth" });
      break;
    case "schedule-button":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-active");
      if (schedulePreview) schedulePreview.classList.add("visible");
      addTourHighlights(["#schedulePreview", ".preview-button"], false);
      detailContent.scrollTo({ top: Math.max(step2.offsetTop - 12, 0), behavior: "smooth" });
      break;
    case "connect":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-complete");
      step3.classList.add("tour-step-active");
      if (connectPop) connectPop.classList.add("visible");
      detailContent.scrollTo({ top: Math.max(step3.offsetTop - 12, 0), behavior: "smooth" });
      break;
    case "complete":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-complete");
      step3.classList.add("tour-step-complete");
      if (connectPop) connectPop.classList.add("visible");
      break;
    case "settle":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-complete");
      step3.classList.add("tour-step-complete");
      detailContent.scrollTo({ top: 0, behavior: "smooth" });
      break;
  }
}

function startVoiceTourCueSync(audio, note) {
  activeVoiceCueIndex = -1;

  // Cue times are based on the current ElevenLabs welcome-tour.mp3.
  // They can be fine-tuned if the narration file changes again.
  const voiceCuePoints = [
    { time: 0.0, cue: "intro" },
    { time: 18.0, cue: "find-search" },
    { time: 23.4, cue: "find-browse" },
    { time: 27.2, cue: "find-map" },
    { time: 31.4, cue: "map-access" },
    { time: 38.0, cue: "find-all" },
    { time: 40.6, cue: "schedule" },
    { time: 47.0, cue: "schedule-button" },
    { time: 51.7, cue: "connect" },
    { time: 57.2, cue: "complete" },
    { time: 60.0, cue: "settle" }
  ];

  const onTimeUpdate = () => {
    const currentTime = audio.currentTime || 0;
    for (let index = activeVoiceCueIndex + 1; index < voiceCuePoints.length; index += 1) {
      if (currentTime >= voiceCuePoints[index].time) {
        activeVoiceCueIndex = index;
        applyVoiceTourCue(voiceCuePoints[index].cue);
      } else {
        break;
      }
    }
  };

  const onEnded = () => {
    applyVoiceTourCue("settle");
    if (note) {
      note.textContent = "Voice tour complete. Select any mentor to begin.";
      note.classList.remove("active");
    }
  };

  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("ended", onEnded);
  welcomeTourAudioHandlers.push({ eventName: "timeupdate", handler: onTimeUpdate });
  welcomeTourAudioHandlers.push({ eventName: "ended", handler: onEnded });
  onTimeUpdate();
}

function runWelcomeTourPreview(forceReplay = false, withVoice = false) {
  if (userPrefersReducedMotion()) return;
  if (selectedMentorName) return;

  const detailContent = document.getElementById("detailContent");
  const step1 = document.getElementById("welcomeStep1");
  const step2 = document.getElementById("welcomeStep2");
  const step3 = document.getElementById("welcomeStep3");
  const schedulePreview = document.getElementById("schedulePreview");
  const connectPop = document.getElementById("connectPop");
  const audio = document.getElementById("tourAudio");
  const note = document.getElementById("tourAudioNote");

  if (!detailContent || !step1 || !step2 || !step3) return;

  // Fully reset any previous tour before starting again.
  stopWelcomeTour(true);

  if (withVoice && audio) {
    audio.currentTime = 0;
    audio.play().then(() => {
      if (note) {
        note.textContent = "Voice tour is playing. You can start exploring at any time.";
        note.classList.add("active");
      }
      startVoiceTourCueSync(audio, note);
    }).catch(() => {
      if (note) {
        note.textContent = "Your browser blocked audio. Press the voice tour button again, or check that welcome-tour.mp3 was uploaded with index.html.";
        note.classList.add("active");
      }
    });
  }

  const queue = (callback, delay) => {
    const timeout = window.setTimeout(() => {
      if (!selectedMentorName) callback();
    }, delay);
    welcomeTourTimeouts.push(timeout);
  };

  if (withVoice) {
    const cancelTour = event => {
      if (event && event.target && event.target.closest && event.target.closest(
        ".replay-tour-button, .voice-tour-button")) {
        return;
      }
      stopWelcomeTour(true);
    };

    ["click", "keydown", "pointerdown"].forEach(eventName => {
      window.addEventListener(eventName, cancelTour, true);
      welcomeTourCancelHandlers.push({ eventName, handler: cancelTour });
    });

    return;
  }

  const t = {
        start: 1000,
        findSearch: 3200,
        findBrowse: 5600,
        findMap: 8000,
        findHold: 11000,
        schedule: 13000,
        connect: 17500,
        complete: 22000,
        settle: 25000
      };

  detailContent.scrollTo({ top: 0, behavior: forceReplay ? "smooth" : "auto" });

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-active");
    addTourHighlights([".match-box"], false);
  }, t.start);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-active");
    addTourHighlights(["#resultsTitle", "#mentorList"], false);
  }, t.findSearch);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-active");
    addTourHighlights([".map-shell"], false);
  }, t.findBrowse);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-active");
    addTourHighlights([".match-box", "#resultsTitle", "#mentorList", ".map-shell"], false);
  }, t.findMap);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-complete");
    addTourHighlights([".map-access-note"], false);
  }, t.findHold);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-complete");
    step2.classList.add("tour-step-active");
    if (schedulePreview) schedulePreview.classList.add("visible");
    addTourHighlights(["#detailPanel"], true);
    detailContent.scrollTo({ top: Math.max(step2.offsetTop - 12, 0), behavior: "smooth" });
  }, t.schedule);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-complete");
    step2.classList.add("tour-step-complete");
    step3.classList.add("tour-step-active");
    if (connectPop) connectPop.classList.add("visible");
    detailContent.scrollTo({ top: Math.max(step3.offsetTop - 12, 0), behavior: "smooth" });
  }, t.connect);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-complete");
    step2.classList.add("tour-step-complete");
    step3.classList.add("tour-step-complete");
    if (connectPop) connectPop.classList.add("visible");
  }, t.complete);

  queue(() => {
    clearWelcomeTourClasses(false);
    step1.classList.add("tour-step-complete");
    step2.classList.add("tour-step-complete");
    step3.classList.add("tour-step-complete");
    detailContent.scrollTo({ top: 0, behavior: "smooth" });
    if (note && withVoice) {
      note.textContent = "Voice tour complete. Select any mentor to begin.";
      note.classList.remove("active");
    }
  }, t.settle);

  const cancelTour = event => {
    if (event && event.target && event.target.closest && event.target.closest(
      ".replay-tour-button, .voice-tour-button")) {
      return;
    }
    stopWelcomeTour(true);
  };

  ["click", "keydown", "pointerdown"].forEach(eventName => {
    window.addEventListener(eventName, cancelTour, true);
    welcomeTourCancelHandlers.push({ eventName, handler: cancelTour });
  });
}

map.on("load", () => {
  renderWelcomePanel();
  refresh(false);
  runWelcomeTourPreview();
});

function highlightSelectedCard() {
  document.querySelectorAll(".mentor-card").forEach(card => {
    const isSelected = card.dataset.name === selectedMentorName;
    card.classList.toggle("active", isSelected);
    if (isSelected) {
      card.setAttribute("aria-current", "true");
    } else {
      card.removeAttribute("aria-current");
    }
  });
}

function scrollToMobileSection(section) {
  let target;

  if (section === "match") {
    target = document.querySelector(".sidebar");
  }

  if (section === "browse") {
    target = document.querySelector(".browse-title");
  }

  if (section === "map") {
    target = document.querySelector(".map-shell");
  }

  if (section === "tutorial") {

    restoreTutorialPanel();

    target = document.querySelector("#detailPanel");

}

  if (target) {
    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  }
}

(function enhanceMobileMatchExperience() {
  const matchBox = document.querySelector(".match-box");
  const matchButton = matchBox ? matchBox.querySelector("button") : null;

  if (!matchBox || !matchButton) return;

  const loader = document.createElement("div");
  loader.className = "mobile-matching-loader";
  loader.textContent = "✨ Finding your best mentor matches...";
  matchBox.appendChild(loader);

  const originalClick = matchButton.onclick;

  matchButton.onclick = function () {
    loader.classList.add("visible");

    setTimeout(() => {
      if (typeof originalClick === "function") {
        originalClick.call(matchButton);
      } else if (typeof runMatch === "function") {
        runMatch();
      }

      loader.classList.remove("visible");

      const results = document.querySelector("#mentorList");
      if (results) {
        results.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 900);
  };
})();
(function makeMobileMentorCardsOpenProfile() {
  document.addEventListener("click", function (event) {
    const card = event.target.closest(".mentor-card");

    if (!card) return;
    if (window.innerWidth > 768) return;

    setTimeout(() => {
      const profilePanel = document.querySelector("#detailPanel");

      if (profilePanel) {
        profilePanel.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 250);
  });
})();
function restoreTutorialPanel() {
  const detailContent = document.querySelector("#detailContent");

  if (!detailContent) return;

  detailContent.innerHTML = `
    <div class="welcome-card">
      <h2>👋 Welcome to T-MACS</h2>
      <p class="welcome-subtitle">Finding a mentor is as easy as 1–2–3.</p>

      <div class="welcome-step">
        <span class="step-number">1</span>
        <div>
          <strong>Find</strong>
          <p>Browse mentors using the searchable mentor list by specialty, location, or mentorship interest, or explore mentors visually on the interactive map.</p>
        </div>
      </div>

      <div class="welcome-step">
        <span class="step-number">2</span>
        <div>
          <strong>Schedule</strong>
          <p>Use your mentor's preferred scheduling option to find a time to connect.</p>
        </div>
      </div>

      <div class="welcome-step">
        <span class="step-number">3</span>
        <div>
          <strong>Connect</strong>
          <p>Build meaningful mentoring relationships that support your growth throughout residency and beyond.</p>
        </div>
      </div>

      <div class="ready-box">
        <strong>Ready to get started?</strong>
        <p>Select any mentor from the list or map to view their full profile.</p>
        <button class="voice-tour-button" type="button" onclick="startWelcomeTourWithVoice()">▶ Start Tour with Voice</button>
        <button class="replay-tour-button" type="button" onclick="replayWelcomeTour()">▶ Replay Tour</button>
        <div class="tour-audio-note">Voice starts after you press the voice tour button.</div>
      </div>
    </div>
  `;
}
function startWelcomeTourWithVoice() {
  if (typeof renderWelcomePanel === "function") {
    renderWelcomePanel();
  }

  setTimeout(() => {
    const panel = document.querySelector("#detailPanel");
    if (panel) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (typeof runWelcomeTourPreview === "function") {
      runWelcomeTourPreview(true, true);
    }
  }, 150);
}
function scrollMobileTourTarget(selector) {
  if (window.innerWidth > 768) return;

  const target = document.querySelector(selector);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function applyVoiceTourCue(cueName) {
  const detailContent = document.getElementById("detailContent");
  const step1 = document.getElementById("welcomeStep1");
  const step2 = document.getElementById("welcomeStep2");
  const step3 = document.getElementById("welcomeStep3");
  const schedulePreview = document.getElementById("schedulePreview");
  const connectPop = document.getElementById("connectPop");

  if (!detailContent || !step1 || !step2 || !step3) return;

  clearWelcomeTourClasses(false);

  switch (cueName) {
    case "intro":
      scrollMobileTourTarget("#detailPanel");
      break;

    case "find-search":
      step1.classList.add("tour-step-active");
      addTourHighlights([".match-box"], false);
      scrollMobileTourTarget(".match-box");
      break;

    case "find-browse":
      step1.classList.add("tour-step-active");
      addTourHighlights(["#resultsTitle", "#mentorList"], false);
      scrollMobileTourTarget(".browse-title");
      break;

    case "find-map":
    case "map-access":
      step1.classList.add("tour-step-active");
      addTourHighlights([".map-shell"], false);
      scrollMobileTourTarget(".map-shell");
      break;

    case "find-all":
      step1.classList.add("tour-step-active");
      addTourHighlights([".match-box", "#resultsTitle", "#mentorList", ".map-shell"], false);
      scrollMobileTourTarget(".sidebar");
      break;

    case "schedule":
    case "schedule-button":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-active");
      if (schedulePreview) schedulePreview.classList.add("visible");
      addTourHighlights(["#detailPanel", "#schedulePreview", ".preview-button"], false);
      scrollMobileTourTarget("#detailPanel");
      break;

    case "connect":
    case "complete":
    case "settle":
      step1.classList.add("tour-step-complete");
      step2.classList.add("tour-step-complete");
      step3.classList.add("tour-step-active");
      if (connectPop) connectPop.classList.add("visible");
      scrollMobileTourTarget("#detailPanel");
      break;
  }
}function scrollMobileTourTarget(selector) {
  if (window.innerWidth > 768) return;

  const target = document.querySelector(selector);
  if (!target) return;

  const y = target.getBoundingClientRect().top + window.pageYOffset - 12;

  window.scrollTo({
    top: Math.max(y, 0),
    behavior: "smooth"
  });
}

const originalApplyVoiceTourCue = applyVoiceTourCue;

applyVoiceTourCue = function(cueName) {
  originalApplyVoiceTourCue(cueName);

  if (cueName === "find-search") {
    scrollMobileTourTarget(".match-box");
  }

  if (cueName === "find-browse") {
    scrollMobileTourTarget(".browse-title");
  }

  if (cueName === "find-map" || cueName === "map-access") {
    scrollMobileTourTarget(".map-shell");
  }

  if (cueName === "schedule" || cueName === "schedule-button" || cueName === "connect") {
    scrollMobileTourTarget("#detailPanel");
  }
};