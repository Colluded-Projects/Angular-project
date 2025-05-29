// app.js
// app.js
var app = angular.module('blogVibeApp', ['ngSanitize']); // Add 'ngSanitize' here
// ... rest of your app.js
var app = angular.module('blogVibeApp', []);

app.controller('MainController', function($scope) {
    // Logo & Website Name
    $scope.logo = {
        textPart1: "Blog",
        textPart2: "Vibe"
    };
    

    // Navigation Items
      $scope.navItems = [
        { name: "Home", link: "index.html" },
        { name: "Blog", link: "blog.html" }, // Assuming future page, or use #trending if it's an on-page section/Angular route
        { name: "About", link: "about.html" },      // Links to your new static about page
        { name: "Team", link: "team.html" },        // For future team.html
        { name: "Contact", link: "contact.html" }   // For future contact.html
    ];


    // Hero Section Content
    $scope.hero = {
        titleLine1: "Stories that",
        titleHighlight: "inspire",
        titleLine2: "and inform",
        subtitle: "Discover compelling stories, expert insights, and fresh perspectives from our community of passionate writers. Join thousands of readers who trust us for quality content.",
        buttons: {
            startReading: "Start Reading",
            browseTopics: "Browse Topics"
        },
        stats: {
            monthlyReaders: "50",
            articlesPublished: "500"
        }
    };

    // Featured Stories (for homepage)
    $scope.featured = {
        title: "Featured Stories",
        subtitle: "Handpicked articles from our talented community of writers",
        viewAllButton: "View All Posts",
        articles: [
            {
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                category: "Technology",
                title: "The Future of Web Development: Trends to Watch in 2024",
                description: "Explore the latest trends shaping the web development landscape, from AI integration to new frameworks.",
                readTime: "5 min read"
            },
            {
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                category: "Lifestyle",
                title: "Building Sustainable Habits: A Complete Guide",
                description: "Learn practical strategies to build lasting habits that will transform your personal and professional life.",
                readTime: "8 min read"
            },
            {
                 image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmltYWxpc3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=80", // <<< CORRECTED: Direct link to an image
                 category: "Design",
                 title: "The Art of Minimalist Design",
                 description: "Discover how minimalist principles can create powerful, user-friendly interfaces that stand the test of time.",           // Example
                 readTime: "6 min read",
         }
        ]
    };

     // Footer Content (for homepage)
    $scope.footer = {
        description: "Discover compelling stories, expert insights, and fresh perspectives from our community of passionate writers. Join the conversation.",
        socialMediaLinks: [
            { name: "Facebook", char: "f", link: "#" }, // Placeholder, update with actual links
            { name: "Twitter", char: "t", link: "#" },
            { name: "LinkedIn", char: "in", link: "#" },
            { name: "Email", char: "✉", link: "#" }
        ],
        quickLinks: {
            title: "Quick Links",
            links: [ // UPDATED FOOTER LINKS
                { name: "About Us", href: "about.html" },
                { name: "Blog", href: "blog.html" }, // Or #trending
                { name: "Contact", href: "contact.html" }
            ]
        },
        categoriesLinks: { // Keep a distinct name if you also have filter categories on the page
            title: "Categories",
            items: ["Technology", "Lifestyle", "Design", "Business"] // These are just text, not links in this structure
        }
    };

    $scope.currentYear = new Date().getFullYear();

    $scope.logAction = function(message) {
       console.log("Action on homepage:", message);
    };
});