const arr = []
const saltround = 10;
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const fs = require("fs")
const jwt = require("jsonwebtoken")

const  register = (req,res) =>{
    const detail = req.body
    console.log(detail)
    const user = arr.find((items)=>{
        return detail.email==items.email // this will return a bollean value and assign to user variable
    })

    if (user){
        return res.status(200).send({msg:"User Already Exists"})
    }
    const hashpass =  bcrypt.hashSync(detail.password,saltround)

    const obj = {
        email:detail.email,
        password: hashpass
    }
    arr.push(obj)
    console.log(arr)
    return res.status(200).send({msg:"Student Succesfully Registered"})
}

const login = async (req,res) =>{
    const loginData = req.body
    console.log(loginData)
    const match = arr.find((items)=>{
        if (loginData.email===items.email){
            return items
            
        }
    })
    const validate = await bcrypt.compareSync(loginData.password,match.password)
    console.log(validate)
    const secretkey = "qwerty321"
    if (validate){
        const jwttoken = jwt.sign(loginData,secretkey)
        return res.status(200).send({msg:"User Has Logged In Successfully",Token:jwttoken})
    }
    else{
        return res.send({msg:"Invalid Password."})
    }
    
}

const verify = (req,res,next)=>{
    const rewToken = req.header("Authorization")
    console.log(rewToken)
    const secretkey = "qwerty321"
    const vertoken = jwt.verify(rewToken,secretkey)
    next()
}


const bollywood = (req,res) =>{
    res.send([
        {
            "id":0,
            "Likes":4,
            "cat":"Bollywood",
            "Name":"PATHAAN",
            "Image":"https://stat5.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-11.jpg",
            "Year":2023,
            "Des":"Siddharth Anand's story is simple and even clichéd. But Shridhar Raghavan's screenplay is highly engaging as the writer peppers the narrative with loads of action, humour, thrill, and even emotions. Abbas Tyrewala's dialogues are smart yet conversational. A few dialogues are moving.",
            "Date":"16 February 2023 ",
            "author" : "Sharada Iyer",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":1,
            "Likes":12,
            "cat":"Hollywood",
            "Name":"THE POPE'S EXORCIST",
            "author" : "uibuwbcew",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/04/The-Pope-s-Exorcist-English.jpg",
            "image2":"https://cdn.kinocheck.com/i/0i0xq0cgzf.jpg",
            "Year":2022,
            "Des":"Michael Petroni and Evan Spiliotopoulos's screenplay is effective in the beginning portions and while introducing the characters and the setting. Later on, it gets clichéd. The dialogues are powerful and the comic one-liners bring respite from the tensions and scares.",
            "Date":"6 March 2023 ",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":2,
            "Likes":5,
            "cat":"Technology",
            "Name":"Mac Rumors",
            "Image":"https://detailed.com/images/macrumors.jpg",
            "Year":2023,
            "Des":"Founded and owned by Arnold Kim, MacRumors attracts a broad audience of both consumers and professionals interested in the latest technologies and products.",
            "Date":"6 March 2023 ",
            "author" : "uibuwbcew",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":3,
            "Likes":1,
            "cat":"Fitness",
            "Name":"Five Ways to Help Stay Safe While Cycling",
            "Image":"https://th.bing.com/th/id/OIP.Ap8u_YaXUvduSP2IZ17HIAHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "Year":2023,
            "Des":"While it may seem far away, spring is just around the corner — and with it the desire to spend as much time as possible soaking up the sunshine. If you’re leaving behind the indoor trainers and getting reacquainted with favorite cycling routes in your area, be sure to brush up on cycling safety tips.",
            "Date":"14 March 2023",
            "author" : "uibuwbcew",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":4,
            "Likes":8,
            "cat":"Food",
            "Name":"Phở Saigon (Southern Vietnamese Beef Noodle Soup)",
            "Image":"https://www.seriouseats.com/thmb/g1X0CooMa_BHe3jtQJsEdPI5qQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230405-SEA-PhoSaigon-VyTran39-c7096b013d0940649f0f7756c03fa3eb.jpg",
            "image2":"https://www.phosaigon.co/img/verm.jpg",
            "Year":2023,
            "Des":" has become a culinary icon in recent years, but its existence is relatively new, when one considers Vietnam’s long history. While most historians agree that phở was invented some time between the late 19th century and the early 20th century in northern Vietnam",
            "Date" :"05 April 2023",
            "author" : "Cookie + Kate. ",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[food,Vietnam,Soup]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            
            "id":5,
            "Likes":18,
            "cat":"Street",
            "Name":"Mini Gallery: Random Scenes from New York",
            "Image":"https://i0.wp.com/roadlesstravelled.me/wp-content/uploads/2015/09/nyc-cover.jpg?w=1447&ssl=1",
            "Year":2023,
            "Des":" A mini gallery of scenes and reflections from the greatest metropolis, New York City. From elaborate and ornate Art Deco to towering concrete monoliths, dirty neon chaos and modern galleries filled with famous inspired works… Manhattan is simply incredible.",
            "Date" :"15th September 2015",
            "author" : "uibuwbcew",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            
          },
          {
            "id":6,
            "Likes":25,
            "cat":"Hollywood",
            "Name":"JOHN WICK: CHAPTER 4",
            "author" : "Koji Shimazu",
            "dater": "01/04/2023",
            "lastread": "1 Hour ago",
            "tags": "[Hollywood,Movie,Action]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://static.wikia.nocookie.net/john-wick8561/images/e/eb/2446510A-467D-43E3-86E3-2370D9080C19.jpeg/revision/latest/scale-to-width-down/1000?cb=20221203235410",
            "image2":"https://movieguide.b-cdn.net/wp-content/uploads/2023/03/john_wick_chapter_four_ver21.jpeg",
            "Year":2023,
            "Des":"John Wick: Chapter 4 is the fourth installment in the film series, and a sequel to the 2019 film John Wick: Chapter 3 – Parabellum. It was released on March 24, 2023, by Lionsgate in theaters and IMAX. Previously it was pushed back another year to avoid competing with Top Gun: Maverick.[1]",
            "Date":"March 24, 2023",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":7,
            "Likes":13,
            "cat":"Bollywood",
            "Name":"The Family Man Season 3",
            "author" : "Umesh",
            "dater": "17/04/2023",
            "lastread": "5 Hour ago",
            "tags": "[Bollywood,Movie,Action]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://m.economictimes.com/thumb/msid-92752628,width-1200,height-900,resizemode-4,imgsize-68788/the-family-man-season-3-release-date-plotline-and-more.jpg",
            "image2":"https://www.wikibiodata.com/wp-content/uploads/2021/05/The-Family-Man-Season-2.jpg",
            "Year":2023,
            "Des":"The viewers loved the second season of ‘The Family Man’, which premiered in June 2021. The first season, which debuted on Amazon in late 2019, also received brilliant reviews. Starring Manoj Bajpayee in the lead role, The Family Man is one of the best web series in the Indian OTT space. In fact, the second season of the show is among the most streamed Indian OTT shows of all time. After two fabulous seasons, the spy thriller has been renewed for the third season. The Family Man Season 3 is among the most awaited Hindi web series of 2023.The crime thriller series shows the story of a middle-class man who works as an intelligence officer for a special unit T.A.S.C of the National Investigation Agency. While he tries to protect the nation from terrorists, he also has to protect his family from the impact of his secretive, high-pressure, and low-paying job.",
            "Date":"April 15, 2023",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":8,
            "Likes":-25,
            "cat":"Bollywood",
            "Name":"SHAMSHERA: An unbelievably horrendous film!",
            "author" : "Sharada Iyer",
            "dater": "17/04/2023",
            "lastread": "1 Year ago",
            "tags": "[Bollywood,Movie,Action]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://myviewsonbollywood.files.wordpress.com/2022/07/shamshera2.jpg",
            "image2":"https://myviewsonbollywood.files.wordpress.com/2022/07/shamshera-1.jpg",
            "Year":2022,
            "Des":"The story of the film is set in the year 1871 in a fictious city of Kaza and it is about the people of a fictional tribe, called Khameran, and their oppression and sufferings not only at the hands of the British but also the Indians who worked for the British. Added to that was a ‘caste’ angle as the Khamerans belonged to the lower caste, the Hindu upper caste were more against them than the British also. Which brings us to the so-called deadly villain, Inspector Shuddhi Singh, played by Sanjay Dutt. He gets a vicious pleasure in torturing the Khamerans and loves working for the British.",
            "Date":"JULY 24, 2022",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":9,
            "Likes":13,
            "cat":"Bollywood",
            "Name":"RUNWAY 34: A superbly crafted riveting aviation drama",
            "author" : "Sharada Iyer",
            "dater": "17/04/2023",
            "lastread": "9 Months ago",
            "tags": "[Bollywood,Movie,Drama]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://myviewsonbollywood.files.wordpress.com/2022/04/runway-34-1.jpg",
            "image2":"https://upload.wikimedia.org/wikipedia/en/7/79/Runway_34_poster.jpg",
            "Year":2022,
            "Des":"The entire action in the first half takes place on a Dubai-Cochin flight and the camerawork, the special effects, the sound system and attention to detailing is so brilliantly and realistically done that in the darkness of the cinema hall, every viewer feels that he/she is on board the flight experiencing every emotion and action and horror that is shown and we can relate to everything happening making it a very immersive experience. It was scary yet gripping and brilliant and gave goosebumps! The second half concentrates on the investigation conducted by the aviation authorities to understand what exactly happened on the particular flight and why and how the incidents happened. The courtroom scenes are taut, very interesting and directed well. Both the parts of the film are entertaining and enlightening and definitely novel for Hindi cinema viewers.",
            "Date":"APRIL 30, 2022 ",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":10,
            "Likes":11,
            "cat":"Fitness",
            "Name":"Is A Calorie Really A Calorie?",
            "Image":"https://th.bing.com/th/id/OIP.Ap8u_YaXUvduSP2IZ17HIAHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "Year":2023,
            "Des":"While it may seem far away, spring is just around the corner — and with it the desire to spend as much time as possible soaking up the sunshine. If you’re leaving behind the indoor trainers and getting reacquainted with favorite cycling routes in your area, be sure to brush up on cycling safety tips.",
            "Date":"14 March 2023",
            "author" : "uibuwbcew",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":11,
            "Likes":20,
            "cat":"Technology",
            "Name":"AI art freaks me out. So I tried to make some.",
            "Image":"https://cdn.vox-cdn.com/thumbor/CWUomWNlr9h8BeMDK5DECGX0VIQ=/0x0:1680x1024/920x613/filters:focal(857x287:1125x555):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72172466/Screen_Shot_2023_04_11_at_10.09.44_AM.0.png",
            "Year":2023,
            "Date":"Apr 12, 2023",
            "author" : "Rebecca Jennings",
            "dater": "12/03/2023",
            "lastread": "20 min ago",
            "tags": "[Technology,Movie,AI]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
            "Des":"In the past month, not one but two pieces of AI-generated content featuring the fashion brand Balenciaga went viral. The much bigger deal was the photo of Pope Francis in a white puffer coat (and absolutely dripping in swag) that a lot of people thought was real. But I’d argue the more interesting one was a video that imagined Harry Potter if it were a Balenciaga campaign in the late ’80s or early ’90s.",
          },
          {
            "id":12,
            "Likes":18,
            "cat":"Technology",
            "Name":"Your phone is ruining your vacation",
            "Image":"https://cdn.vox-cdn.com/thumbor/ISZF6TrkOKbs7XY7O_MvLVVJS_Y=/0x0:2309x1299/920x613/filters:focal(971x466:1339x834):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72153542/GettyImages_1361920348.0.jpg",
            "Year":2023,
            "Date":"Apr 6, 2023,",
            "author" : " Emily Stewart",
            "dater": "12/03/2023",
            "lastread": "20 min ago",
            "tags": "[Technology,Movie,AI]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
            "Des":"Many of us have been there: sitting in the middle of some beautiful destination on a much-anticipated getaway, on the beach or in the mountains or wherever strikes our fancy, and ... staring at our phones. The little screen so often trumps the giant screen that is real life, even in moments when the intention is to take a break from the little screen and the day-to-day stress it brings with it.",
          },
          {
            "id":13,
            "Likes":23,
            "cat":"Technology",
            "Name":"The exciting new AI transforming search — and maybe everything — explained",
            "Image":"https://cdn.vox-cdn.com/thumbor/0O9O5R4dq3204GHFv3HJe-N822E=/0x0:4897x3428/1820x1024/filters:focal(2058x1323:2840x2105):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72036840/GettyImages_1195224000.0.jpg",
            "Year":2023,
            "Date":"Apr 6, 2023,",
            "author" : "Sara Morrison",
            "dater": "12/03/2023",
            "lastread": "2 Hour ago",
            "tags": "[Technology,Movie,AI]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
            "Des":"The world’s first generative AI-powered search engine is here, and it’s in love with you. Or it thinks you’re kind of like Hitler. Or it’s gaslighting you into thinking it’s still 2022, a more innocent time when generative AI seemed more like a cool party trick than a powerful technology about to be unleashed on a world that might not be ready for it.",
          },
          {
            "id":14,
            "Likes":28,
            "cat":"Hollywood",
            "Name":"Star Wars movie order: a definitive viewing chronology for the galaxy far, far away",
            "author" : "NME",
            "dater": "01/04/2023",
            "lastread": "5 Months ago",
            "tags": "[Hollywood,Movie,Action]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://www.nme.com/wp-content/uploads/2019/12/Screenshot-2019-12-18-at-00.36.46-696x442.jpg",
            "image2":"https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-tentpole-mobile2_18b5233d.jpeg?region=0,0,1024,1024&width=960",
            "Year":2022,
            "Des":"Star Wars is one of the largest film franchises ever. The galaxy far, far away shows no signs of slowing down any time soon, with new instalments, re-writes and retcons adding to the franchise every year since 2015.With the unusual ordering of the films’ releases, it’s not that easy to decide which order it’s best to watch them in: do you start with the first films – 1977-1983’s original trilogy – then go backwards to the prequels, later skipping forwards to the new Rey trilogy? Die-hard fans might argue the release-day route, but others will encourage following the timeline – and some even say skip a few to avoid disappointment.",
            "Date":"8th November 2022",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":15,
            "Likes":15,
            "cat":"Hollywood",
            "Name":"Avatar 2",
            "author" : "NME",
            "dater": "01/04/2023",
            "lastread": "10 Months ago",
            "tags": "[Hollywood,Movie,Fiction]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://www.nme.com/wp-content/uploads/2017/02/2017_avatar_Fox_030217.jpg",
            "image2":"https://www.nme.com/wp-content/uploads/2022/04/Fgjwox7XEAYpjf7.jpg",
            "Year":2022,
            "Des":"IT: Alamy In 2009, Avatar well and truly took over the world. For months all you could hear about was the unrivalled scope, incredible animation and immersive experience of the fantasy epic – and for good reason, at the time it felt groundbreaking. That was over a decade ago though, and director James Cameron has been talking about the sequels (yes, all four of them) consistently since, production on Avatar 2 ended in November 2019.As we all get ready to go back to Pandora for the next instalment – here’s everything you can expect to see in Avatar 2.",
            "Date":"28th April 2022",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":16,
            "Likes":15,
            "cat":"Hollywood",
            "Name":"Venom 2",
            "author" : "Sam Moore",
            "dater": "01/04/2023",
            "lastread": "10 Months ago",
            "tags": "[Hollywood,Movie,Venom]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "Image":"https://www.nme.com/wp-content/uploads/2020/03/Venom-Let-There-Be-Carnage-still-696x442.jpg",
            "image2":"https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
            "Year":2021,
            "Des":"Sony’s take on Venom, starring the one and only Tom Hardy, was an action-packed and very silly big-screen adaptation of the Marvel character’s story. And if you enjoyed seeing Mr Hardy transforming into a horrific spider-like alien in 2018, then good news! A sequel is heading to the big screen later this year (coronavirus permitting).Here’s everything we know so far about Venom: Let There Be Carnage.Venom: Let There Be Carnage was due to hit cinemas on September 15, 2021 in the UK, and September 24 in the US but has been delayed due to more COVID fears (August 12, 2021).",
            "Date":"12th August 2021",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":17,
            "Likes":4,
            "cat":"Bollywood",
            "Name":"BHOLAA",
            "Image":"BHOLAA",
            "image2":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Bholaa_film_poster.jpg/220px-Bholaa_film_poster.jpg",
            "Year":2023,
            "Des":"ights a gang of thieves and confiscates 900 kgs of drugs from them, worth Rs. 1,000 crores. She hides the drugs in the basement of the sprawling Lalganj Police Station. At night, she attends the retirement party of I G Jayant Malik (Kiran Kumar). In a strange turn of events, all the 50 cops at the party faint one by one after drinking the spiked drink. Diana, who was injured, didn’t consume alcohol and she’s the only one on her feet.",
            "Date":"March 30, 2023 ",
            "author" : "Sharada Iyer",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Bollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":18,
            "Likes":23,
            "cat":"Technology",
            "Name":"Developers are looking for creative ways to build AI-powered chatbot assistants",
            "Image":"https://techcrunch.com/wp-content/uploads/2022/06/GettyImages-1364050120.jpg?w=1390&crop=1",
            "image2":"https://techcrunch.com/wp-content/uploads/2023/04/Screenshot-2023-04-14-at-4.53.30-PM.jpg?resize=768,440",
            "Year":2023,
            "Date":"April 17, 2023",
            "author" : "Ivan Mehta",
            "dater": "12/03/2023",
            "lastread": "15 Minutes ago",
            "tags": "[Technology,Movie,AI]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
            "Des":"Since OpenAI unveiled ChatGPT last year, it has been almost impossible to go a day without a company or developer releasing an AI-powered tool. Now, with the release of new models like OpenAI’s GPT-4 and Anthroipic’s Claude, more app makers are trying their hands at tools that are more accessible and useful to people.Some apps are providing a native mobile or desktop experience that lets people talk with AI-powered chatbots outside of the web browser. Their core idea is to earn money by unlocking unlimited access to these bots and providing some prompt ideas to users.",
          },
          {
            "id":19,
            "Likes":16,
            "cat":"Fitness",
            "Name":"The Ultimate Back and Biceps Workout for Every Lifter From Beginner to Advanced",
            "Image":"https://www.heart.org/-/media/Images/Healthy-Living/Fitness/BreakingDownBarriersFitness.jpg",
            "image2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRbklVPURcPABSTymrwakoCemXl83G4RN9g&usqp=CAU",
            "Year":2023,
            "Des":"The goal with beginner-level training is to get strong and do so with a low barrier of entry, using exercises that can be relatively easily mastered. Many lifters who are new to the gym gravitate toward training their back using barbell rows. While the barbell can be a great tool for back training, it’s often skill-intensive and highly fatiguing, especially for beginners.",
            "Date":"February 6, 2023",
            "author" : "Calvin Huynh ",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":20,
            "Likes":16,
            "cat":"Fitness",
            "Name":"Training to Failure: 5 Questions You Need to Answer",
            "Image":"https://www.heart.org/-/media/Images/Healthy-Living/Fitness/BreakingDownBarriersFitness.jpg",
            "image2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRbklVPURcPABSTymrwakoCemXl83G4RN9g&usqp=CAU",
            "Year":2021,
            "Des":"Whatever your goal, the idea of seeking failure is misunderstood and misapplied, and a big reason why many people don’t see amazing results from their workouts.When I first started lifting weights, I tried to take every set to failure. I didn’t know any better because no one told me any different. And, if I looked at how Arnold lifted and the culture of bodybuilding, complete failure appeared to be the goal of training sessions.For years, that meant thinking of resistance exercise in absolute terms. A workout wasn’t a success unless I could no longer move my muscles at the end of a session, even if I needed a spotter to save me from being crushed by a barbell (yeah, that happened). ",
            "Date":"JULY 26, 2021",
            "author" : "ADAM BORNSTEIN",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Hollywood,Movie,Horror]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":21,
            "Likes":8,
            "cat":"Food",
            "Name":"3-Ingredient Banana Pancakes",
            "Image":"https://cookieandkate.com/images/2023/02/3-ingredient-banana-pancake-recipe-1-2-768x1152.jpg",
            "image2":"https://cookieandkate.com/images/2023/02/banana-pancakes-kid-friendly-768x1152.jpg",
            "Year":2023,
            "Des":"Maybe the world needs more banana pancakes. Yes, that’s just what we’re missing. Yes, that’s what I’m telling myself right now. This thirteen-year-old (!) recipe website already has several banana pancake recipes, each wonderful in its own way, and here I am with another.",
            "Date" :"23 April 2023",
            "author" : "Cookie + Kate. ",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Food,Sweet,Breakfast]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":22,
            "Likes":8,
            "cat":"Food",
            "Name":"Caprese Sandwich",
            "Image":"https://cookieandkate.com/images/2020/10/vegetarian-baguette-sandwich-recipe-1-768x1152.jpg",
            "image2":"https://cookieandkate.com/images/2020/10/caprese-sandwich-assembly-768x528.jpg",
            "Year":2023,
            "Des":"Picnic season is here! We’re enjoying a lovely spring here in Kansas City. Our homegrown tomatoes won’t be ready for a while, but I’m sharing my favorite picnic sandwich with you since I can find great tomatoes at the store now.This Caprese sandwich recipe is inspired by the classic Caprese salad. It features ripe red tomatoes and sliced fresh mozzarella with the most irresistible creamy basil sauce. ",
            "Date" :"15 March 2023",
            "author" : "Cookie + Kate. ",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Food,Spicy,Dinner]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          },
          {
            "id":23,
            "Likes":8,
            "cat":"Food",
            "Name":"Simple Strawberry Smoothie",
            "Image":"https://cookieandkate.com/images/2021/05/simple-strawberry-smoothie-recipe-2-768x1156.jpg",
            "image2":"https://cookieandkate.com/images/2021/05/strawberry-smoothie-ingredients-768x528.jpg",
            "Year":2023,
            "Des":"You’re going to love this strawberry smoothie. This recipe is cold, creamy and satisfying, and its nutty strawberry flavor is truly crave-worthy.In their most basic form, these strawberry smoothies require just four ingredients—frozen strawberries, frozen bananas, almond milk and almond butter.This smoothie recipe tastes like a strawberry milkshake, and you can make it for breakfast! I’ll be sipping on these pink drinks all summer, and I hope the recipe becomes a staple in your home as well.",
            "Date" :"29 March 2023",
            "author" : "Cookie + Kate. ",
            "dater": "12/03/2023",
            "lastread": "10 min ago",
            "tags": "[Food,Sweet,Desert]",
            "imginsta":"https://cdn-icons-png.flaticon.com/512/3621/3621464.png",
            "imgface":"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
            "imgtwi":"https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk",
            "imgyou":"https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
            "AImage":"https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          }
    ])
}

module.exports = {register,login,verify,bollywood}