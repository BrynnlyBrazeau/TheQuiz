let currentQuestion = 0;
let scoreA = 0;
let scoreB = 0;

// Sample questions array (add more questions as needed)
const questions = [
    {
        question: "Start quiz?",
        options: [
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3yHNnmtMJmvbHeGrOVw_hq-tWodT6w4wNw&s', text: 'Okay', variable: 'B' },
            { img: 'https://www.shutterstock.com/image-vector/blue-check-mark-tick-verification-600nw-2435881317.jpg', text: 'Okay', variable: 'A' },
            { img: 'https://banner2.cleanpng.com/20190202/tvk/kisspng-clip-art-check-mark-openclipart-image-x-mark-1713908425681.webp', text: 'Okay', variable: 'B' },
            { img: 'https://ih1.redbubble.net/image.2570025763.9996/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg', text: 'Okay', variable: 'A' },
        ]
    },
    {
        question: "Choose a color",
        options: [
            { img: 'https://www.neenahpaper.com/-/media/images/storefront/chips/astrobrights-papers/astrobrights-papers-cosmic-orange-smooth.ashx', text: 'Orange', variable: 'B' },
            { img: 'https://www.myperfectcolor.com/repositories/images/colors/dutch-boy-db117-2-zany-lime-paint-color-match-2.jpg', text: 'Yellow', variable: 'A' },
            { img: 'https://i.pinimg.com/736x/25/4c/d3/254cd3d370efe722fa787effaec378d4.jpg', text: 'Pink', variable: 'A' },
            { img: 'https://colors.artyclick.com/color-names-dictionary/color-names/light-salmon-pink-color/light-salmon-pink-color_color.png', text: 'Pink', variable: 'B' },
        ]
    },
    {
        question: "Choose a blue",
        options: [
            { img: 'https://garden.spoonflower.com/c/16304714/p/f/m/S1bfdVw3VcYZNnFzbJtN77T0XqjZzHJ2RmGqUVmFs-n1s8ToDlV39QM/071C46%20Solid%20Color%20Map%20Dark%20Purple%20Blue.jpg', text: 'Blue', variable: 'A' },
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7IKzUWdWc8-D6RTTleQn2NFPTI49ZpNPBA&s', text: 'Blue', variable: 'B' },
            { img: 'https://www.elorahomehardware.ca/cdn/shop/products/144B86_1024x.png?v=1608050442', text: 'Blue', variable: 'B' },
            { img: 'https://lh4.googleusercontent.com/proxy/yHzkFyMrF3UaDdSPWuIskvd-NCEJ1n_Zg_sgaHjUHdgXUh0AlvsdNrq4K7VS3_cTvaBI_CfHFwawqpkj62K9gNGR9GdNi_lCzw_bEb4fiqih_dgEL-FjdOOMXr-CDQ6KMWdGvM6XWXT1IdV9ppYSQA', text: 'Blue', variable: 'A' },
        ]
    },
    {
        question: "Choose a red",
        options: [
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGPf08C69R1vBfS6tqbdOmH_81Qb7K2iC3w&s', text: 'Red', variable: 'A' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/1024px-Solid_red.svg.png', text: 'Red', variable: 'A' },
            { img: 'https://htmlcolorcodes.com/assets/images/colors/red-orange-color-solid-background-1920x1080.png', text: 'Red', variable: 'B' },
            { img: 'https://cdn.wallpapersafari.com/43/47/4KupwZ.jpg', text: 'Red', variable: 'B' },
        ]
    },
    {
        question: "Choose a dishsoap brand 🧼",
        options: [
            { img: 'https://assets.epicurious.com/photos/65fb208c03d8a4ee81bc9f14/3:4/w_748%2Cc_limit/Screen%2520Shot%25202024-03-20%2520at%25201.44.41%2520PM.png', text: 'Blue', variable: 'B' },
            { img: 'https://assets.epicurious.com/photos/65fb3027d5fe8a3b370e0a15/3:4/w_748%2Cc_limit/Screen%2520Shot%25202024-03-20%2520at%25202.51.16%2520PM.png', text: 'Green', variable: 'B' },
            { img: 'https://assets.shop.loblaws.ca/products/20861642/b2/en/front/20861642_front_a06_@2.png', text: 'Orange', variable: 'A' },
            { img: 'https://www.instacart.com/image-server/1864x1864/www.instacart.com/assets/domains/product-image/file/large_aa958699-9131-4197-97fe-31e775f3a502.jpg', text: 'Yello?', variable: 'A' },
        ]
    },
    {
        question: "Time to design your dream room...",
        options: [
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgocTyVpIy46tZlR9nbhz11n7S3EsrnSYPSg&s', text: 'Okay', variable: 'A' },
            { img: 'https://thumbs.dreamstime.com/b/tick-icon-vector-symbol-checkmark-isolated-white-background-check-list-button-icon-check-mark-icon-square-sign-tick-icon-139453261.jpg', text: 'Okay', variable: 'B' },
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s', text: 'Okay', variable: 'B' },
            { img: 'https://banner2.cleanpng.com/20180314/dqw/av0evggfc.webp', text: 'Okay', variable: 'A' },
        ]
    },
    {
        question: "Choose a bedroom door to step through 🚪",
        options: [
            { img: 'https://laballoons.com/cdn/shop/products/unique-paw-patrol-door-poster-27-inch-x-60-inch-party-decor-77448-un-30035917832255.jpg?v=1675548956', text: 'Paw Patrol', variable: 'A' },
            { img: 'https://pics.craiyon.com/2023-11-04/0c2f63e365e44cf9967a56a9ae03b1bf.webp', text: 'Hobbit', variable: 'B' },
            { img: 'https://thumbs.dreamstime.com/z/supportive-gay-community-puerto-vallarta-door-painted-lgbt-color-rainbow-stripes-colorful-door-paint-rainbow-247129618.jpg', text: 'Sao Paulo, Brazil', variable: 'B' },
            { img: 'https://i.pinimg.com/originals/b7/d4/80/b7d480afe4798d920c086fbcb9b43a7b.jpg', text: 'Door', variable: 'A' },
        ]
    },
    {
        question: "Which wallpaper do you want in your dream room? 🖼️",
        options: [
            { img: 'https://uk.bimago.media/media/catalog/image/view/product/137249/role/image/size/1500x2240/type/ft-osmr-wiz2/aa9c369786c906b86132f7d6f875b60d.webp', text: 'Spikey', variable: 'A' },
            { img: 'https://hips.hearstapps.com/hmg-prod/images/0-9-1554311499.jpg', text: 'Fish', variable: 'B' },
            { img: 'https://www.wallsauce.com/uploads/wallsauce-com/images/blogs/cloud-wallpaper.jpg', text: 'Clouds', variable: 'B' },
            { img: 'https://vivianferne.com/cdn/shop/files/BestHomeDecor-BestColorfulWallpaper-BestLivingRoomDecor-BestSpaDecor-AbstractWallpaperDesign-TopPicksforInteriorDesigners-BestInteriorDesignerNearMe_44aa09ce-b906-42e7-91f8-1917e8045755.webp?v=1697207584', text: 'Woah', variable: 'A' },
        ]
    },
    {
        question: "Pick a chair to relax in 🪑",
        options: [
            { img: 'https://i.etsystatic.com/45697722/r/il/c473c2/6220893202/il_fullxfull.6220893202_5bxf.jpg', text: 'Shark', variable: 'B' },
            { img: 'https://m.media-amazon.com/images/I/71z3N8OZvYL._AC_UF894,1000_QL80_.jpg', text: 'Chair', variable: 'B' },
            { img: 'https://i.etsystatic.com/12143492/r/il/70973f/3902937500/il_fullxfull.3902937500_sxii.jpg', text: 'Retro', variable: 'A' },
            { img: 'https://madeandmake.sg/wp-content/uploads/madeandmake-mogg-7-pillows-lng-chr-1.png', text: 'Pillow Chair', variable: 'A' },
        ]
    },
    {
        question: "Pick a bed to sleep in 🛏️",
        options: [
            { img: 'https://images.huffingtonpost.com/2015-12-14-1450131004-1469609-rockingadultstosleepworks.jpeg', text: 'Rocking', variable: 'B' },
            { img: 'https://ak1.ostkcdn.com/images/products/is/images/direct/99999b9486f1c95a343d11b781826df9be7a34e2/Red-Car-Shaped-Twin-Size-Wooden-Race-Car-Bed-Frame-w--Shelves-Unisex.jpg', text: 'Racecar Bed', variable: 'A' },
            { img: 'https://static.boredpanda.com/blog/wp-content/uuuploads/creative-beds/creative-beds-letto-zip-2.jpg', text: 'Comfy', variable: 'B' },
            { img: 'https://i.pinimg.com/736x/63/97/2b/63972b3a5a2426991a71a9ff08b081bc.jpg', text: 'Wood', variable: 'A' },
        ]
    },
    {
        question: "Next up: fashion!..",
        options: [
            { img: 'https://png.pngtree.com/png-clipart/20230805/original/pngtree-ok-icon-orange-vector-agreement-approved-vector-picture-image_9700277.png', text: 'Okay', variable: 'B' },
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk9MoRHuFFqQeTaHlxhbqVhGrtHlE8OB2vg&s', text: 'Okay', variable: 'B' },
            { img: 'https://www.freeiconspng.com/uploads/ok-icon-orange-check-mark-6.png', text: 'Okay', variable: 'A' },
            { img: 'https://cdn-icons-png.flaticon.com/512/4990/4990593.png', text: 'Okay', variable: 'A' },
        ]
    },
    {
        question: "Choose an outfit 👗",
        options: [
            { img: 'https://ih1.redbubble.net/image.4969366479.5056/aldr,x1700,front-c,185,103,750,1000-bg,f8f8f8.jpg', text: 'Emoji', variable: 'A' },
            { img: 'https://m.media-amazon.com/images/I/81beO-NeWaL._AC_UF894,1000_QL80_.jpg', text: 'Fish Scale', variable: 'B' },
            { img: 'https://img.fruugo.com/product/0/97/270329970_0340_0340.jpg', text: 'Tube Top', variable: 'B' },
            { img: 'https://m.media-amazon.com/images/I/61nDmqqwaIL._AC_UY1000_.jpg', text: 'Zebra', variable: 'A' },
        ]
    },
    {
        question: "Which sock pattern speaks to you? 🧦",
        options: [
            { img: 'https://leslainesbiscotte.com/cdn/shop/products/EB_09345-2.jpg?v=1711459734', text: 'Fish', variable: 'B' },
            { img: 'https://www.sokisahtel.net/pub/media/catalog/product/cache/74f732ad8a1c964a5620714b3c4418ba/v/u/vunts_blue-green_moustche_socks_sokisahtel.png', text: 'Moustache', variable: 'B' },
            { img: 'https://cdn.thisiswhyimbroke.com/buying-guides-thumb/765/handmade-croc-socks_400x.jpg', text: 'Gator', variable: 'A' },
            { img: 'https://images-na.ssl-images-amazon.com/images/I/71m9H81vWeL._AC_SR462,693_.jpg', text: 'Shrooms', variable: 'A' },
        ]
    },
    {
        question: "Choose a hat to wear 👒",
        options: [
            { img: 'https://lbthreads.com/cdn/shop/files/15_09b7b56b-fdc6-4872-b205-3db5b06df94f_394x.png?v=1684606785', text: 'Neon', variable: 'A' },
            { img: 'https://m.media-amazon.com/images/I/713Ma6+7i1L._AC_UF894,1000_QL80_.jpg', text: 'Bear', variable: 'B' },
            { img: 'https://i5.walmartimages.com/asr/f659005e-2f9c-413c-a05b-3bf3159b225c.3798a267205b522c235b1233d7f53a6a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', text: 'Fish', variable: 'B' },
            { img: 'https://i.etsystatic.com/7192509/r/il/4672ef/2135170489/il_fullxfull.2135170489_k8db.jpg', text: 'Duck', variable: 'A' },
        ]
    },
    {
        question: "Choose a matching hat for your pet 🐾",
        options: [
            { img: 'https://i.etsystatic.com/10855774/r/il/c0ec05/3374599899/il_570xN.3374599899_cn3q.jpg', text: 'Knitted Hat', variable: 'A' },
            { img: 'https://www.shutterstock.com/image-photo/happy-dog-witch-costume-sits-600nw-1948637722.jpg', text: 'Witch/Wizard', variable: 'B' },
            { img: 'https://cdn11.bigcommerce.com/s-zy7iaurt44/images/stencil/500x659/products/193/5267/Mohawk_Dog_Helmet__65523.1633435192.jpg?c=2', text: 'Wicked', variable: 'A' },
            { img: 'https://m.media-amazon.com/images/I/41zxN38dI5L._AC_.jpg', text: 'Propeller', variable: 'B' },
        ]
    },
    {
        question: "Ready to head outside?",
        options: [
            { img: 'https://png.pngtree.com/png-clipart/20230304/ourmid/pngtree-tick-icon-vector-symbol-green-checkmark-isolated-transparent-background-png-image_6629080.png', text: 'Okay', variable: 'A' },
            { img: 'https://png.pngtree.com/png-vector/20240517/ourmid/pngtree-green-circle-check-mark-png-image_12482858.png', text: 'Okay', variable: 'B' },
            { img: 'https://png.pngtree.com/png-vector/20240602/ourlarge/pngtree-green-check-mark-icon-vector-png-image_12612593.png', text: 'Okay', variable: 'B' },
            { img: 'https://cdn3d.iconscout.com/3d/premium/thumb/check-mark-3d-icon-download-in-png-blend-fbx-gltf-file-formats--approved-tick-website-pack-user-interface-icons-5230846.png?f=webp', text: 'Okay', variable: 'A' },
        ]
    },
    {
        question: "Choose an umbrella to leave with 🌂",
        options: [
            { img: 'https://odo-cdn.imgix.net/catalog/product/163/644/1636443909.4114.png?auto=compress,format&w=800&h=800&bg=fff&fit=fill', text: 'Light-Up', variable: 'A' },
            { img: 'https://m.media-amazon.com/images/I/61KkC5u-0cL.jpg', text: 'Parasol', variable: 'B' },
            { img: 'https://shop.pbs.org/cdn-cgi/image/quality=65,format=auto/graphics/products/large/HBT086_wet_SIG0124.jpg', text: 'Polka Dot', variable: 'A' },
            { img: 'https://static.vecteezy.com/system/resources/previews/037/530/695/large_2x/ai-generated-funny-puffer-fish-with-umbrella-on-wooden-floor-in-rain-photo.jpg', text: 'Ew', variable: 'B' },
        ]
    },
    {
        question: "Choose a tree 🌳",
        options: [
            { img: 'https://www.wilsonbrosgardens.com/cdn-cgi/image/quality%3D85/assets/images/picea-glauca-densata-black-hills-spruce-5.jpg', text: 'Spruce', variable: 'B' },
            { img: 'https://i.etsystatic.com/6785602/r/il/e00b63/4682163260/il_570xN.4682163260_jl2u.jpg', text: 'Fake Plastic', variable: 'A' },
            { img: 'https://www.shutterstock.com/image-photo/only-pink-tree-260nw-2463214935.jpg', text: 'Cherry Blossom', variable: 'B' },
            { img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F01%2F31%2F07%2F66%2F23362974%2F3%2FrawImage.jpg&f=1&nofb=1&ipt=0d8b5b59be9b1fd6320e1c0c824c20f95a30e5b3b94b9d0c210aa8d2b0f8ec65&ipo=images', text: '‎', variable: 'A' },
        ]
    },
    {
        question: "Choose a wet animal 🦈",
        options: [
            { img: 'https://cdn.shopify.com/s/files/1/0311/3149/files/Betta_splendens.jpg?v=1682104588', text: 'Betta Fish', variable: 'B' },
            { img: 'https://media.istockphoto.com/id/91307328/photo/mallard-duck.jpg?s=170667a&w=0&k=20&c=PGwmxwiVJdLxQXACOkoW_xSaVo-pmm2HXEWvlWM9dYA=', text: 'Duck', variable: 'A' },
            { img: 'https://worldoftopia.com/wp-content/uploads/2023/04/Sawfish_Pristis_zijsron_Genova_Aquarium-768x870.jpg', text: 'Sawfish', variable: 'A' },
            { img: 'https://worldoftopia.com/wp-content/uploads/2022/05/Sheepshead-wrasse-1024x683.jpg', text: 'Kobudai', variable: 'B' },
        ]
    },
    {
        question: "Choose a dry animal 🐛",
        options: [
            { img: 'https://i.pinimg.com/736x/31/73/42/31734247fc003c3387156ed729f9870a.jpg', text: 'Beetle', variable: 'A' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/BIEDRONA.JPG/220px-BIEDRONA.JPG', text: 'Ladybug', variable: 'B' },
            { img: 'https://www.thoughtco.com/thmb/K7iqr5tCBXy98Px-Dbf3JpCLrYU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-581747279-56a520475f9b58b7d0daf23d.jpg', text: 'Dragonfly', variable: 'A' },
            { img: 'https://momgoescamping.com/wp-content/uploads/2017/02/strange-insects-evolution.jpg', text: 'Caterpillar', variable: 'B' },
        ]
    },
];

// Function to load a question
function loadQuestion() {
    const questionTitle = document.getElementById('question-title');
    const quizOptions = document.querySelector('.quiz-options');

    questionTitle.innerText = `#${currentQuestion + 1}. ${questions[currentQuestion].question}`;

    quizOptions.innerHTML = '';
    questions[currentQuestion].options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.setAttribute('data-variable', option.variable);

        const img = document.createElement('img');
        img.src = option.img;
        const caption = document.createElement('p');
        caption.innerText = option.text;

        optionDiv.appendChild(img);
        optionDiv.appendChild(caption);

        optionDiv.addEventListener('click', selectOption);

        quizOptions.appendChild(optionDiv);
    });
}

// Function to handle option selection
function selectOption(e) {
    const variable = e.currentTarget.getAttribute('data-variable');

    if (variable === 'A') {
        scoreA++;
    } else {
        scoreB++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show the result
function showResult() {
    const result = scoreA > scoreB ? "Variable A" : "Variable B";
    localStorage.setItem('quizResult', result);
    window.location.href = 'result.html';
}

window.onload = function () {
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const resultContainer = document.getElementById('result-container');

    // Retrieve the result from localStorage (A or B)
    const result = localStorage.getItem('quizResult');

    // Display the result text
    if (result === 'Variable A') {
        resultTitle.innerText = "Zany";
        resultDescription.innerText = "Amusingly unconventional and idiosyncratic.";
        resultContainer.classList.add('background-a'); // Add the background for Variable A
    } else if (result === 'Variable B') {
        resultTitle.innerText = "Wacky";
        resultDescription.innerText = "Funny or amusing in a slightly odd or peculiar way.";
        resultContainer.classList.add('background-b'); // Add the background for Variable B
    }
};


// Initialize the first question on the quiz page
if (document.querySelector('.quiz-options')) {
    loadQuestion();
}
