// your'IT — application logic

const careers = [
    {
        id: 'swe',
        name: 'Software & Web Engineering',
        short: 'Software Developer',
        desc: 'สร้างเว็บไซต์ แอปพลิเคชัน และระบบซอฟต์แวร์ที่แก้ปัญหาให้ผู้ใช้งาน',
        faculty: 'วิทยาการคอมพิวเตอร์ (CS), วิศวกรรมซอฟต์แวร์ (SE), เทคโนโลยีสารสนเทศ (IT)',
        skills: ['Programming', 'Problem Solving', 'Web Development'],
        icon: '⌘'
    },
    {
        id: 'data',
        name: 'Data Science & AI',
        short: 'Data Scientist / AI',
        desc: 'วิเคราะห์ข้อมูล ค้นหารูปแบบ และสร้างโมเดล AI เพื่อช่วยในการตัดสินใจ',
        faculty: 'วิทยาการคอมพิวเตอร์ (CS), วิทยาการข้อมูล (DS), AI Engineering',
        skills: ['Mathematics', 'Python', 'Statistics'],
        icon: '◈'
    },
    {
        id: 'cyber',
        name: 'Cybersecurity & Defense',
        short: 'Cybersecurity Analyst',
        desc: 'ปกป้องระบบ เครือข่าย และข้อมูลจากภัยคุกคามทางไซเบอร์',
        faculty: 'Cybersecurity, Computer Engineering (CPE), IT',
        skills: ['Networking', 'Security', 'Analytical Thinking'],
        icon: '⬡'
    },
    {
        id: 'ux',
        name: 'UX/UI & Product Design',
        short: 'UX/UI Designer',
        desc: 'ออกแบบประสบการณ์ดิจิทัลที่ใช้งานง่าย เข้าใจผู้ใช้ และตอบโจทย์จริง',
        faculty: 'Digital Media, Interaction Design, IT',
        skills: ['Design Thinking', 'Empathy', 'Visual Design'],
        icon: '✳'
    },
    {
        id: 'cloud',
        name: 'Cloud Architecture & DevOps',
        short: 'Cloud / DevOps Engineer',
        desc: 'ดูแลโครงสร้างพื้นฐาน ระบบคลาวด์ และทำให้การส่งมอบซอฟต์แวร์เป็นอัตโนมัติ',
        faculty: 'Computer Engineering (CPE), IT, Network Engineering',
        skills: ['Linux', 'Networking', 'Automation'],
        icon: '☁'
    },
    {
        id: 'game',
        name: 'Game Dev & Virtual Worlds',
        short: 'Game Developer',
        desc: 'สร้างเกม โลกเสมือนจริง และประสบการณ์โต้ตอบด้วยโค้ดและคณิตศาสตร์',
        faculty: 'Computer Science, Game Development, Digital Technology',
        skills: ['C#', '3D Math', 'Creative Logic'],
        icon: '▣'
    },
    {
        id: 'support',
        name: 'IT Support & System Administration',
        short: 'IT Support / SysAdmin',
        desc: 'ดูแลเครื่อง ระบบ และผู้ใช้ในองค์กร แก้ปัญหาหน้างานให้ทุกอย่างทำงานต่อเนื่อง',
        faculty: 'Information Technology (IT), Computer Engineering (CPE), Computer Science (CS)',
        skills: ['Troubleshooting', 'Windows / Linux', 'Communication'],
        icon: '✚'
    },
    {
        id: 'network',
        name: 'Network Engineering & Infrastructure',
        short: 'Network Engineer',
        desc: 'ออกแบบ ติดตั้ง และดูแลเครือข่าย ให้ข้อมูลเดินทางได้เร็ว เสถียร และปลอดภัย',
        faculty: 'Computer Engineering (CPE), Telecommunication Engineering, Information Technology (IT)',
        skills: ['Routing & Switching', 'TCP/IP', 'Network Security'],
        icon: '⌗'
    },
    {
        id: 'qa',
        name: 'Quality Assurance & Software Testing',
        short: 'QA / Software Tester',
        desc: 'ตรวจสอบคุณภาพซอฟต์แวร์ หาบั๊กก่อนถึงมือผู้ใช้ และออกแบบวิธีทดสอบที่ครอบคลุม',
        faculty: 'Software Engineering (SE), Computer Science (CS), Information Technology (IT)',
        skills: ['Test Design', 'Attention to Detail', 'Test Automation'],
        icon: '✓'
    },
    {
        id: 'analyst',
        name: 'Systems & Business Analysis',
        short: 'System Analyst',
        desc: 'เชื่อมความต้องการของธุรกิจกับทีมเทคนิค วิเคราะห์ปัญหา และออกแบบระบบที่ตอบโจทย์จริง',
        faculty: 'Information Systems, Business IT, Software Engineering (SE)',
        skills: ['Requirements', 'Process Modeling', 'Communication'],
        icon: '▦'
    }
];

// ============================================================
// QUESTION BANK  — [emoji, title, subtitle, primary career (+2), related career (+1)]
// ============================================================
const questions = [
    {
        cat: 'Hobbies',
        q: 'วันหยุดยาว ไม่มีแผนอะไรเลย คุณมักจะใช้เวลาไปกับอะไร?',
        a: [
            ['🎮', 'เล่นเกมหรือดูสตรีมเมอร์', 'ชอบอยู่ในโลกที่คนอื่นสร้างไว้', 'game', 'ux'],
            ['🔧', 'รื้อ ประกอบ ซ่อมของ', 'อยากรู้ว่าข้างในมันทำงานยังไง', 'cloud', 'cyber'],
            ['📺', 'ดูสารคดี อ่านข่าวเรื่องน่าสงสัย', 'ชอบหาคำตอบว่า "ทำไมถึงเป็นแบบนั้น"', 'data', 'cyber'],
            ['✏️', 'วาดรูป ตกแต่งภาพ จัดโน้ตให้สวย', 'ชอบให้ของที่ทำออกมาดูดี', 'ux', 'game'],
            ['🖥️', 'ช่วยเพื่อนหรือญาติแก้คอมและมือถือ', 'มักเป็นคนที่ถูกเรียกไปช่วยเสมอ', 'support', 'network']
        ]
    },
    {
        cat: 'Everyday Tech',
        q: 'เวลาใช้แอปแล้วเจอจุดที่ใช้ยาก คุณมักจะคิดอะไร?',
        a: [
            ['😤', '"ปุ่มนี้ควรอยู่อีกที่"', 'อดคิดไม่ได้ว่าควรจัดหน้าจอใหม่', 'ux', 'swe'],
            ['🐛', '"บั๊กนี้น่าจะมาจากโค้ดตรงไหน"', 'ชอบเดาว่าข้างหลังเขียนไว้ยังไง', 'swe', 'cloud'],
            ['🕳️', '"ลองกดแปลก ๆ จะหลุดเข้าไปได้ไหม"', 'ชอบทดสอบขอบเขตของระบบ', 'cyber', 'swe'],
            ['📊', '"คนอื่นเจอเหมือนเรากี่คนนะ"', 'อยากรู้ว่าเกิดขึ้นบ่อยแค่ไหน', 'data', 'ux'],
            ['🔎', '"ถ้ากดแบบนั้นแล้วจะเกิดอะไรขึ้น"', 'ชอบลองทุกกรณีเพื่อดูว่าพังไหม', 'qa', 'swe']
        ]
    },
    {
        cat: 'Gaming',
        q: 'ถ้าคุณชอบเล่นเกม ส่วนไหนของเกมที่ทำให้คุณสนใจที่สุด?',
        a: [
            ['🗺️', 'โลก เนื้อเรื่อง และการออกแบบด่าน', 'ชอบคิดว่าใครสร้างฉากนี้ขึ้นมา', 'game', 'ux'],
            ['📈', 'ตัวเลข ดาเมจ อัตราดรอปไอเทม', 'ชอบคำนวณว่าอะไรคุ้มที่สุด', 'data', 'game'],
            ['📡', 'ปิง เซิร์ฟเวอร์ ทำไมเกมหลุด', 'สงสัยว่าระบบข้างหลังรับคนเล่นมหาศาลได้ยังไง', 'cloud', 'game'],
            ['🪲', 'บั๊กและช่องโหว่ของเกม', 'สนุกกับการหาจุดที่ระบบพลาด', 'cyber', 'game'],
            ['📝', 'คิดข้อเสนอว่าเกมควรปรับสมดุลตรงไหน', 'ชอบสรุปสิ่งที่เห็นเป็นข้อแนะนำ', 'analyst', 'data']
        ]
    },
    {
        cat: 'Scenario',
        q: 'เว็บร้านเพื่อนล่มตอนมีโปรโมชันคนเข้าเยอะ คุณจะเริ่มทำอะไรก่อน?',
        a: [
            ['☁️', 'หาวิธีเพิ่มทรัพยากรให้เว็บรับคนได้มากขึ้น', 'คิดเรื่องเซิร์ฟเวอร์และการขยายระบบ', 'cloud', 'swe'],
            ['🚨', 'เช็กว่าถูกโจมตีหรือมีคนแปลกปลอมไหม', 'ดูร่องรอยการเข้าใช้งานผิดปกติ', 'cyber', 'cloud'],
            ['⌨️', 'หาโค้ดส่วนที่ทำงานช้าแล้วแก้', 'เข้าไปไล่โค้ดทีละจุด', 'swe', 'cloud'],
            ['🕐', 'ดูว่าช่วงไหนคนเข้ามากที่สุด', 'เอาตัวเลขมาวางแผนรับมือรอบหน้า', 'data', 'cloud'],
            ['📞', 'แจ้งวิธีใช้งานชั่วคราวให้เพื่อนระหว่างแก้', 'ดูแลให้คนใช้งานต่อได้ก่อน', 'support', 'analyst']
        ]
    },
    {
        cat: 'Habits',
        q: 'คุณมักจะจัดระเบียบหรือสะสมอะไรเป็นพิเศษ?',
        a: [
            ['🗂️', 'ตารางข้อมูล สเปรดชีต บันทึกรายจ่าย', 'ชอบเห็นตัวเลขเรียงเป็นระเบียบ', 'data', 'swe'],
            ['⚙️', 'ไฟล์ โฟลเดอร์ และทางลัดที่ทำให้งานอัตโนมัติ', 'ชอบสร้างระบบให้ตัวเองสบาย', 'cloud', 'swe'],
            ['🎨', 'โน้ต ธีม ห้อง หรือโต๊ะที่จัดแล้วสวย', 'ใส่ใจหน้าตาและบรรยากาศ', 'ux', 'game'],
            ['🔑', 'รหัสผ่านและบัญชีที่ตั้งไว้แน่นหนา', 'รู้สึกอุ่นใจเมื่อทุกอย่างปลอดภัย', 'cyber', 'cloud'],
            ['☑️', 'เช็กลิสต์ตรวจทานซ้ำก่อนส่งทุกครั้ง', 'ไม่อยากให้มีจุดพลาดเล็ก ๆ หลุดไป', 'qa', 'cyber']
        ]
    },
    {
        cat: 'Helping Friends',
        q: 'เพื่อนขอให้ช่วยทำบางอย่าง คุณถนัดช่วยเรื่องไหนมากที่สุด?',
        a: [
            ['🌐', 'ทำเว็บหรือแอปเล็ก ๆ ให้', 'ลองเขียนอะไรง่าย ๆ ให้ใช้ได้จริง', 'swe', 'ux'],
            ['🎣', 'เช็กว่าข้อความหรือลิงก์นี้หลอกลวงไหม', 'จับพิรุธเก่ง', 'cyber', 'data'],
            ['🖼️', 'ออกแบบโปสเตอร์ สไลด์ หรือโลโก้', 'ทำให้งานดูน่าสนใจขึ้น', 'ux', 'game'],
            ['🧮', 'สรุปตัวเลขและเปรียบเทียบตัวเลือกให้', 'ช่วยตัดสินใจจากข้อมูล', 'data', 'swe'],
            ['📶', 'ตั้งค่าไวไฟหรือเราเตอร์ที่บ้านให้ครบทุกห้อง', 'ชอบทำให้สัญญาณเสถียร', 'network', 'support']
        ]
    },
    {
        cat: 'Tech News',
        q: 'ข่าวเทคโนโลยีแบบไหนที่ทำให้คุณหยุดอ่าน?',
        a: [
            ['🤖', 'AI วาดรูป เขียนข้อความ หรือทำนายได้', 'อยากรู้ว่าเบื้องหลังมันทำงานยังไง', 'data', 'ux'],
            ['🔓', 'ข้อมูลรั่วไหล หรือแฮกเกอร์เจาะระบบ', 'อยากรู้ว่าเกิดได้ยังไงและป้องกันอย่างไร', 'cyber', 'data'],
            ['🥽', 'เกมใหม่ โลกเสมือนจริง หรือ VR', 'สนใจประสบการณ์ที่เหมือนจริง', 'game', 'ux'],
            ['📱', 'แอปหรือฟีเจอร์ใหม่ที่คนใช้กันทั้งโลก', 'อยากรู้ว่าสร้างขึ้นมาได้ยังไง', 'swe', 'ux'],
            ['📡', 'อินเทอร์เน็ต สายใยแก้ว หรือเทคโนโลยี 5G', 'อยากรู้ว่าข้อมูลเดินทางไปได้ไกลแค่ไหน', 'network', 'cloud']
        ]
    },
    {
        cat: 'Flow State',
        q: 'งานแบบไหนที่คุณทำแล้ว "ลืมเวลา" ได้ง่ายที่สุด?',
        a: [
            ['🧠', 'ไล่ลอจิกจนโปรแกรมทำงานผ่าน', 'ชอบความรู้สึกตอนแก้ได้สำเร็จ', 'swe', 'game'],
            ['🕵️', 'ตามหาต้นเหตุของความผิดปกติ', 'ยอมนั่งสืบจนกว่าจะเจอ', 'cyber', 'cloud'],
            ['🖌️', 'ปรับรายละเอียดทีละนิดจนลงตัว', 'ใส่ใจเรื่องช่องไฟ สี และความรู้สึก', 'ux', 'game'],
            ['🔌', 'ตั้งค่าระบบให้ทำงานเองได้ครบ', 'ชอบเห็นทุกอย่างเชื่อมกันอัตโนมัติ', 'cloud', 'swe'],
            ['🗺️', 'ไล่ทำความเข้าใจว่าระบบหนึ่งทำงานทีละขั้นอย่างไร', 'ชอบวาดผังให้เห็นภาพรวม', 'analyst', 'swe']
        ]
    },
    {
        cat: 'School Subjects',
        q: 'วิชาไหนในโรงเรียนที่คุณรู้สึกสนุกที่สุด?',
        a: [
            ['📐', 'คณิตศาสตร์และสถิติ', 'ชอบหารูปแบบและเหตุผลจากตัวเลข', 'data', 'game'],
            ['🎭', 'ศิลปะ ออกแบบ หรือภาษา', 'ชอบสื่อสารความคิดและสร้างสรรค์', 'ux', 'game'],
            ['🧩', 'คอมพิวเตอร์หรือวิชาที่ใช้ลอจิก', 'ชอบคิดเป็นขั้นตอน', 'swe', 'cyber'],
            ['🔬', 'วิทยาศาสตร์ ฟิสิกส์', 'ชอบรู้ว่าสิ่งต่าง ๆ ทำงานอย่างไร', 'cloud', 'game'],
            ['🗣️', 'ภาษา การนำเสนอ หรือวิชาธุรกิจ', 'ชอบอธิบายปัญหาให้คนอื่นเข้าใจ', 'analyst', 'ux']
        ]
    },
    {
        cat: 'Curiosity about AI',
        q: 'ถ้าได้คุยกับคนสร้าง AI คุณอยากถามเรื่องอะไร?',
        a: [
            ['📚', 'มันเรียนรู้จากข้อมูลได้ยังไง', 'สนใจกระบวนการเบื้องหลัง', 'data', 'swe'],
            ['🎭', 'มีใครหลอกหรือโจมตีมันได้ไหม', 'สนใจจุดอ่อนและความเสี่ยง', 'cyber', 'data'],
            ['💬', 'ทำให้คนทั่วไปใช้งานง่ายได้ยังไง', 'สนใจประสบการณ์ของผู้ใช้', 'ux', 'swe'],
            ['🏭', 'มันรันอยู่ที่ไหน ใช้เครื่องกี่ตัว', 'สนใจโครงสร้างพื้นฐานเบื้องหลัง', 'cloud', 'data'],
            ['🧪', 'มันตอบผิดได้เมื่อไหร่ และต้องทดสอบยังไง', 'สนใจการหาจุดที่ AI พลาด', 'qa', 'data']
        ]
    },
    {
        cat: 'Troubleshooting',
        q: 'เพื่อนบ่นว่าคอมหรือโทรศัพท์มีปัญหา คุณมักจะ...',
        a: [
            ['🛠️', 'ลองตั้งค่าหรือติดตั้งโปรแกรมแก้ให้', 'ชอบลงมือจัดการเครื่อง', 'cloud', 'swe'],
            ['⚠️', 'เตือนว่าอย่ากดลิงก์หรือไฟล์แปลก ๆ', 'คิดเรื่องความปลอดภัยก่อนเสมอ', 'cyber', 'ux'],
            ['📲', 'แนะนำแอปที่ใช้ง่ายกว่าให้', 'ชอบหาเครื่องมือที่เข้ากับคนนั้น', 'ux', 'swe'],
            ['❓', 'ถามอาการทีละข้อเพื่อหาสาเหตุ', 'ชอบไล่เหตุผลเป็นขั้นตอน', 'swe', 'data'],
            ['🔄', 'ถามว่า "ลองปิดแล้วเปิดใหม่หรือยัง" แล้วไล่เช็กทีละขั้น', 'แก้ปัญหาอย่างเป็นระบบจนคนใช้พอใจ', 'support', 'qa']
        ]
    },
    {
        cat: 'Side Project',
        q: 'ถ้าได้ทำโปรเจกต์ส่วนตัวหนึ่งอย่าง คุณอยากทำอะไร?',
        a: [
            ['🕹️', 'เกมเล็ก ๆ ที่เพื่อนเล่นได้', 'อยากให้คนสนุกกับสิ่งที่สร้าง', 'game', 'swe'],
            ['📊', 'แดชบอร์ดสรุปข้อมูลที่ตัวเองสนใจ', 'เช่น สถิติกีฬา รายจ่าย หรือการนอน', 'data', 'ux'],
            ['📝', 'แอปช่วยจัดชีวิตประจำวัน', 'เช่น แอปจดงาน แอปเตือนกินยา', 'swe', 'ux'],
            ['🗄️', 'เซิร์ฟเวอร์ที่บ้านเก็บไฟล์ของครอบครัว', 'อยากมีระบบเป็นของตัวเอง', 'cloud', 'cyber'],
            ['🏠', 'ตั้งเครือข่ายที่บ้านให้ทุกอุปกรณ์เชื่อมกันเสถียร', 'เช่น แยกไวไฟแขก หรือกล้องวงจรปิด', 'network', 'cyber']
        ]
    },
    {
        cat: 'Patience',
        q: 'งานแบบไหนที่คุณทนทำได้นานที่สุด?',
        a: [
            ['🔍', 'ตรวจรายละเอียดซ้ำ ๆ จนมั่นใจว่าไม่พลาด', 'ไม่ปล่อยให้อะไรหลุดผ่าน', 'cyber', 'data'],
            ['🔁', 'ลองแก้ไขหลายรอบจนออกมาสวย', 'ไม่เป็นไรถ้าต้องทำใหม่', 'ux', 'game'],
            ['📖', 'อ่านคู่มือยาว ๆ แล้วตั้งค่าตามทีละขั้น', 'ถ้าเป็นระบบที่ต้องทำให้ถูกต้อง', 'cloud', 'cyber'],
            ['⌨️', 'เขียนโค้ดยาว ๆ ทีละส่วนจนเสร็จ', 'ค่อย ๆ ต่อชิ้นส่วนให้ครบ', 'swe', 'game'],
            ['🔌', 'ลากสาย ต่ออุปกรณ์ ทดสอบสัญญาณจนใช้ได้ทุกจุด', 'ใจเย็นกับงานที่ต้องเช็กทีละจุด', 'network', 'support']
        ]
    },
    {
        cat: 'Puzzles',
        q: 'ปริศนาประเภทไหนที่คุณชอบเล่นมากที่สุด?',
        a: [
            ['🔦', 'ไขคดีหรือ Escape Room', 'ประกอบหลักฐานทีละชิ้น', 'cyber', 'data'],
            ['♟️', 'เกมวางแผนหรือเกมกลไก', 'คิดล่วงหน้าหลายสเต็ป', 'game', 'swe'],
            ['🌀', 'ภาพลวงตาหรือเกมที่ออกแบบสวย ๆ', 'ชอบดูว่าคนออกแบบหลอกตาเราอย่างไร', 'ux', 'game'],
            ['🚰', 'ต่อท่อ ต่อวงจร ให้ของไหลถึงปลายทาง', 'ชอบเห็นระบบเชื่อมกันครบ', 'cloud', 'swe'],
            ['🧭', 'โจทย์ธุรกิจที่ต้องหาก่อนว่าปัญหาจริง ๆ คืออะไร', 'ชอบแยกปัญหาออกเป็นส่วน ๆ', 'analyst', 'data']
        ]
    },
    {
        cat: 'Data in Life',
        q: 'ถ้าได้ใช้ข้อมูลจริงในชีวิตทำโปรเจกต์ คุณสนใจแบบไหน?',
        a: [
            ['🔮', 'ทำนายยอดขายหรือผลสอบล่วงหน้า', 'เห็นอนาคตจากข้อมูลในอดีต', 'data', 'swe'],
            ['💬', 'เก็บความเห็นผู้ใช้เพื่อปรับปรุงของ', 'เปลี่ยนเสียงคนให้เป็นแนวทางแก้ไข', 'ux', 'data'],
            ['💳', 'ตรวจจับธุรกรรมหรือบัญชีที่ผิดปกติ', 'ดักความเสี่ยงก่อนเกิดความเสียหาย', 'cyber', 'data'],
            ['🚚', 'สร้างระบบเก็บข้อมูลเข้าคลังโดยอัตโนมัติ', 'ให้ข้อมูลไหลเข้าเองตลอดเวลา', 'cloud', 'data'],
            ['🧾', 'จดเรื่องที่ผู้ใช้แจ้งบ่อย เพื่อแก้ที่ต้นเหตุ', 'เห็นรูปแบบของปัญหาที่เกิดซ้ำ', 'support', 'data']
        ]
    },
    {
        cat: 'Team Experience',
        q: 'ถ้าได้ฝึกงานหนึ่งสัปดาห์ในบริษัทเทคโนโลยี คุณอยากไปอยู่ทีมไหน?',
        a: [
            ['👨‍💻', 'ทีมนักพัฒนาที่เขียนโค้ดสร้างฟีเจอร์', 'อยากเห็นของใหม่เกิดขึ้นจริง', 'swe', 'ux'],
            ['📊', 'ทีมข้อมูลที่หาข้อมูลเชิงลึกให้ผู้บริหาร', 'อยากเห็นตัวเลขกลายเป็นคำตอบ', 'data', 'swe'],
            ['🎨', 'ทีมดีไซน์ที่ทดสอบหน้าจอกับผู้ใช้จริง', 'อยากรู้ว่าคนใช้งานเป็นอย่างไร', 'ux', 'data'],
            ['🛡️', 'ทีมความปลอดภัยที่ทดสอบระบบของบริษัท', 'อยากลองเป็นฝ่ายหาช่องโหว่', 'cyber', 'cloud'],
            ['🧪', 'ทีมทดสอบที่ตรวจคุณภาพก่อนปล่อยผลิตภัณฑ์', 'อยากเป็นด่านสุดท้ายก่อนถึงผู้ใช้', 'qa', 'swe']
        ]
    },
    {
        cat: 'Movies & Series',
        q: 'หนังหรือซีรีส์แบบไหนที่ทำให้คุณสนใจเทคโนโลยี?',
        a: [
            ['💻', 'แฮกเกอร์ล้วงข้อมูลหรือสืบสวนไซเบอร์', 'อยากรู้ว่าของจริงทำได้แค่ไหน', 'cyber', 'data'],
            ['🌌', 'โลกไซไฟ เมตาเวิร์ส หรือเกมในหนัง', 'อยากสร้างโลกแบบนั้นบ้าง', 'game', 'ux'],
            ['🚀', 'ทีมเล็ก ๆ สร้างสตาร์ทอัพหรือแอปดัง', 'อยากสร้างของที่เปลี่ยนโลก', 'swe', 'ux'],
            ['🦾', 'AI หุ่นยนต์ หรือระบบอัจฉริยะ', 'อยากรู้ว่าเครื่องคิดได้อย่างไร', 'data', 'swe'],
            ['🧑‍💼', 'ทีมที่ประสานธุรกิจกับเทคนิคจนโปรเจกต์สำเร็จ', 'อยากเป็นคนเชื่อมคนสองฝั่ง', 'analyst', 'swe']
        ]
    },
    {
        cat: 'Online Pain Points',
        q: 'อะไรที่ทำให้คุณหงุดหงิดที่สุดเวลาใช้บริการออนไลน์?',
        a: [
            ['⏳', 'โหลดช้า ล่มบ่อย หรือหลุดกลางทาง', 'อยากให้ระบบนิ่งและเสถียรกว่านี้', 'cloud', 'swe'],
            ['🕶️', 'รู้สึกว่าข้อมูลส่วนตัวถูกนำไปใช้เกินจำเป็น', 'อยากให้ข้อมูลของเราปลอดภัย', 'cyber', 'data'],
            ['😵', 'เมนูซับซ้อน หาอะไรไม่เจอ', 'อยากให้ใช้ง่ายและเข้าใจทันที', 'ux', 'swe'],
            ['🎯', 'ระบบแนะนำสิ่งที่ไม่ตรงกับเราเลย', 'สงสัยว่าเขาวิเคราะห์ข้อมูลเราผิดตรงไหน', 'data', 'ux'],
            ['🙋', 'ติดปัญหาแล้วหาคนช่วยยาก ไม่มีใครตอบ', 'อยากเป็นคนที่ช่วยผู้ใช้ได้ทัน', 'support', 'ux']
        ]
    },
    {
        cat: 'Friend Group',
        q: 'ในกลุ่มเพื่อน คุณมักจะเป็นคนที่...',
        a: [
            ['🎲', 'คิดกติกาหรือกิจกรรมให้ทุกคนสนุก', 'ชอบสร้างประสบการณ์ให้คนอื่น', 'game', 'ux'],
            ['✅', 'เช็กว่าทุกอย่างเรียบร้อยไม่มีอะไรหลุด', 'เป็นคนที่คอยกันความเสี่ยงให้ทีม', 'cyber', 'cloud'],
            ['⚖️', 'สรุปข้อมูลและเปรียบเทียบตัวเลือกให้ทุกคน', 'ช่วยกลุ่มตัดสินใจได้ง่ายขึ้น', 'data', 'swe'],
            ['💡', 'หาวิธีทำเรื่องซับซ้อนให้ง่ายขึ้น', 'มักมีทางลัดหรือเครื่องมือช่วยเสมอ', 'swe', 'ux'],
            ['🔗', 'คอยเชื่อมให้ทุกคนในกลุ่มติดต่อกันได้ลื่น', 'ชอบดูแลให้ทุกอย่างต่อถึงกัน', 'network', 'support']
        ]
    },
    {
        cat: 'Impact',
        q: 'คุณอยากให้ผลงานของคุณถูกใช้งานในแบบไหนมากที่สุด?',
        a: [
            ['🌍', 'มีคนหลายล้านคนใช้งานทุกวัน', 'เห็นของที่เราสร้างอยู่ในชีวิตคน', 'swe', 'cloud'],
            ['🛡️', 'ทำให้ระบบที่คนใช้อยู่ปลอดภัยและไม่ล่ม', 'อยู่เบื้องหลังแต่สำคัญ', 'cyber', 'cloud'],
            ['😆', 'คนเล่นแล้วสนุกจนอยากกลับมาเล่นอีก', 'ทำให้คนมีความสุข', 'game', 'ux'],
            ['📌', 'ถูกนำไปใช้ตัดสินใจเรื่องสำคัญจริง ๆ', 'ข้อมูลของเราสร้างผลลัพธ์ที่วัดได้', 'data', 'swe'],
            ['✔️', 'ผู้ใช้ไม่เจอบั๊กหรือปัญหาเลยตอนใช้งาน', 'ภูมิใจเมื่อไม่มีใครต้องร้องเรียน', 'qa', 'support']
        ]
    },
    {
        cat: 'Work Style',
        q: 'ถ้าได้ทำงานในบริษัท คุณอยากรับบทบาทแบบไหนในทีม?',
        a: [
            ['🧰', 'คนที่ใครมีปัญหาเครื่องหรือระบบก็มาหา', 'เป็นที่พึ่งของทุกคนในออฟฟิศ', 'support', 'network'],
            ['🛰️', 'คนที่ดูแลให้ระบบเชื่อมต่อกันได้ตลอดเวลา', 'อยู่เบื้องหลังให้ทุกอย่างวิ่งลื่น', 'network', 'cloud'],
            ['🧐', 'คนที่ตรวจผลงานก่อนส่งถึงลูกค้า', 'เป็นด่านคุณภาพของทีม', 'qa', 'cyber'],
            ['📑', 'คนที่คุยกับลูกค้าแล้วแปลงเป็นโจทย์ให้ทีม', 'เป็นสะพานระหว่างธุรกิจกับเทคนิค', 'analyst', 'ux'],
            ['⌨️', 'คนที่ลงมือเขียนโค้ดสร้างของจริง', 'ชอบเห็นผลงานเกิดขึ้นเอง', 'swe', 'game']
        ]
    },
    {
        cat: 'Learning Style',
        q: 'เวลาเจอของใหม่ที่ไม่เคยใช้ คุณมักจะ...',
        a: [
            ['🔧', 'ลองกดตั้งค่าไปเรื่อย ๆ จนใช้เป็น', 'ไม่กลัวที่จะลองและแก้เอง', 'support', 'cloud'],
            ['🗺️', 'ดูก่อนว่ามันเชื่อมต่อกับอะไรและส่งข้อมูลไปไหน', 'อยากเห็นภาพการเชื่อมต่อทั้งหมด', 'network', 'cyber'],
            ['🧪', 'ลองใช้แบบที่ผู้ใช้ทำผิดหรือทำแปลก ๆ', 'ชอบดูว่ามันพังตรงไหน', 'qa', 'ux'],
            ['❔', 'ถามว่าทำไมต้องมีสิ่งนี้ และใครได้ประโยชน์', 'สนใจเหตุผลและความต้องการเบื้องหลัง', 'analyst', 'data'],
            ['📈', 'ดูรีวิวหรือสถิติก่อนเลือกใช้', 'ตัดสินใจจากข้อมูลมากกว่าความรู้สึก', 'data', 'analyst']
        ]
    },
    {
        cat: 'Workplace Crisis',
        q: 'ที่ทำงานอินเทอร์เน็ตล่มตอนเช้าวันสำคัญ คุณจะทำอะไรเป็นอย่างแรก?',
        a: [
            ['📢', 'แจ้งทุกคนว่าเกิดอะไรขึ้น และหาวิธีทำงานชั่วคราว', 'ดูแลคนใช้งานให้ไม่ตื่นตระหนก', 'support', 'analyst'],
            ['🔍', 'ไล่เช็กสายและอุปกรณ์เครือข่ายทีละจุด', 'หาว่าขาดตรงไหนก่อน', 'network', 'support'],
            ['🧾', 'จดลำดับเหตุการณ์ตั้งแต่ต้นเพื่อทวนหาสาเหตุ', 'อยากรู้ว่าเกิดอะไรขึ้นตามลำดับ', 'qa', 'analyst'],
            ['🛡️', 'เช็กก่อนว่าเป็นการโจมตีหรือเปล่า', 'คิดเรื่องความปลอดภัยก่อน', 'cyber', 'network'],
            ['📊', 'ประเมินว่ากระทบธุรกิจแค่ไหน และเรื่องไหนต้องแก้ก่อน', 'ตัดสินใจจากผลกระทบ', 'analyst', 'data']
        ]
    },
    {
        cat: 'Career Values',
        q: 'ความสำเร็จในงานของคุณคือ...',
        a: [
            ['😊', 'ผู้ใช้บอกว่า "ขอบคุณ ใช้งานได้แล้ว"', 'ชอบช่วยให้คนใช้งานต่อได้', 'support', 'ux'],
            ['⚡', 'ทุกคนใช้งานได้เร็วโดยไม่รู้ว่ามีเครือข่ายอยู่', 'ความสำเร็จคือความไม่มีใครสังเกต', 'network', 'cloud'],
            ['🏁', 'ไม่มีบั๊กใหญ่หลุดถึงผู้ใช้ตอนปล่อยจริง', 'ภูมิใจเมื่อของออกไปสะอาด', 'qa', 'swe'],
            ['🤝', 'ทุกฝ่ายเข้าใจตรงกันและโปรเจกต์ตอบโจทย์จริง', 'เห็นทีมเดินไปทางเดียวกัน', 'analyst', 'swe'],
            ['💖', 'ผู้ใช้ชอบและรู้สึกดีกับสิ่งที่ออกแบบ', 'ใส่ใจความรู้สึกของคนใช้งาน', 'ux', 'game']
        ]
    }
];

questions.forEach(q => q.a.push(['🤔', 'ไม่แน่ใจ / ไม่ตรงกับฉันเลย', 'ข้อนี้จะไม่นับคะแนนให้สายใด', null, null]));

// ============================================================
// STATE & SCORING
// ============================================================
const ids = careers.map(c => c.id), KEY = 'yourit_v2', $ = id => document.getElementById(id), cr = id => careers.find(c => c.id === id);

let showAllRanks = false, current = 0, answers = Array(questions.length).fill(null), result = null, editing = false, advTimer = null, roadCareer = 'swe';

try {
    const o = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (o && Array.isArray(o.answers) && o.answers.length === questions.length) {
        answers = o.answers.map(a => Number.isInteger(a) && a >= 0 && a < questions[0].a.length ? a : null);
    }
}
catch (e) {
}

function save() {
    try {
        localStorage.setItem(KEY, JSON.stringify({ answers }));
    }
    catch (e) {
    }
}

function maxPts(id) {
    return questions.reduce((t, q, qi) => t + Math.max(...q.a.map((a, ai) => a[3] === id ? 2 : a[4] === id ? 1 : 0)), 0);
}

function calculate() {
    result = null;
    if (answers.some(a => a === null)) {
        return null;
    }
    const raw = {}, max = {}, pct = {};
    ids.forEach(id => {
        raw[id] = 0;
        max[id] = maxPts(id);
    });
    const log = answers.map((a, qi) => {
        const o = questions[qi].a[a], p = o[3], s = o[4];
        if (p) {
            raw[p] += 2;
        }
        if (s) {
            raw[s] += 1;
        }
        return { qi, a, p, s };
    });
    ids.forEach(id => pct[id] = max[id] ? Math.round(raw[id] / max[id] * 100) : 0);
    const order = [...ids].sort((x, y) => pct[y] - pct[x] || raw[y] - raw[x] || ids.indexOf(x) - ids.indexOf(y));
    return result = { raw, max, pct, order, log };
}

// ============================================================
// NAVIGATION
// ============================================================
function go(id, fromHash) {
    if (!$(id)) {
        id = 'home';
    }
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === id));
    document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.view === id));
    $('nav').classList.remove('open');
    window.lqSync && lqSync();
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (id !== 'quiz') {
        editing = false;
    }
    if (id === 'quiz') {
        renderQuestion(0);
    }
    if (id === 'match') {
        renderMatch();
    }
    if (id === 'skill') {
        renderRoadmap();
    }
    if (id === 'home') {
        refreshHome();
    }
    if (!fromHash) {
        try {
            history.pushState(null, '', '#' + id);
        }
        catch (e) {
        }
    }
}

window.addEventListener('popstate', () => go(location.hash.slice(1) || 'home', true));

// ============================================================
// QUIZ FLOW
// ============================================================
function startQuiz() {
    clearTimeout(advTimer);
    answers = Array(questions.length).fill(null);
    result = null;
    editing = false;
    current = 0;
    save();
    go('quiz');
}

function editAnswer(qi) {
    current = qi;
    editing = true;
    go('quiz');
}

function renderQuestion(d) {
    const q = questions[current], n = answers.filter(a => a !== null).length;
    $('qCategory').textContent = q.cat.toUpperCase();
    $('questionText').textContent = q.q;
    $('questionSub').textContent = editing ? 'กำลังแก้ไขคำตอบ — เลือกใหม่แล้วกด “อัปเดตผลลัพธ์”' : 'เลือกคำตอบที่ตรงกับคุณมากที่สุด (กดเลข 1–6 บนคีย์บอร์ดได้)';
    const box = $('qbody');
    box.classList.remove('slideL', 'slideR');
    if (d) {
        void box.offsetWidth;
        box.classList.add(d > 0 ? 'slideR' : 'slideL');
    }
    $('answers').innerHTML = q.a.map((a, i) => `<button class="answer ${answers[current] === i ? 'selected' : ''} ${i === q.a.length - 1 ? 'unsure' : ''}" onclick="choose(${i})"><span class="key">${i + 1}</span><span class="emoji">${a[0]}</span><b>${a[1]}</b><small>${a[2]}</small></button>`).join('');
    $('prevBtn').style.visibility = current === 0 ? 'hidden' : 'visible';
    updateProgress();
}

function updateProgress() {
    const n = answers.filter(a => a !== null).length, pct = Math.round(n / questions.length * 100), reach = answers.findIndex(a => a === null);
    $('progressLabel').textContent = `คำถามที่ ${current + 1} จาก ${questions.length}`;
    $('progressPct').textContent = pct + '%';
    $('progressFill').style.width = pct + '%';
    $('qsteps').innerHTML = questions.map((_, i) => `<span class="${answers[i] !== null ? 'done' : ''} ${i === current ? 'cur' : ''}" onclick="jumpTo(${i})"></span>`).join('');
    const nb = $('nextBtn');
    nb.disabled = answers[current] === null;
    nb.textContent = editing ? 'อัปเดตผลลัพธ์ →' : current === questions.length - 1 ? 'ดูผลการวิเคราะห์ →' : 'ถัดไป →';
}

function jumpTo(i) {
    const reach = answers.findIndex(a => a === null), lim = reach < 0 ? questions.length - 1 : reach;
    if (i <= lim && i !== current) {
        clearTimeout(advTimer);
        const d = i > current ? 1 : -1;
        current = i;
        renderQuestion(d);
    }
}

function choose(i) {
    answers[current] = i;
    save();
    clearTimeout(advTimer);
    document.querySelectorAll('#answers .answer').forEach((b, j) => b.classList.toggle('selected', j === i));
    updateProgress();
    if (current < questions.length - 1 && !editing) {
        advTimer = setTimeout(() => step(1), 380);
    }
}

function step(d) {
    clearTimeout(advTimer);
    if (d > 0 && current < questions.length - 1) {
        current++;
        renderQuestion(1);
    }
    else if (d < 0 && current > 0) {
        current--;
        renderQuestion(-1);
    }
}

function prevQuestion() {
    step(-1);
}

function nextQuestion() {
    if (answers[current] === null) {
        return;
    }
    clearTimeout(advTimer);
    if (editing || current === questions.length - 1) {
        finish();
    }
    else {
        step(1);
    }
}

function finish() {
    if (!calculate()) {
        return;
    }
    editing = false;
    roadCareer = result.order[0];
    const o = $('analyzing'), t = $('anText'), m = ['กำลังรวบรวมคำตอบของคุณ…', 'คำนวณคะแนนแต่ละสายอาชีพ…', 'จัดอันดับและสร้างผลลัพธ์…'];
    let i = 0;
    t.textContent = m[0];
    o.classList.add('show');
    const iv = setInterval(() => {
        if (++i < m.length) {
            t.textContent = m[i];
        }
    }, 480);
    setTimeout(() => {
        clearInterval(iv);
        go('match');
        setTimeout(() => o.classList.remove('show'), 60);
    }, 1500);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (!$('quiz').classList.contains('active') || e.metaKey || e.ctrlKey || e.altKey) {
        return;
    }
    const k = +e.key;
    if (k >= 1 && k <= questions[current].a.length) {
        choose(k - 1);
    }
    else if (e.key === 'ArrowLeft') {
        step(-1);
    }
    else if (e.key === 'ArrowRight') {
        nextQuestion();
    }
});

function countUp(el, to, ms) {
    const t0 = performance.now();
    (function f(t) {
        const k = Math.min(1, (t - t0) / (ms || 900)), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * e) + '%';
        if (k < 1) {
            requestAnimationFrame(f);
        }
    })(t0);
}

function fillBars(root) {
    requestAnimationFrame(() => requestAnimationFrame(() => root.querySelectorAll('.bar span[data-w]').forEach(b => b.style.width = b.dataset.w + '%')));
}

// ============================================================
// MATCH RESULTS & VERIFICATION
// ============================================================
function toggleRanks() {
    showAllRanks = !showAllRanks;
    renderMatch();
}

function renderMatch() {
    const has = !!result;
    $('matchEmpty').style.display = has ? 'none' : 'block';
    $('matchBody').style.display = has ? '' : 'none';
    if (!has) {
        return;
    }
    const r = result, top = cr(r.order[0]);
    $('topCareer').textContent = top.short;
    $('topDesc').textContent = top.desc;
    countUp($('topScore'), r.pct[top.id]);
    $('resultList').innerHTML = r.order.slice(0, showAllRanks ? r.order.length : 5).map((id, i) => {
        const c = cr(id);
        return `<div class="rankrow"><div class="rank">0${i + 1}</div><div><b>${c.short}</b><small>${c.name} · ${r.raw[id]}/${r.max[id]} คะแนน</small><div class="bar"><span data-w="${r.pct[id]}" style="width:0"></span></div></div><div class="score">${r.pct[id]}%</div></div>`;
    }).join('') + (r.order.length > 5 ? `<button class="btn secondary small" onclick="toggleRanks()">${showAllRanks ? 'แสดงเฉพาะ 5 อันดับแรก' : 'ดูทั้งหมด ' + r.order.length + ' สายอาชีพ'}</button>` : '');
    const avg = (...ks) => Math.round(ks.reduce((t, k) => t + r.pct[k], 0) / ks.length);
    const traits = [
        ['Analytical Thinking', 'Data + Cyber + QA', avg('data', 'cyber', 'qa')],
        ['Creative Problem Solving', 'UX/UI + Game', avg('ux', 'game')],
        ['Technical Building', 'Software + Cloud + Network', avg('swe', 'cloud', 'network')],
        ['Helping & Communication', 'IT Support + System Analyst', avg('support', 'analyst')]
    ];
    $('traits').innerHTML = traits.map(([n, f, v]) => `<div class="trait"><div class="traittop"><span>${n} <small class="muted">(${f})</small></span><b>${v}%</b></div><div class="bar"><span data-w="${v}" style="width:0"></span></div></div>`).join('');
    $('faculties').innerHTML = top.faculty.split(', ').map(x => '• ' + x).join('<br>');
    $('vNote').innerHTML = 'วิธีคำนวณ: คำตอบแต่ละข้อให้ <b>+2</b> แก่สายหลักที่ตรงกัน และ <b>+1</b> แก่สายที่เกี่ยวข้อง · Match % = คะแนนที่ได้ ÷ คะแนนเต็มที่สายนั้นทำได้ในแบบประเมินนี้ × 100 · จัดอันดับด้วย % ก่อน ถ้าเท่ากันดูคะแนนดิบ · เป็นเครื่องมือสำรวจเบื้องต้น ไม่ใช่การวินิจฉัย · คุณตอบ “ไม่แน่ใจ” ' + r.log.filter(l => !l.p).length + ' ข้อ (ไม่นับคะแนน)';
    $('vAnswers').innerHTML = '<tr><th>#</th><th>หัวข้อ</th><th>คำตอบที่เลือก</th><th>คะแนนที่ได้</th><th></th></tr>' + r.log.map(l => `<tr><td>${l.qi + 1}</td><td>${questions[l.qi].cat}</td><td>${questions[l.qi].a[l.a][1]}</td><td>${l.p ? `<span class="chip">${cr(l.p).short} +2</span>` : '<span class="chip dim">ไม่นับคะแนน</span>'}${l.s ? `<span class="chip dim">${cr(l.s).short} +1</span>` : ''}</td><td><button class="linkbtn" onclick="editAnswer(${l.qi})">แก้ไข</button></td></tr>`).join('');
    $('vTotals').innerHTML = '<tr><th>สายอาชีพ</th><th>คะแนนที่ได้</th><th>คะแนนเต็ม</th><th>การคำนวณ</th></tr>' + r.order.map(id => `<tr><td>${cr(id).short}</td><td>${r.raw[id]}</td><td>${r.max[id]}</td><td>${r.raw[id]} ÷ ${r.max[id]} × 100 = <b>${r.pct[id]}%</b></td></tr>`).join('');
    fillBars($('matchBody'));
}

// ============================================================
// ROADMAP DATA
// ============================================================
const roadmaps = {
    swe: [
        ['HTML & CSS Foundation', 'เรียนรู้โครงสร้างเว็บ การจัดวาง และ Responsive Design', '2 สัปดาห์', 'เริ่มต้น'],
        ['JavaScript Fundamentals', 'ตัวแปร ฟังก์ชัน เงื่อนไข Loop และ DOM', '3 สัปดาห์', 'เริ่มต้น'],
        ['Git & GitHub', 'จัดการเวอร์ชันโค้ดและทำงานร่วมกัน', '1 สัปดาห์', 'เริ่มต้น'],
        ['React & Modern Frontend', 'Components, Hooks, State และ Routing', '4 สัปดาห์', 'ปานกลาง'],
        ['Backend & API Basics', 'HTTP, REST API, Database และ Authentication', '3 สัปดาห์', 'ปานกลาง'],
        ['Build Your Portfolio', 'สร้างโปรเจกต์จริงและนำขึ้น Deploy', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    data: [
        ['Python Fundamentals', 'พื้นฐาน Python และการจัดการข้อมูล', '2 สัปดาห์', 'เริ่มต้น'],
        ['Statistics & Mathematics', 'สถิติ ความน่าจะเป็น และ Linear Algebra', '3 สัปดาห์', 'เริ่มต้น'],
        ['SQL & Data Wrangling', 'ดึงข้อมูล ทำความสะอาด และจัดรูปแบบข้อมูล', '2 สัปดาห์', 'ปานกลาง'],
        ['Data Visualization', 'สื่อสารข้อมูลด้วยกราฟและ Dashboard', '2 สัปดาห์', 'ปานกลาง'],
        ['Machine Learning Basics', 'ฝึกโมเดลและประเมินผลการทำนาย', '4 สัปดาห์', 'สูง'],
        ['Data Portfolio Project', 'ทำโปรเจกต์วิเคราะห์ข้อมูลจากชุดข้อมูลจริง', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    cyber: [
        ['Networking Fundamentals', 'IP, DNS, HTTP และโครงสร้างเครือข่าย', '2 สัปดาห์', 'เริ่มต้น'],
        ['Linux & Command Line', 'ใช้ Terminal และจัดการระบบ Linux', '2 สัปดาห์', 'เริ่มต้น'],
        ['Security Fundamentals', 'หลัก CIA Triad, Encryption และ Threats', '2 สัปดาห์', 'เริ่มต้น'],
        ['Web Security & OWASP', 'เรียนรู้ช่องโหว่ผ่าน Lab ที่ได้รับอนุญาต', '3 สัปดาห์', 'ปานกลาง'],
        ['Security Monitoring', 'Log analysis และ Incident Response', '3 สัปดาห์', 'สูง'],
        ['Build a Safe Security Lab', 'ทำ Home Lab และเขียนรายงานการเรียนรู้', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    ux: [
        ['Design Principles', 'สี Typography Layout และ Visual Hierarchy', '2 สัปดาห์', 'เริ่มต้น'],
        ['User Research', 'สัมภาษณ์ผู้ใช้และสร้าง User Persona', '2 สัปดาห์', 'เริ่มต้น'],
        ['Wireframe & User Flow', 'วางโครงสร้างหน้าจอและเส้นทางใช้งาน', '2 สัปดาห์', 'เริ่มต้น'],
        ['Figma & Prototyping', 'สร้าง UI และ Interactive Prototype', '3 สัปดาห์', 'ปานกลาง'],
        ['Usability Testing', 'ทดสอบต้นแบบและปรับปรุงจาก Feedback', '2 สัปดาห์', 'ปานกลาง'],
        ['UX/UI Case Study', 'ทำ Case Study ลง Portfolio', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    cloud: [
        ['Linux & System Basics', 'พื้นฐานระบบปฏิบัติการและ Command Line', '2 สัปดาห์', 'เริ่มต้น'],
        ['Networking Core', 'IP, DNS, Routing และ Firewall', '2 สัปดาห์', 'เริ่มต้น'],
        ['Cloud Fundamentals', 'เรียนรู้บริการ Cloud และการ Deploy', '3 สัปดาห์', 'ปานกลาง'],
        ['Docker & Containers', 'สร้างและจัดการ Container', '2 สัปดาห์', 'ปานกลาง'],
        ['CI/CD & Automation', 'ทำ Pipeline สำหรับทดสอบและ Deploy', '3 สัปดาห์', 'สูง'],
        ['Cloud Deployment Project', 'Deploy แอปพร้อม Monitoring เบื้องต้น', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    game: [
        ['Programming with C#', 'ตัวแปร เงื่อนไข Loop และ OOP', '3 สัปดาห์', 'เริ่มต้น'],
        ['Game Math & Physics', 'Vector, Coordinate และ Physics เบื้องต้น', '2 สัปดาห์', 'เริ่มต้น'],
        ['Unity Fundamentals', 'Scene, GameObject, Component และ Prefab', '3 สัปดาห์', 'ปานกลาง'],
        ['Gameplay Programming', 'Input, Collision, UI และ Game Loop', '3 สัปดาห์', 'ปานกลาง'],
        ['3D & Game Design', 'Level Design, Lighting และ Animation', '2 สัปดาห์', 'สูง'],
        ['Build a Playable Demo', 'สร้างเกมต้นแบบและนำเสนอผลงาน', '3 สัปดาห์', 'ประยุกต์ใช้']
    ],
    support: [
        ['Computer & OS Basics', 'ฮาร์ดแวร์ Windows และการติดตั้ง/ซ่อมเครื่องเบื้องต้น', '2 สัปดาห์', 'เริ่มต้น'],
        ['Networking Basics', 'IP, DNS, DHCP, Wi-Fi และการแก้ปัญหาเน็ตหลุด', '2 สัปดาห์', 'เริ่มต้น'],
        ['Linux & Command Line', 'จัดการผู้ใช้ สิทธิ์ และบริการบน Linux', '2 สัปดาห์', 'เริ่มต้น'],
        ['Windows Server & Active Directory', 'จัดการบัญชีผู้ใช้ นโยบาย และเซิร์ฟเวอร์ในองค์กร', '3 สัปดาห์', 'ปานกลาง'],
        ['Helpdesk & Ticketing', 'รับเรื่อง ไล่ปัญหา และสื่อสารกับผู้ใช้อย่างมืออาชีพ', '2 สัปดาห์', 'ปานกลาง'],
        ['Home Lab & Certification Prep', 'สร้างแล็บจำลององค์กร และเตรียมสอบ CompTIA A+ / Network+', '3 สัปดาห์', 'ประยุกต์ใช้']
    ],
    network: [
        ['Networking Fundamentals', 'แบบจำลอง OSI, TCP/IP และอุปกรณ์เครือข่ายพื้นฐาน', '3 สัปดาห์', 'เริ่มต้น'],
        ['IP Addressing & Subnetting', 'แบ่งเครือข่ายย่อยและคำนวณ IP อย่างคล่องแคล่ว', '2 สัปดาห์', 'เริ่มต้น'],
        ['Routing & Switching', 'VLAN, Static Route, OSPF และการออกแบบเครือข่าย', '4 สัปดาห์', 'ปานกลาง'],
        ['Network Services & Wireless', 'DNS, DHCP, NAT และการวางระบบ Wi-Fi', '3 สัปดาห์', 'ปานกลาง'],
        ['Network Security & Monitoring', 'Firewall, VPN, ACL และการเฝ้าระวังด้วย SNMP', '3 สัปดาห์', 'สูง'],
        ['Network Lab Project', 'ออกแบบเครือข่ายด้วย Packet Tracer / GNS3 และเตรียมสอบ CCNA', '3 สัปดาห์', 'ประยุกต์ใช้']
    ],
    qa: [
        ['Testing Fundamentals', 'หลักการทดสอบซอฟต์แวร์ ประเภทการทดสอบ และวงจร SDLC', '2 สัปดาห์', 'เริ่มต้น'],
        ['Test Case & Bug Reporting', 'เขียน Test Case และรายงานบั๊กให้ทีมเข้าใจและทำซ้ำได้', '2 สัปดาห์', 'เริ่มต้น'],
        ['Web & API Testing', 'ใช้ DevTools และ Postman ทดสอบเว็บและ API', '3 สัปดาห์', 'ปานกลาง'],
        ['SQL & Basic Programming', 'ตรวจข้อมูลด้วย SQL และพื้นฐานโค้ดสำหรับงานทดสอบ', '3 สัปดาห์', 'ปานกลาง'],
        ['Test Automation', 'เขียนสคริปต์ทดสอบอัตโนมัติด้วย Playwright / Cypress', '4 สัปดาห์', 'สูง'],
        ['QA Portfolio Project', 'ทำแผนทดสอบและรายงานผลของแอปจริงลง Portfolio', '2 สัปดาห์', 'ประยุกต์ใช้']
    ],
    analyst: [
        ['Business & IT Fundamentals', 'เข้าใจกระบวนการธุรกิจและบทบาทของระบบสารสนเทศ', '2 สัปดาห์', 'เริ่มต้น'],
        ['Requirements Gathering', 'สัมภาษณ์ผู้ใช้ และเก็บความต้องการให้ชัดเจน', '3 สัปดาห์', 'เริ่มต้น'],
        ['Process & System Modeling', 'วาด BPMN, UML และ ER Diagram เพื่ออธิบายระบบ', '3 สัปดาห์', 'ปานกลาง'],
        ['SQL & Data Basics', 'ดึงและตรวจข้อมูลเพื่อสนับสนุนการวิเคราะห์', '2 สัปดาห์', 'ปานกลาง'],
        ['Agile & Documentation', 'User Story, Backlog และเอกสารข้อกำหนดระบบ', '3 สัปดาห์', 'สูง'],
        ['Analysis Case Study', 'วิเคราะห์ระบบจริงหนึ่งระบบและเสนอแนวทางปรับปรุง', '2 สัปดาห์', 'ประยุกต์ใช้']
    ]
};

// ============================================================
// SKILL ROADMAP
// ============================================================
let checked = {};

try {
    checked = JSON.parse(localStorage.getItem('yourit_checked') || '{}');
}
catch (e) {
}

const LV = [
    ['LEVEL 01', 'Beginner Foundation', [0, 1], 'เริ่มต้นจากพื้นฐานที่จำเป็น'], ['LEVEL 02', 'Core Technical Skills', [2, 3], 'ต่อยอดทักษะหลักของสายงาน'], ['LEVEL 03', 'Specialized Skills', [4], 'เจาะลึกทักษะเฉพาะทาง'],
    [
        'LEVEL 04', 'Portfolio & Industry Ready', [5], 'ทำโปรเจกต์จริงและพร้อมนำเสนอผลงาน'
    ]
];

function wk(i) {
    return parseInt(i[2]) || 0;
}

function pickRoad(id) {
    roadCareer = id;
    renderRoadmap();
}

function renderRoadmap() {
    const c = cr(roadCareer), list = roadmaps[roadCareer];
    $('roadTitle').textContent = c.short + ' Path';
    $('stairCareer').textContent = c.short;
    $('roadTabs').innerHTML = careers.map(x => `<button class="${x.id === roadCareer ? 'on' : ''}" onclick="pickRoad('${x.id}')">${x.icon} ${x.short}${result ? ' · ' + result.pct[x.id] + '%' : ''}</button>`).join('');
    $('roadList').innerHTML = list.map((item, i) => {
        const key = roadCareer + '-' + i, done = !!checked[key];
        return `<label class="roaditem ${done ? 'done' : ''}"><input type="checkbox" ${done ? 'checked' : ''} onchange="toggleRoad('${key}',this)"><div><b>${i + 1}. ${item[0]}</b><p>${item[1]}</p><div class="roadmeta">${item[2]} · ระดับ${item[3]}</div></div></label>`;
    }).join('');
    updateRoadProgress();
}

function toggleRoad(key, el) {
    checked[key] = el.checked;
    el.closest('.roaditem').classList.toggle('done', el.checked);
    try {
        localStorage.setItem('yourit_checked', JSON.stringify(checked));
    }
    catch (e) {
    }
    updateRoadProgress();
}

function resetRoad() {
    roadmaps[roadCareer].forEach((_, i) => delete checked[roadCareer + '-' + i]);
    try {
        localStorage.setItem('yourit_checked', JSON.stringify(checked));
    }
    catch (e) {
    }
    renderRoadmap();
    showToast('รีเซ็ตความคืบหน้าแล้ว');
}

function updateRoadProgress() {
    const list = roadmaps[roadCareer], isDone = i => !!checked[roadCareer + '-' + i], total = list.length, done = list.filter((_, i) => isDone(i)).length, pct = Math.round(done / total * 100), left = list.reduce((t, x, i) => t + (isDone(i) ? 0 : wk(x)), 0);
    $('roadFill').style.width = pct + '%';
    $('roadCount').textContent = `${done} / ${total} completed · เหลือประมาณ ${left} สัปดาห์`;
    $('roadPercent').textContent = pct + '%';
    const act = LV.findIndex(l => !l[2].every(isDone));
    $('staircase').innerHTML = [...LV].reverse().map(l => {
        const i = LV.indexOf(l), d = l[2].filter(isDone).length, full = d === l[2].length;
        return `<div class="stair ${full ? 'complete' : i === act ? 'active' : ''}"><b>${full ? '✓ ' : ''}${l[0]} · ${l[1]}</b><small>${l[3]} · ${d}/${l[2].length} ขั้น</small></div>`;
    }).join('');
}

// ============================================================
// UI HELPERS
// ============================================================
function showToast(msg) {
    let t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2300);
}

// ============================================================
// HOME: CAREER MODAL, PREVIEW, INIT
// ============================================================
function openCareer(id) {
    const c = cr(id), l = roadmaps[id], w = l.reduce((t, x) => t + wk(x), 0);
    $('modalBox').innerHTML = `<div class="eyebrow">${c.icon} CAREER DOMAIN${result ? ` <span class="badge">Match ${result.pct[id]}%</span>` : ''}</div><h2>${c.name}</h2><p class="muted" style="font-size:12px;line-height:1.8">${c.desc}</p><div>${c.skills.map(x => `<span class="tag">${x}</span>`).join('')}</div><div class="eyebrow" style="margin-top:20px">ACADEMIC DIRECTION</div><p class="muted" style="font-size:12px;line-height:1.8;margin:6px 0 0">${c.faculty}</p><div class="eyebrow" style="margin:20px 0 4px">ROADMAP · ${l.length} ขั้น · ~${w} สัปดาห์</div>${l.map((x, i) => `<div class="mini"><span>${i + 1}. ${x[0]}</span><span>${x[2]}</span></div>`).join('')}<div class="actions"><button class="btn primary" onclick="roadCareer='${id}';closeModal();go('skill')">เปิด Roadmap สายนี้ ↗</button><button class="btn secondary" onclick="closeModal()">ปิด</button></div>`;
    $('modal').classList.add('show');
}

function closeModal() {
    $('modal').classList.remove('show');
}

let pvI = 0, pvTimer = null;

function renderPreview() {
    const has = !!result, id = has ? result.order[0] : careers[pvI % careers.length].id, c = cr(id), p = has ? result.pct[id] : [92, 88, 85, 90, 84, 87, 81, 83, 86, 89][pvI % 10];
    $('pvLabel').textContent = has ? 'YOUR LATEST RESULT' : 'SAMPLE PREVIEW';
    $('pvSub').textContent = has ? 'สายอาชีพที่เข้ากับคุณที่สุด (คำนวณจากคำตอบจริง)' : 'ตัวอย่างการแสดงผล (ไม่ใช่ผลของคุณ)';
    $('pvName').textContent = c.short;
    countUp($('pvPct'), p, 600);
    $('pvBar').style.width = p + '%';
    $('pvChips').innerHTML = c.skills.map(x => `<div><b>${c.icon}</b>${x}</div>`).join('');
}

function refreshHome() {
    renderPreview();
    clearInterval(pvTimer);
    if (!result) {
        pvTimer = setInterval(() => {
            if ($('home').classList.contains('active')) {
                pvI++;
                renderPreview();
            }
        }, 3200);
    }
    $('careerCards').innerHTML = careers.map(c => `<div class="card click" onclick="openCareer('${c.id}')"><div class="iconbox">${c.icon}${result ? `<span class="badge" style="margin-left:auto">${result.pct[c.id]}%</span>` : ''}</div><h3>${c.name}</h3><p>${c.desc}</p><div style="margin-top:12px">${c.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div><span class="more">ดูรายละเอียดและ Roadmap →</span></div>`).join('');
    $('ctaBtns').innerHTML = result ? `<button class="btn primary" onclick="go('match')">ดูผลล่าสุดของฉัน ↗</button><button class="btn secondary" onclick="startQuiz()">ทำแบบประเมินใหม่</button>` : `<button class="btn primary" onclick="startQuiz()">Start Diagnostic Quiz ↗</button><button class="btn secondary" onclick="go('skill')">ดูตัวอย่าง Skill Roadmap</button>`;
}

(function init() {
    calculate();
    if (result) {
        roadCareer = result.order[0];
    }
    const f = answers.findIndex(a => a === null);
    current = f < 0 ? 0 : f;
    const h = location.hash.slice(1);
    go(['quiz', 'match', 'skill'].includes(h) ? h : 'home', true);
})();
// ============================================================
// LIQUID NAVBAR
// ============================================================
/* Liquid navbar (vanilla port of Nimbus "Waterline") */
(function () {
    const PAD = 14, nav = document.getElementById('nav');
    if (!nav) {
        return;
    }
    const btns = [...nav.querySelectorAll('button[data-view]')];
    const IC = {
        home: '<path d="M3.5 11.2 12 4l8.5 7.2"/><path d="M6 9.6V20h12V9.6"/><path class="nv-door" d="M10 20v-5h4v5Z"/>', quiz: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.6a2.4 2.4 0 1 1 3.4 2.2c-.7.4-1 .9-1 1.6M12 16.6v.1"/>', match: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12v.1"/>', skill: '<path d="M21 12.2 3.6 5.4l2.7 6.8-2.7 6.4L21 12.2Zm-14.7 0H13"/>'
    }, FXN = { home: 'glow', quiz: 'spin', match: 'drop', skill: 'plane' };
    nav.classList.add('lq', 'nimbus-nav');
    nav.dataset.gl = 'on';
    btns.forEach(b => {
        const v = b.dataset.view, t = b.textContent;
        b.classList.add('nimbus-item');
        b.setAttribute('aria-label', t);
        b.innerHTML = `<span class="nv-ico"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[v]}</svg></span><span class="nimbus-label">${t}</span>`;
    });
    nav.insertAdjacentHTML('afterbegin', '<span class="nimbus-glass"></span><canvas class="nimbus-water"></canvas><span class="nimbus-drop"></span>');
    const cv = nav.querySelector('canvas'), dropEl = nav.querySelector('.nimbus-drop');
    const VERT = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    const FRAG = `precision highp float;
uniform vec2 uRes;uniform float uDpr;uniform float uTime;uniform vec4 uPill;
uniform vec4 uBlob[6];uniform float uSy[6];uniform vec4 uRip[6];uniform vec3 uMouse;uniform float uDark;uniform float uAmb;
float sdRB(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float sdCap(vec2 p,vec4 B,float sy){p-=B.xy;p.y/=sy;p.x=max(abs(p.x)-B.z,0.);return(length(p)-B.w)*min(1.,sy);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float dropD(vec2 p){float d=1e4;for(int i=0;i<6;i++){if(uBlob[i].w>.5){d=smin(d,sdCap(p,uBlob[i],uSy[i]),13.);}}return d;}
float pillD(vec2 p){vec2 h=uPill.zw*.5;return sdRB(p-uPill.xy-h,h,h.y);}
float lens(float d,float w){float t=clamp(-d/w,0.,1.);return sqrt(1.-(1.-t)*(1.-t));}
float waves(vec2 p){float w=0.;
 for(int i=0;i<6;i++){vec4 R=uRip[i];if(R.w>0.){float x=length(p-R.xy)-R.z*240.;w+=R.w*exp(-R.z*1.7)*sin(x*.3)*exp(-x*x/700.);}}
 vec2 m=p-uMouse.xy;w+=uMouse.z*3.6*exp(-dot(m,m)/1000.);
 w+=uAmb*(sin(p.x*.05+uTime*1.2)*.45+sin(p.x*.13-uTime*.85+p.y*.2)*.25);return w;}
float H(vec2 p){float dp=pillD(p);return lens(dp,uPill.w*.36)*2.4+lens(dropD(p),11.)*7.5+waves(p)*smoothstep(0.,7.,-dp);}
float caus(vec2 p,float t){vec2 q=p;float c=0.;for(int i=0;i<3;i++){q+=vec2(sin(q.y*1.1+t),cos(q.x*1.3-t*.7))*.6;c+=1./(1.+16.*abs(sin(q.x)*sin(q.y)));}return c/3.;}
void main(){
 vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;
 float dp=pillD(p);float dd=dropD(p);
 float h0=H(p);vec3 n=normalize(vec3(h0-H(p+vec2(1.,0.)),h0-H(p+vec2(0.,1.)),1.));
 vec3 V=vec3(0.,0.,1.);
 float spec=pow(max(dot(reflect(-normalize(vec3(-.45,-.8,.85)),n),V),0.),70.);
 float spec2=pow(max(dot(reflect(-normalize(vec3(.6,.75,.7)),n),V),0.),22.)*.3;
 float fres=clamp((1.-n.z)*4.,0.,1.);
 vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+fres*.85+p.x*.0028+uTime*.035));
 float pm=smoothstep(1.,-1.,dp);float dm=smoothstep(1.,-1.,dd)*smoothstep(1.,-2.,dp);
 float sh=smoothstep(9.,-9.,dropD(p-vec2(0.,5.)))*(1.-dm)*pm*(.11+.07*uDark);
 vec3 c=vec3(0.,.14,.36)*sh;float a=sh;
 float pa=clamp(pm*(fres*.5+spec*.9+spec2),0.,1.);
 c=mix(vec3(1.),irid,.5*fres)*pa+c*(1.-pa);a=pa+a*(1.-pa);
 float th=lens(dd,11.);
 float cs=caus((p+n.xy*th*18.)*.085,uTime*.9);
 vec3 tint=mix(vec3(.80,.95,1.),vec3(.55,.82,1.),uDark);
 float rim=dm*(1.-smoothstep(0.,8.,-dd));
 float cres=dm*smoothstep(.12,.55,dot(n.xy,normalize(vec2(.55,.85))))*smoothstep(0.,3.,-dd);
 float body=.5+.5*clamp(-n.y*3.,-1.,1.);
 float da=dm*(.26+.14*body)*(1.-.35*uDark);vec3 dc=mix(tint,vec3(1.),body*.6);
 float la=rim*.22;vec3 lc=mix(vec3(0.,.42,.78),vec3(.1,.55,.95),uDark);dc=lc*la+dc*da*(1.-la);da=la+da*(1.-la);
 la=clamp(cres*.7+smoothstep(.6,1.,cs)*.28*th*dm,0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=clamp(dm*(spec*1.2+spec2*.5),0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=dm*smoothstep(-2.,0.,dd)*.4;dc=mix(vec3(1.),irid,.35)*la+dc*(1.-la);da=la+da*(1.-la);
 c=dc+c*(1.-da);a=da+a*(1.-da);
 gl_FragColor=vec4(c,a);
}`;
    const s = {
        a: { x: 0, v: 0 }, b: { x: 0, v: 0 }, sy: { s: 1, v: 0 }, lead: 0, lagFrom: 0, sats: [], rips: [], t: { x: 0, cy: 0, q: 0, r: 21 }, q: 0, mouse: { x: 0, y: 0, s: 0, on: false }, moving: false, split: false, ready: false, w: 0, h: 0, visible: true, reduce: matchMedia('(prefers-reduced-motion: reduce)').matches, raf: 0, last: 0, time: 0, glc: null
    };
    let cur = Math.max(0, btns.findIndex(b => b.classList.contains('active')));
    function initGL() {
        const g = cv.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: false });
        if (!g) {
            return null;
        }
        const mk = (t, src) => {
            const x = g.createShader(t);
            g.shaderSource(x, src);
            g.compileShader(x);
            return g.getShaderParameter(x, g.COMPILE_STATUS) ? x : null;
        };
        const vs = mk(g.VERTEX_SHADER, VERT), fs = mk(g.FRAGMENT_SHADER, FRAG);
        if (!vs || !fs) {
            return null;
        }
        const p = g.createProgram();
        g.attachShader(p, vs);
        g.attachShader(p, fs);
        g.linkProgram(p);
        if (!g.getProgramParameter(p, g.LINK_STATUS)) {
            return null;
        }
        g.useProgram(p);
        g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer());
        g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), g.STATIC_DRAW);
        const l = g.getAttribLocation(p, 'a');
        g.enableVertexAttribArray(l);
        g.vertexAttribPointer(l, 2, g.FLOAT, false, 0, 0);
        const u = {};
        ['uRes', 'uDpr', 'uTime', 'uPill', 'uBlob', 'uSy', 'uRip', 'uMouse', 'uDark', 'uAmb'].forEach(n => u[n] = g.getUniformLocation(p, n));
        return { g, u };
    }
    function draw() {
        const T = s.t, sep = Math.abs(s.a.x - s.b.x), thin = Math.min(sep / (2 * (s.q + T.r) || 1), 1), r = T.r * (1 - .3 * thin);
        if (s.glc) {
            const { g, u } = s.glc, dpr = Math.min(devicePixelRatio || 1, 2);
            g.viewport(0, 0, g.drawingBufferWidth, g.drawingBufferHeight);
            g.uniform2f(u.uRes, s.w + PAD * 2, s.h + PAD * 2);
            g.uniform1f(u.uDpr, dpr);
            g.uniform1f(u.uTime, s.time);
            g.uniform4f(u.uPill, PAD, PAD, s.w, s.h);
            const bl = new Float32Array(24), sy = new Float32Array(6).fill(1), head = s.lead ? s.b : s.a, tail = s.lead ? s.a : s.b;
            bl.set([head.x, T.cy, s.q * (1 - .25 * thin), T.r * (1 - .12 * thin), tail.x, T.cy, s.q * (1 - .8 * thin), T.r * (1 - .5 * thin)], 0);
            sy[0] = sy[1] = s.sy.s;
            s.sats.slice(0, 4).forEach((d, i) => bl.set([d.x, d.y, 0, d.r], 8 + i * 4));
            g.uniform4fv(u.uBlob, bl);
            g.uniform1fv(u.uSy, sy);
            const rp = new Float32Array(24);
            s.rips.slice(-6).forEach((p, i) => rp.set([p.x, p.y, p.age, p.amp], i * 4));
            g.uniform4fv(u.uRip, rp);
            g.uniform3f(u.uMouse, s.mouse.x, s.mouse.y, s.mouse.s);
            g.uniform1f(u.uDark, 1);
            g.uniform1f(u.uAmb, s.reduce ? 0 : 1);
            g.clearColor(0, 0, 0, 0);
            g.clear(g.COLOR_BUFFER_BIT);
            g.drawArrays(g.TRIANGLES, 0, 3);
        }
        else {
            dropEl.style.width = (sep + 2 * (s.q + r)) + 'px';
            dropEl.style.transform = `translateX(${Math.min(s.a.x, s.b.x) - s.q - r - PAD}px) scaleY(${s.sy.s})`;
        }
    }
    function step(dt, now) {
        const T = s.t;
        s.time += dt;
        s.q += (T.q - s.q) * Math.min(1, dt * 12);
        const bodies = [s.a, s.b];
        let still = true;
        if (s.reduce) {
            s.a.x = s.b.x = T.x;
            s.a.v = s.b.v = 0;
            s.sy.s = 1;
            s.sats = [];
        }
        else {
            bodies.forEach((B, i) => {
                const ld = i === s.lead, k = ld ? 210 : 72, c = ld ? 25 : 13, f = !ld && now < s.lagFrom ? .08 : 1;
                B.v += (k * (T.x - B.x) - c * B.v) * dt * f;
                B.x += B.v * dt;
                const lo = PAD + 6 + s.q + T.r - 3, hi = PAD + s.w - 6 - s.q - T.r + 3;
                if (B.x < lo || B.x > hi) {
                    s.sy.v -= Math.min(Math.abs(B.v), 900) * .0016;
                    B.x = Math.max(lo, Math.min(hi, B.x));
                    B.v *= -.25;
                }
                if (Math.abs(T.x - B.x) > .3 || Math.abs(B.v) > 3) {
                    still = false;
                }
            });
            const L = bodies[s.lead], syT = 1 - .2 * Math.min(Math.abs(L.v) / 1500, 1);
            s.sy.v += (280 * (syT - s.sy.s) - 9 * s.sy.v) * dt;
            s.sy.s += s.sy.v * dt;
            if (Math.abs(s.sy.s - 1) > .002 || Math.abs(s.sy.v) > .02) {
                still = false;
            }
            const sep = Math.abs(s.a.x - s.b.x), r = T.r * (1 - .3 * Math.min(sep / (2 * (T.q + T.r) || 1), 1));
            if (!s.split && s.moving && sep - 2 * T.q - 2 * r > -6) {
                s.split = true;
                const lo = bodies[1 - s.lead], hi = bodies[s.lead];
                [.3, .5, .72].forEach((t, j) => s.sats.push({
                    x: lo.x + (hi.x - lo.x) * t + (Math.random() - .5) * 6, y: T.cy + (Math.random() - .5) * 10, vx: (lo.v + hi.v) * .45, vy: (Math.random() - .5) * 60, r: 5 + Math.random() * 3 - j * .5, k: 70 + Math.random() * 90
                }));
            }
            s.sats = s.sats.filter(d => {
                d.vx += (d.k * (T.x - d.x) - 9 * d.vx) * dt;
                d.vy += (90 * (T.cy - d.y) - 7 * d.vy) * dt;
                d.x += d.vx * dt;
                d.y += d.vy * dt;
                d.x = Math.max(PAD + 8 + d.r, Math.min(PAD + s.w - 8 - d.r, d.x));
                d.y = Math.max(T.cy - T.r + d.r, Math.min(T.cy + T.r - d.r, d.y));
                if (Math.abs(T.x - d.x) < T.q + T.r * .5) {
                    d.r -= dt * 26;
                }
                return d.r > .6;
            });
            if (s.sats.length) {
                still = false;
            }
        }
        if (s.moving && still) {
            s.moving = false;
            if (s.split || !s.reduce) {
                s.rips.push({ x: T.x, y: T.cy, age: 0, amp: s.split ? 1.2 : .7 });
            }
        }
        s.rips.forEach(p => p.age += dt);
        s.rips = s.rips.filter(p => p.age < 2.4);
        s.mouse.s += ((s.mouse.on ? 1 : 0) - s.mouse.s) * Math.min(1, dt * 7);
    }
    function loop() {
        if (s.raf) {
            return;
        }
        s.last = performance.now();
        const tick = now => {
            const dt = Math.min((now - s.last) / 1000, 1 / 30);
            s.last = now;
            step(dt, now);
            draw();
            const busy = s.moving || s.rips.length || s.sats.length || s.mouse.s > .01;
            s.raf = s.visible && (!s.reduce || busy) ? requestAnimationFrame(tick) : 0;
        };
        s.raf = requestAnimationFrame(tick);
    }
    function measure() {
        const el = btns[cur];
        if (!el || !nav.offsetWidth) {
            return;
        }
        s.w = nav.offsetWidth;
        s.h = nav.offsetHeight;
        const T = s.t;
        T.r = el.offsetHeight / 2;
        T.q = Math.max(0, el.offsetWidth / 2 - T.r);
        T.cy = PAD + el.offsetTop + el.offsetHeight / 2;
        const nx = PAD + el.offsetLeft + el.offsetWidth / 2;
        if (!s.ready) {
            s.a.x = s.b.x = nx;
            s.q = T.q;
            s.ready = true;
        }
        else if (Math.abs(nx - T.x) > .5) {
            s.lead = Math.abs(nx - s.a.x) <= Math.abs(nx - s.b.x) ? 0 : 1;
            s.lagFrom = performance.now() + 70;
            s.moving = true;
            s.split = false;
        }
        T.x = nx;
        const dpr = Math.min(devicePixelRatio || 1, 2), W = s.w + PAD * 2, Hh = s.h + PAD * 2;
        if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(Hh * dpr)) {
            cv.width = Math.round(W * dpr);
            cv.height = Math.round(Hh * dpr);
            cv.style.width = W + 'px';
            cv.style.height = Hh + 'px';
        }
        loop();
    }
    const local = (x, y) => {
        const r = nav.getBoundingClientRect();
        return { x: x - r.left + PAD, y: y - r.top + PAD };
    };
    const ripple = (x, y, a) => {
        if (s.reduce) {
            return;
        }
        s.rips.push({ x, y, age: 0, amp: a });
        loop();
    };
    function playFx(i) {
        const ic = btns[i].querySelector('.nv-ico'), k = FXN[btns[i].dataset.view];
        ic.removeAttribute('data-fx');
        void ic.offsetWidth;
        ic.dataset.fx = k;
        const b = ic.getBoundingClientRect(), c = local(b.left + b.width / 2, b.top + b.height / 2);
        if (k === 'drop') {
            setTimeout(() => ripple(c.x, s.t.cy, 1.4), 430);
        }
        if (k === 'plane') {
            ripple(c.x, c.y, .6);
        }
    }
    btns.forEach((b, i) => b.addEventListener('click', () => playFx(i)));
    window.lqSync = () => {
        const i = btns.findIndex(b => b.classList.contains('active'));
        if (i >= 0 && i !== cur) {
            cur = i;
            measure();
        }
    };
    s.glc = initGL();
    if (!s.glc) {
        nav.dataset.gl = 'off';
    }
    cv.addEventListener('webglcontextlost', e => {
        e.preventDefault();
        s.glc = null;
        nav.dataset.gl = 'off';
    });
    nav.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse') {
            return;
        }
        const p = local(e.clientX, e.clientY);
        s.mouse.x = p.x;
        s.mouse.y = p.y;
        s.mouse.on = true;
        loop();
    });
    nav.addEventListener('pointerleave', () => {
        s.mouse.on = false;
        loop();
    });
    nav.addEventListener('pointerdown', e => {
        const p = local(e.clientX, e.clientY);
        ripple(p.x, p.y, .8);
    });
    document.addEventListener('visibilitychange', () => {
        s.visible = document.visibilityState === 'visible';
        if (s.visible) {
            loop();
        }
    });
    let lw = -1;
    new ResizeObserver(() => {
        const w = nav.offsetWidth;
        if (w && w !== lw) {
            lw = w;
            s.ready = false;
            measure();
        }
    }).observe(nav);
    lqSync();
    measure();
})();
// ============================================================
// PARTICLE WAVE BACKGROUND
// ============================================================
/* Particle wave background (raw WebGL port, no three.js needed) */
(function () {
    const cv = document.getElementById('bgwave');
    if (!cv) {
        return;
    }
    const g = cv.getContext('webgl', { alpha: true, antialias: false });
    if (!g) {
        cv.remove();
        return;
    }
    const small = innerWidth < 700, N = small ? 90 : 150, GAP = .3, dpr = Math.min(devicePixelRatio || 1, 1.5);
    const vs = `attribute vec3 position;uniform float uTime,uDpr;uniform mat4 uView,uProj;varying float vA;
void main(){vec3 p=position;float s=1.;p.y+=(sin(p.x+uTime)*.5)+(cos(p.y+uTime)*.1)*2.;p.x+=sin(p.y+uTime)*.5;s+=(sin(p.x+uTime)*.5)+(cos(p.y+uTime)*.1)*2.;
vec4 mv=uView*vec4(p,1.);gl_PointSize=max(s*12.*uDpr/-mv.z,1.);vA=clamp(1.-(-mv.z-6.)/34.,0.,1.)*.42;gl_Position=uProj*mv;}`;
    const fs = `precision mediump float;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(.38,.78,1.,vA*smoothstep(.5,.2,d));}`;
    const mk = (t, c) => {
        const x = g.createShader(t);
        g.shaderSource(x, c);
        g.compileShader(x);
        return x;
    }, pr = g.createProgram();
    g.attachShader(pr, mk(g.VERTEX_SHADER, vs));
    g.attachShader(pr, mk(g.FRAGMENT_SHADER, fs));
    g.linkProgram(pr);
    if (!g.getProgramParameter(pr, g.LINK_STATUS)) {
        cv.remove();
        return;
    }
    g.useProgram(pr);
    const pos = new Float32Array(N * N * 3);
    let k = 0;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            pos[k++] = x * GAP - N * GAP / 2;
            pos[k++] = 0;
            pos[k++] = y * GAP - N * GAP / 2;
        }
    }
    g.bindBuffer(g.ARRAY_BUFFER, g.createBuffer());
    g.bufferData(g.ARRAY_BUFFER, pos, g.STATIC_DRAW);
    const l = g.getAttribLocation(pr, 'position');
    g.enableVertexAttribArray(l);
    g.vertexAttribPointer(l, 3, g.FLOAT, false, 0, 0);
    const U = n => g.getUniformLocation(pr, n);
    g.enable(g.BLEND);
    g.blendFunc(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA);
    const e = [0, 6, 5], f = (() => {
        const m = Math.hypot(...e);
        return e.map(v => -v / m);
    })(), up = [0, 1, 0], cr = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    let r = cr(f, up);
    const rm = Math.hypot(...r);
    r = r.map(v => v / rm);
    const u2 = cr(r, f), dt = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    g.uniformMatrix4fv(U('uView'), false, [r[0], u2[0], -f[0], 0, r[1], u2[1], -f[1], 0, r[2], u2[2], -f[2], 0, -dt(r, e), -dt(u2, e), dt(f, e), 1]);
    let t = 0, raf = 0, last = 0, vis = true;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function size() {
        const w = innerWidth, h = innerHeight;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        g.viewport(0, 0, cv.width, cv.height);
        const a = w / h, q = 1 / Math.tan(75 * Math.PI / 360), n = .01, fa = 1000;
        g.uniformMatrix4fv(U('uProj'), false, [q / a, 0, 0, 0, 0, q, 0, 0, 0, 0, (fa + n) / (n - fa), -1, 0, 0, 2 * fa * n / (n - fa), 0]);
        g.uniform1f(U('uDpr'), dpr);
        frame();
    }
    function frame() {
        g.uniform1f(U('uTime'), t);
        g.clearColor(0, 0, 0, 0);
        g.clear(g.COLOR_BUFFER_BIT);
        g.drawArrays(g.POINTS, 0, N * N);
    }
    function tick(now) {
        t += Math.min((now - last) / 1000, .05) * .9;
        last = now;
        frame();
        raf = vis && !reduce ? requestAnimationFrame(tick) : 0;
    }
    function run() {
        if (raf || reduce) {
            return;
        }
        last = performance.now();
        raf = requestAnimationFrame(tick);
    }
    addEventListener('resize', size);
    document.addEventListener('visibilitychange', () => {
        vis = document.visibilityState === 'visible';
        if (vis) {
            run();
        }
    });
    size();
    run();
})();
