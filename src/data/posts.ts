import type { Post } from "../redux/blog";


export const postsData: Post[] = [
  {
    "id": 1,
    "mainImage": "/assets/blog1.png",
    "title": "UX review presentations",
    "date": "Sunday, 1 Jan 2023",
    "description": "How do you create compelling presentations that wow your colleagues and impress your managers?",
    "categories": [   { "name": "Design", "color": "bg-[#F9F5FF] text-[#6941C6]" },{ "name": "Research" , "color":"bg-[#EEF4FF] text-[#3538CD] dark:bg-white" }, { "name": "Presentation","color": "bg-[#FDF2FA] text-[#C11574]"  }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go." },
      { "sectionImage": "/assets/blog-sub-2.png", "sectionContent": "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right." },
      { "sectionImage": "/assets/blog-sub-3.png", "sectionContent": "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid." },



    ],
  
  },
  {
    "id": 2,
    "mainImage": "/assets/blog2.png",
    "title": "Migrating to Linear 101",
    "date": "Sunday, 1 Jan 2023",
    "description": "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    "categories": [{ "name": "Design","color": "bg-[#F9F5FF] text-[#026AA2]"  },{ "name": "Research" , "color": "bg-[#F8F9FC] text-[#363F72]" }],
    "sections": [
        { "sectionImage": "/assets/blog-sub-5 .png", "sectionContent": "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides." },
      { "sectionImage": "/assets/blog-sub-6.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing." },

    ],
    
  },
  {
    "id": 3,
    "mainImage": "/assets/blog3.png",
    "title": "Building your API Stack",
    "date": "Sunday, 1 Jan 2023",
    "description": "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    "categories": [{ "name": "Design", "color": "bg-green-50 text-green-700"  }, { "name": "Research" , "color": "bg-[#FDF2FA] text-[#C11574]" }],
    "sections": [

        { "sectionImage": "/assets/blog-sub-8 .png", "sectionContent": "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides." },
      { "sectionImage": "/assets/blog-sub-9.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },

    ],
    
  },
  {
    "id": 4,
    "mainImage": "/assets/blog4.png",
    "title": "Grid system for better Design User Interface",
    "date": "Sunday, 1 Jan 2023",
    "description": "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    "categories": [{ "name": "Design", "color": "bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Interface" ,"color": "bg-[#FDF2FA] text-[#C11574]" }],
    "sections": [
            { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing." },

    ],

    
  },  {
    "id": 5,
    "mainImage": "/assets/blog5.png",
    "title": "Bill Walsh leadership lessons",
    "date": "Sunday, 1 Jan 2023",
    "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    "categories": [{ "name": "Leadership", "color": "bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Management", "color": "bg-[#F8F9FC] text-[#363F72]"  }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-10.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-11.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." }


    ],
    
  },
    {
    "id": 6,
    "mainImage": "/assets/blog6.png",
    "title": "PM mental models",
    "date": "Sunday, 1 Jan 2023",
    "description": "Mental models are simple expressions of complex processes or relationships.",
    "categories": [{ "name": "Product", "color": "bg-[#F0F9FF] text-[#026AA2]"  }, { "name": "Frameworks" , "color": "bg-[#FFF6ED] text-[#C4320A]" }, { "name": "Research", "color": "bg-[#EEF4FF] text-[#3538CD]"  }],
    "sections": [
       { "sectionImage": "/assets/blog-sub-12.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-13.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-14.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },

    ],
    
  },  {
    "id": 7,
    "mainImage": "/assets/blog7.jpg",
    "title": "What is Wireframing?",
    "date": "Sunday, 1 Jan 2023",
    "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    "categories": [{ "name": "Design" , "color":"bg-[#F9F5FF] text-[#6941C6]" }, { "name": "Research", "color": "bg-[#EEF4FF] text-[#3538CD]"  }],
    "sections": [
        { "sectionImage": "/assets/blog-sub-10.png", "sectionContent": "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile." },
      { "sectionImage": "/assets/blog-sub-13.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element. A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate." },
      { "sectionImage": "/assets/blog-sub-9.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate." }
    ],
    
  },  {
    "id": 8,
    "mainImage": "/assets/blog8.jpg",
    "title": "How collaboration makes us better designers",
    "date": "Sunday, 1 Jan 2023",
    "description": "Collaboration can make our teams stronger, and our individual designs better.",
    "categories": [{ "name": "Design", "color":"bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Interface" , "color": "bg-[#EEF4FF] text-[#3538CD]"}],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
      { "sectionImage": "/assets/blog-sub-5.png", "sectionContent": `Using a grid benefits both end users and the designers alike
         Designers can quickly put together well-aligned interfaces.
Users can easily scan predictable grid-based interfaces.
A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.` }
    ],
    
  },  {
    "id":9,
    "mainImage": "/assets/blog9.jpg",
    "title": "Our top 10 Javascript frameworks to use",
    "date": "Sunday, 1 Jan 2023",
    "description": "JavaScript frameworks make development easy with extensive features and functionalities.",
    "categories": [{ "name": "Tools", "color": "bg-[#FDF2FA] text-[#C11574]"  }, { "name": "Software Development", "color": "bg-[#ECFDF3] text-[#027A48]"  },{ "name": "TSaaS", "color": "bg-[#FFF1F3] text-[#C01048]"  }],
    "sections": [
      { "sectionImage": "/assets//assets/blog-sub-2.png", "sectionContent": "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi quibusdam, sed nisi eum numquam quos nostrum officiis perferendis commodi, totam, ut asperiores quae culpa ab incidunt voluptate pariatur?" },
      { "sectionImage": "/assets/blog-sub-4.png", "sectionContent": "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi quibusdam, sed nisi eum numquam quos nostrum officiis perferendis commodi, totam, ut asperiores quae culpa ab incidunt voluptate pariatur?id layouts are an essential component of responsive web design"}
    ],
    
  },  {
    "id": 10,
    "mainImage": "/assets/blog10.jpg",
    "title": "Podcast: Creating a better CX Community",
    "date": "Sunday, 1 Jan 2023",
    "description": "Starting a community doesn’t need to be complicated, but how do you get started?",
    "categories": [{ "name": "Podcasts" , "color": "bg-[#F9F5FF] text-[#6941C6]" }, { "name": "Customer Success" , "color": "bg-[#F8F9FC] text-[#363F72]" }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "A sunset is a beautiful, fleeting reminder to pause, breathe, and appreciate the present moment. Whether you are watching the sky paint itself in vibrant colors over the ocean or reflecting at the end of a long day, sunsets offer the perfect daily reset." },
      { "sectionImage": "/assets/blog-sub-6.png", "sectionContent": " You don't need to travel far to catch a breathtaking view. Simply find a local open space, a quiet balcony, or take a peaceful stroll. For the ultimate local experience, you can head to Hoek van Holland or stroll along the Westland coastline to watch the colors reflect over the water.Grab your favorite warm drink, leave your phone in your pocket, and let the natural light show do the rest.A sunset is a beautiful, fleeting reminder to pause, breathe, and appreciate the present moment. Whether you are watching the sky paint itself in vibrant colors over the ocean or reflecting at the end of a long day, sunsets offer the perfect daily reset." }
    ],
    
  },  
   {
    "id": 1,
    "mainImage": "/assets/blog1.png",
    "title": "UX review presentations",
    "date": "Sunday, 1 Jan 2023",
    "description": "How do you create compelling presentations that wow your colleagues and impress your managers?",
    "categories": [   { "name": "Design", "color": "bg-[#F9F5FF] text-[#6941C6]" },{ "name": "Research" , "color":"bg-[#EEF4FF] text-[#3538CD] dark:bg-white" }, { "name": "Presentation","color": "bg-[#FDF2FA] text-[#C11574]"  }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go." },
      { "sectionImage": "/assets/blog-sub-2.png", "sectionContent": "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right." },
      { "sectionImage": "/assets/blog-sub-3.png", "sectionContent": "Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid." },



    ],
  
  },
  {
    "id": 2,
    "mainImage": "/assets/blog2.png",
    "title": "Migrating to Linear 101",
    "date": "Sunday, 1 Jan 2023",
    "description": "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    "categories": [{ "name": "Design","color": "bg-[#F9F5FF] text-[#026AA2]"  },{ "name": "Research" , "color": "bg-[#F8F9FC] text-[#363F72]" }],
    "sections": [
        { "sectionImage": "/assets/blog-sub-5 .png", "sectionContent": "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides." },
      { "sectionImage": "/assets/blog-sub-6.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing." },

    ],
    
  },
  {
    "id": 3,
    "mainImage": "/assets/blog3.png",
    "title": "Building your API Stack",
    "date": "Sunday, 1 Jan 2023",
    "description": "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    "categories": [{ "name": "Design", "color": "bg-green-50 text-green-700"  }, { "name": "Research" , "color": "bg-[#FDF2FA] text-[#C11574]" }],
    "sections": [

        { "sectionImage": "/assets/blog-sub-8 .png", "sectionContent": "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides." },
      { "sectionImage": "/assets/blog-sub-9.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },

    ],
    
  },
  {
    "id": 4,
    "mainImage": "/assets/blog4.png",
    "title": "Grid system for better Design User Interface",
    "date": "Sunday, 1 Jan 2023",
    "description": "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    "categories": [{ "name": "Design", "color": "bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Interface" ,"color": "bg-[#FDF2FA] text-[#C11574]" }],
    "sections": [
            { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing." },

    ],

    
  },  {
    "id": 5,
    "mainImage": "/assets/blog5.png",
    "title": "Bill Walsh leadership lessons",
    "date": "Sunday, 1 Jan 2023",
    "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    "categories": [{ "name": "Leadership", "color": "bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Management", "color": "bg-[#F8F9FC] text-[#363F72]"  }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-10.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-11.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." }


    ],
    
  },
    {
    "id": 6,
    "mainImage": "/assets/blog6.png",
    "title": "PM mental models",
    "date": "Sunday, 1 Jan 2023",
    "description": "Mental models are simple expressions of complex processes or relationships.",
    "categories": [{ "name": "Product", "color": "bg-[#F0F9FF] text-[#026AA2]"  }, { "name": "Frameworks" , "color": "bg-[#FFF6ED] text-[#C4320A]" }, { "name": "Research", "color": "bg-[#EEF4FF] text-[#3538CD]"  }],
    "sections": [
       { "sectionImage": "/assets/blog-sub-12.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-13.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },
      { "sectionImage": "/assets/blog-sub-14.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element." },

    ],
    
  },  {
    "id": 7,
    "mainImage": "/assets/blog7.jpg",
    "title": "What is Wireframing?",
    "date": "Sunday, 1 Jan 2023",
    "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    "categories": [{ "name": "Design" , "color":"bg-[#F9F5FF] text-[#6941C6]" }, { "name": "Research", "color": "bg-[#EEF4FF] text-[#3538CD]"  }],
    "sections": [
        { "sectionImage": "/assets/blog-sub-10.png", "sectionContent": "Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile." },
      { "sectionImage": "/assets/blog-sub-13.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element. A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate." },
      { "sectionImage": "/assets/blog-sub-9.png", "sectionContent": "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate." }
    ],
    
  },  {
    "id": 8,
    "mainImage": "/assets/blog8.jpg",
    "title": "How collaboration makes us better designers",
    "date": "Sunday, 1 Jan 2023",
    "description": "Collaboration can make our teams stronger, and our individual designs better.",
    "categories": [{ "name": "Design", "color":"bg-[#F9F5FF] text-[#6941C6]"  }, { "name": "Interface" , "color": "bg-[#EEF4FF] text-[#3538CD]"}],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)" },
      { "sectionImage": "/assets/blog-sub-5.png", "sectionContent": `Using a grid benefits both end users and the designers alike
         Designers can quickly put together well-aligned interfaces.
Users can easily scan predictable grid-based interfaces.
A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.` }
    ],
    
  },  {
    "id":9,
    "mainImage": "/assets/blog9.jpg",
    "title": "Our top 10 Javascript frameworks to use",
    "date": "Sunday, 1 Jan 2023",
    "description": "JavaScript frameworks make development easy with extensive features and functionalities.",
    "categories": [{ "name": "Tools", "color": "bg-[#FDF2FA] text-[#C11574]"  }, { "name": "Software Development", "color": "bg-[#ECFDF3] text-[#027A48]"  },{ "name": "TSaaS", "color": "bg-[#FFF1F3] text-[#C01048]"  }],
    "sections": [
      { "sectionImage": "/assets//assets/blog-sub-2.png", "sectionContent": "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing." },
      { "sectionImage": "/assets/blog-sub-7.png", "sectionContent": "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi quibusdam, sed nisi eum numquam quos nostrum officiis perferendis commodi, totam, ut asperiores quae culpa ab incidunt voluptate pariatur?" },
      { "sectionImage": "/assets/blog-sub-4.png", "sectionContent": "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi quibusdam, sed nisi eum numquam quos nostrum officiis perferendis commodi, totam, ut asperiores quae culpa ab incidunt voluptate pariatur?id layouts are an essential component of responsive web design"}
    ],
    
  },  {
    "id": 10,
    "mainImage": "/assets/blog10.jpg",
    "title": "Podcast: Creating a better CX Community",
    "date": "Sunday, 1 Jan 2023",
    "description": "Starting a community doesn’t need to be complicated, but how do you get started?",
    "categories": [{ "name": "Podcasts" , "color": "bg-[#F9F5FF] text-[#6941C6]" }, { "name": "Customer Success" , "color": "bg-[#F8F9FC] text-[#363F72]" }],
    "sections": [
      { "sectionImage": "/assets/blog-sub-1.png", "sectionContent": "A sunset is a beautiful, fleeting reminder to pause, breathe, and appreciate the present moment. Whether you are watching the sky paint itself in vibrant colors over the ocean or reflecting at the end of a long day, sunsets offer the perfect daily reset." },
      { "sectionImage": "/assets/blog-sub-6.png", "sectionContent": " You don't need to travel far to catch a breathtaking view. Simply find a local open space, a quiet balcony, or take a peaceful stroll. For the ultimate local experience, you can head to Hoek van Holland or stroll along the Westland coastline to watch the colors reflect over the water.Grab your favorite warm drink, leave your phone in your pocket, and let the natural light show do the rest.A sunset is a beautiful, fleeting reminder to pause, breathe, and appreciate the present moment. Whether you are watching the sky paint itself in vibrant colors over the ocean or reflecting at the end of a long day, sunsets offer the perfect daily reset." }
    ],
    
  }, 
];